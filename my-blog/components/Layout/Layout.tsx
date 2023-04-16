import { FC, ReactNode, useEffect, useState } from 'react'
import { FONT_SIZE_OPTIONS, FONT_SIZE_STORE_NAME, IS_DARK_MODE_STORE_NAME } from '@/config/common'
import Container, { ContainerProps } from '@/ui/atoms/Container'
import BlogProcessing from '@/ui/atoms/BlogProcessing'
import SelectFontSize from '@/ui/molecules/SelectFontSize'

import styles from './Layout.module.css'
import DarkModeToggle from '@/ui/molecules/DarkModeToggle'
import { useSetting } from '@/hooks/setting/use-setting'
import { useAtom } from 'jotai'
import { settingAtom } from '@/hooks/setting'

export interface LayoutProps {
  children?: ReactNode
  withFontSelection?: boolean
  withBlogProcessing?: boolean
  withDarkModeToggle?: boolean
  containerSize?: ContainerProps['maxWidth']
}

export const Layout: FC<LayoutProps> = (props) => {
  const { children, withFontSelection, withBlogProcessing, withDarkModeToggle, containerSize } = props

  const [activeIndex, setActiveIndex] = useState(0)

  const { setting, setSetting } = useSetting()

  const onChange = (index: number) => {
    setActiveIndex(index)
    localStorage.setItem(FONT_SIZE_STORE_NAME, FONT_SIZE_OPTIONS[index].value)
  }

  useEffect(() => {
    const size = localStorage.getItem(FONT_SIZE_STORE_NAME)
    const index = FONT_SIZE_OPTIONS.findIndex((x) => x.value === size)
    setActiveIndex(index > 0 ? index : 0)
  }, [])

  return (
    <Container
      maxWidth={containerSize}
      style={{
        fontSize: FONT_SIZE_OPTIONS[activeIndex].value,
      }}
    >
      <div className="sticky">
        {withBlogProcessing && <BlogProcessing />}
        <div className="d-flex mb-16 align-center justify-end">
          <div className="d-flex align-center gap-16">
            {withFontSelection && (
              <SelectFontSize activeIndex={activeIndex} options={FONT_SIZE_OPTIONS} onClick={onChange} />
            )}
            {withDarkModeToggle && (
              <DarkModeToggle
                value={setting.isDarkMode}
                onChange={(value) => {
                  localStorage.setItem(IS_DARK_MODE_STORE_NAME, value.toString())
                  value ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode')
                  setSetting((pre) => ({
                    ...pre,
                    isDarkMode: value,
                  }))
                }}
              />
            )}
          </div>
        </div>
      </div>
      {children}
    </Container>
  )
}

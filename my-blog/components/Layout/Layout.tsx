import { FC, ReactNode, useEffect, useState } from 'react'
import { useDarkMode } from '@/hooks/dark-mode/use-dark-mode'
import Container, { ContainerProps } from '@/ui/atoms/Container'
import BlogProcessing from '@/ui/atoms/BlogProcessing'
import SelectFontSize from '@/ui/molecules/SelectFontSize'
import DarkModeToggle from '@/ui/molecules/DarkModeToggle'
import { FONT_SIZE_OPTIONS, FONT_SIZE_STORE_NAME } from '@/config/common'

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

  const { darkMode, setDarkMode } = useDarkMode()

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
        <div className="d-flex mb-16 pb-16 align-center justify-end pr-16">
          <div className="d-flex align-center gap-16">
            {withFontSelection && (
              <SelectFontSize activeIndex={activeIndex} options={FONT_SIZE_OPTIONS} onClick={onChange} />
            )}
            {withDarkModeToggle && (
              <DarkModeToggle
                value={darkMode}
                onChange={(value) => {
                  console.log('value', value)

                  setDarkMode(value)
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

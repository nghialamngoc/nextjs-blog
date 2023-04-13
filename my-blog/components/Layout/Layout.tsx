import { FC, ReactNode, useEffect, useState } from 'react'
import { FONT_SIZE_OPTIONS, FONT_SIZE_STORE_NAME } from '@/config/common'
import Container, { ContainerProps } from '@/ui/atoms/Container'
import BlogProcessing from '@/ui/atoms/BlogProcessing'
import SelectFontSize from '@/ui/molecules/SelectFontSize'

import styles from './Layout.module.css'

export interface LayoutProps {
  children?: ReactNode
  withFontSelection?: boolean
  withBlogProcessing?: boolean
  containerSize?: ContainerProps['maxWidth']
}

export const Layout: FC<LayoutProps> = (props) => {
  const { children, withFontSelection, withBlogProcessing, containerSize } = props

  const [activeIndex, setActiveIndex] = useState(0)

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
      <div className={styles.sticky}>
        {withBlogProcessing && <BlogProcessing />}
        {withFontSelection && (
          <div className="d-flex mb-16 align-center justify-end">
            <SelectFontSize activeIndex={activeIndex} options={FONT_SIZE_OPTIONS} onClick={onChange} />
          </div>
        )}
      </div>
      {children}
    </Container>
  )
}

import { FONT_SIZE_OPTIONS, FONT_SIZE_STORE_NAME } from '@/config/common'
import Container, { ContainerProps } from '@/ui/atoms/Container'
import SelectFontSize from '@/ui/molecules/SelectFontSize'
import { FC, ReactNode, useEffect, useState } from 'react'

export interface LayoutProps {
  children?: ReactNode
  withFontSelection?: boolean
  containerSize?: ContainerProps['maxWidth']
}

export const Layout: FC<LayoutProps> = (props) => {
  const { children, withFontSelection, containerSize } = props

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
      <div className="d-flex mb-16 align-center justify-end">
        {withFontSelection && (
          <SelectFontSize activeIndex={activeIndex} options={FONT_SIZE_OPTIONS} onClick={onChange} />
        )}
      </div>
      {children}
    </Container>
  )
}

import Container from '@/ui/atoms/Container'
import { FC, ReactNode } from 'react'

export interface LayoutProps {
  children?: ReactNode
}

export const Layout: FC<LayoutProps> = (props) => {
  const { children } = props
  return <Container>{children}</Container>
}

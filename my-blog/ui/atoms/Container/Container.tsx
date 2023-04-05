import { forwardRef, ReactNode, HTMLAttributes } from 'react'
import styles from './Container.module.css'

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl'
  backgroundColor?: 'primary' | 'primary-lighter'
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>((props, ref) => {
  const { children, maxWidth = 'xl', backgroundColor, className, ...rest } = props

  const styleProps = {
    className: [styles.root, className].filter(Boolean).join(' '),
    'data-max-width': maxWidth,
    'data-bg-color': backgroundColor,
  }

  return (
    <div ref={ref} {...styleProps} {...rest}>
      {children}
    </div>
  )
})

Container.displayName = 'Container'

import { forwardRef, HTMLAttributes, ReactNode } from 'react'
import styles from './Badge.module.css'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'secondary' | 'white' | 'dark-blue'
  backgroundColor?: 'primary' | 'secondary'
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>((props, ref) => {
  const { children, size = 'md', color, className, ...rest } = props

  const styleProps = {
    className: [styles.root, className].filter(Boolean).join(' '),
    'data-size': size,
    'data-color': color,
  }

  return (
    <span ref={ref} {...styleProps} {...rest}>
      {children}
    </span>
  )
})

Badge.displayName = 'Badge'

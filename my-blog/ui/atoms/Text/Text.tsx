import { ElementType, forwardRef, HTMLAttributes } from 'react'
import { cx } from '@/utils/cx'
import styles from './Text.module.css'

export interface TextProps extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType
}

export const Text = forwardRef<HTMLOrSVGElement, TextProps>((props, ref) => {
  const { as: Component = 'p', children, className, ...rest } = props

  return (
    <Component ref={ref} className={cx(styles.root, className)} {...rest}>
      {children}
    </Component>
  )
})

Text.displayName = 'Text'

import { FC, HTMLAttributes } from 'react'
import { cx } from '@/utils/cx'
import styles from './TextDivider.module.css'

export const TextDivider: FC<HTMLAttributes<HTMLDivElement>> = ({ children, className, ...rest }) => {
  return (
    <div className={cx(styles.root, className, children ? 'gap-16' : '')} {...rest}>
      {children}
    </div>
  )
}

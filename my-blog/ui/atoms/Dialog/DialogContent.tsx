import { forwardRef, HTMLProps } from 'react'
import { cx } from '@/utils/cx'
import { useDialogContext } from './DialogContext'
import styles from './DialogContent.module.css'

export const DialogContent = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(function DialogContent(props, ref) {
  const { children, className, ...rest } = props
  const { size, isTransparent } = useDialogContext()

  return (
    <div
      ref={ref}
      data-testid="DialogContent"
      className={cx(
        styles.content,
        'd-flex flex-column gap-12 relative w-full bg-white',
        'py-16 mx-16 round-16',
        'py-md-24 gap-md-16',
        'py-lg-32',
        {
          [styles.sm]: size === 'sm',
          [styles.md]: [undefined, 'md'].includes(size),
          [styles.lg]: size === 'lg',
          [styles.full]: size === 'full',
          [styles.transparent]: isTransparent,
        },
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
})

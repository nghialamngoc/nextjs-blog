import { HTMLAttributes, forwardRef } from 'react'
import { cx } from '@/utils/cx'
import { useDialogContext } from './DialogContext'

export const DialogHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLElement>>(function DialogHeader(props, ref) {
  const { className, children, ...rest } = props
  const { size } = useDialogContext()

  return (
    <header
      ref={ref}
      className={cx(
        'px-16 px-md-24 px-lg-32',
        {
          'px-lg-48': size === 'lg',
        },
        className
      )}
      {...rest}
    >
      {children}
    </header>
  )
})

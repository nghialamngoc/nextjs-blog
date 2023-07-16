import { forwardRef, HTMLAttributes } from 'react'
import { cx } from '@/utils/cx'
import { useDialogContext } from './DialogContext'

export const DialogFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLElement>>(function DialogFooter(props, ref) {
  const { className, children, ...rest } = props
  const { size } = useDialogContext()

  return (
    <footer
      ref={ref}
      className={cx(
        'd-flex align-center justify-center gap-16',
        'px-16 px-md-24 px-lg-32',
        {
          'px-lg-48': size === 'lg',
        },
        className
      )}
      {...rest}
    >
      {children}
    </footer>
  )
})

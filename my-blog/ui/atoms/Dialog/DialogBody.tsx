import { forwardRef, HTMLProps } from 'react'
import { cx } from '@/utils/cx'
import { useDialogContext } from './DialogContext'

export const DialogBody = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(function DialogBody(props, ref) {
  const { children, className, ...rest } = props
  const { size } = useDialogContext()

  return (
    <div
      ref={ref}
      data-testid="DialogBody"
      className={cx(
        'py-8 pr-8 pl-16 mr-8 overflow-auto',
        'pl-md-24 pr-md-12 mr-md-12',
        'pl-lg-32 pr-lg-16 mr-lg-16',
        {
          'pl-lg-48 pr-lg-32 mr-lg-16': size === 'lg',
          'px-0 py-0 mx-0 my-0': size === 'full',
        },
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
})

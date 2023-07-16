import { forwardRef, ButtonHTMLAttributes } from 'react'
import { cx } from '@/utils/cx'
import { useDialogContext } from './DialogContext'
import styles from './DialogCloseButton.module.css'
import IconClose from '../icons/IconClose'

export const DialogCloseButton = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  function DialogCloseButton(props, ref) {
    const { className, ...rest } = props
    const { setOpen } = useDialogContext()

    return (
      <button
        ref={ref}
        type="button"
        className={cx(styles.closeBtn, className)}
        {...rest}
        onClick={() => setOpen(false)}
      >
        <IconClose />
      </button>
    )
  }
)

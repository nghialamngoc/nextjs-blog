import { HTMLProps, forwardRef } from 'react'
import { cx } from '@/utils/cx'
import { useDialogContext } from './DialogContext'
import styles from './DialogOverlay.module.css'

export const DialogOverlay = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(function DialogOverlay(props, ref) {
  const { className, ...rest } = props
  const { onOverlayClick } = useDialogContext()

  return <div ref={ref} className={cx(styles.overlay, className)} {...rest} onClick={onOverlayClick} />
})

import { FC, PropsWithChildren } from 'react'
import { cx } from '@/utils/cx'
import { Portal } from '../Portal'
import { UseDialogProps, useDialog } from './use-dialog'
import { DialogProvider } from './DialogContext'
import styles from './Dialog.module.css'

export type DialogProps = PropsWithChildren<UseDialogProps>

export const Dialog: FC<DialogProps> = (props) => {
  const { children, ...rest } = props

  const context = useDialog(rest)

  return (
    <DialogProvider value={context}>
      {context.isOpen && (
        <Portal>
          <div
            className={cx(styles.dialog, {
              [styles.centered]: context.isCentered !== false,
            })}
          >
            {children}
          </div>
        </Portal>
      )}
    </DialogProvider>
  )
}

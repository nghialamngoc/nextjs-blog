import Button from '@/ui/atoms/Button'
import Dialog, { DialogBody, DialogContent, DialogFooter, DialogOverlay } from '@/ui/atoms/Dialog'
import NiceModal, { useModal } from '@ebay/nice-modal-react'
import { ReactNode } from 'react'

export interface ConfirmModalProps {
  title?: string
  description?: ReactNode
  cancelText?: string
  submitText?: string
  onClose?: () => void
  onSubmit?: () => void
}

export const ConfirmModal = NiceModal.create<ConfirmModalProps>((props) => {
  const { title, description, cancelText, submitText, onClose, onSubmit } = props
  const modal = useModal()

  const onHide = () => {
    onClose?.()
    modal.hide()
  }

  return (
    <Dialog size="sm" isOpen={modal.visible} onOpen={modal.show} onHide={onHide}>
      <DialogOverlay />
      <DialogContent
        style={{
          background: 'white',
        }}
      >
        <DialogBody>
          <div className="size-24 weight-medium mb-16">{title}</div>
          <div className="size-18 mb-16">{description}</div>
        </DialogBody>
        <DialogFooter>
          {cancelText && (
            <Button className="w-full w-md-200" type="button" variant="secondary" onClick={onHide}>
              {cancelText}
            </Button>
          )}
          {submitText && (
            <Button
              className="w-full w-md-200"
              form="form"
              onClick={() => {
                modal.hide()
                onSubmit?.()
              }}
            >
              {submitText}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
})

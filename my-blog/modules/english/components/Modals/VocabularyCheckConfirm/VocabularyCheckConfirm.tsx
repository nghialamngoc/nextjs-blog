import Button from '@/ui/atoms/Button'
import Dialog, { DialogBody, DialogContent, DialogFooter, DialogOverlay } from '@/ui/atoms/Dialog'
import NiceModal, { useModal } from '@ebay/nice-modal-react'
import styles from './VocabularyCheckConfirm.module.css'

export interface VocabubaryCheckConfirmProps {
  totalWords?: number
  description?: string
  onClose?: () => void
  onSubmit?: () => void
}

export const VocabubaryCheckConfirm = NiceModal.create<VocabubaryCheckConfirmProps>((props) => {
  const { description, onClose, onSubmit } = props
  const modal = useModal()

  const onHide = () => {
    onClose?.()
    modal.hide()
  }

  return (
    <Dialog size="sm" isOpen={modal.visible} onOpen={modal.show} onHide={onHide}>
      <DialogOverlay />
      <DialogContent className={styles.modal}>
        <DialogBody className={styles.body}>
          <div className="size-24 weight-medium mb-16">Are you ré dy?</div>
          <div className="size-18 mb-16">{description}</div>
          <div className="mb-16">
            <div className="mb-4">Examination rules:</div>
            <div className="size-14">
              <div>- Make sure that you are prepared for the examination.</div>
              <div>- Don&apos;t use any documents.</div>
              <div>- Don&apos;t reload page.</div>
            </div>
          </div>
          <strong className="size-14">
            Note: Mỗi từ sai chép phát mỗi từ 5 lần và trang web này có hệ thống kiểm tra gian lận chạy bằng cơm.
          </strong>
        </DialogBody>
        <DialogFooter>
          <Button className="w-full w-md-200" type="button" variant="secondary" onClick={onHide}>
            Not yet
          </Button>
          <Button className="w-full w-md-200" form="form" onClick={onSubmit}>
            Let&apos;s go
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
})

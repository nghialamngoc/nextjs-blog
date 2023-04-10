import Container from '@/ui/atoms/Container'
import TextDivider from '@/ui/atoms/TextDivider'

export const PostDetail = () => {
  return (
    <Container maxWidth="md">
      <div className="d-flex justify-between mb-16">
        <span>Living</span>
        <div>July 25, 2022</div>
      </div>
      <div className="size-32 mb-32 weight-medium">4 Cấp độ tự kỷ luật bản thân</div>
      <div className="mb-32">
        <TextDivider />
      </div>
      <div className="size-20 lh-24">
        Từ nhỏ, mình đã luôn là đứa hay muốn vượt ra khỏi những quy điều, phá luật, nên đã nghĩ bản thân sẽ không thể
        nào duy trì lâu dài tính kỷ luật. Thế nhưng, chuyện đã khác cho đến khi cuộc sống của mình có nhiều thứ tồi tệ
        xảy ra cùng một lúc và mình bắt đầu chạy bộ – chạy bộ một cách nghiêm túc.
      </div>
    </Container>
  )
}

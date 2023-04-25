import Markdown from '@/ui/atoms/Markdown'
import TextDivider from '@/ui/atoms/TextDivider'
import { FC } from 'react'

export interface PostDetailProps {
  id: string
  title: string
  description: string
  categories: string[]
  content: string
}

export const PostDetail: FC<PostDetailProps> = (props) => {
  const { content } = props

  return (
    <div
      style={{
        height: '200vh',
      }}
    >
      <div className="d-flex justify-between mb-16">
        <span className="size-08-em">Living</span>
        <div className="size-08-em">July 25, 2022</div>
      </div>
      <div className="size-2-em mb-32 weight-medium">4 Cấp độ tự kỷ luật bản thân</div>
      <div className="mb-32">
        <TextDivider />
      </div>
      <div className="size-1-em lh-150">
        <Markdown content={content}></Markdown>
      </div>
    </div>
  )
}

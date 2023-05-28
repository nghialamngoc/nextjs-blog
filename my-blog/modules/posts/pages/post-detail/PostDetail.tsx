import Markdown from '@/ui/atoms/Markdown'
import TextDivider from '@/ui/atoms/TextDivider'
import OnThisPage from '@/ui/molecules/OnThisPage'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { FC, useEffect, useState } from 'react'
import styles from './PostDetail.module.css'

export interface PostDetailProps {
  id: string
  title: string
  description: string
  categories: string[]
  mdxSource: MDXRemoteSerializeResult
}

export const PostDetail: FC<PostDetailProps> = (props) => {
  const { mdxSource } = props
  const [contentHeight, setContentHeight] = useState(0)

  useEffect(() => {
    const el = document.getElementById('post-detail')
    setContentHeight(el?.offsetHeight || 0)
  }, [])

  return (
    <div className="pb-40" id="post-detail">
      <div className="d-flex justify-between mb-16">
        <span className="size-08-em">Living</span>
        <div className="size-08-em">July 25, 2022</div>
      </div>
      <div className="size-32 mb-32 weight-medium">4 Cấp độ tự kỷ luật bản thân</div>
      <div className="mb-32">
        <TextDivider />
      </div>
      <div
        className={styles.onThisPageSection}
        style={{
          height: contentHeight,
        }}
      >
        <div className="sticky">
          <OnThisPage
            title="ON THIS PAGE"
            items={[
              {
                label: 'Overview',
                id: '#overview',
              },
              {
                label: 'Reference',
                id: '#reference',
                children: [
                  {
                    label: 'useRef(initialValue)',
                    id: '#useref-initial-value',
                  },
                ],
              },
              {
                label: 'Usage',
                id: '#usage',
                children: [
                  {
                    label: 'useRef(initialValue)',
                    id: '#useref-initial-value',
                  },
                ],
              },
            ]}
          ></OnThisPage>
        </div>
      </div>
      <div className="size-1-em lh-150">
        <Markdown mdxSource={mdxSource}></Markdown>
      </div>
    </div>
  )
}

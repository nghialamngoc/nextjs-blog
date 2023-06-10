import Markdown from '@/ui/atoms/Markdown'
import TextDivider from '@/ui/atoms/TextDivider'
import OnThisPage, { OnThisPageLink } from '@/ui/molecules/OnThisPage'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { FC, useEffect, useState } from 'react'
import styles from './PostDetail.module.css'

export interface PostDetailProps {
  id: string
  title: string
  description: string
  categories: string[]
  createDate: string
  onThisPage: OnThisPageLink[]
  mdxSource: MDXRemoteSerializeResult
}

export const PostDetail: FC<PostDetailProps> = (props) => {
  const { mdxSource, categories, createDate, title, onThisPage } = props
  const [contentHeight, setContentHeight] = useState(0)

  useEffect(() => {
    const el = document.getElementById('post-detail')
    setContentHeight(el?.offsetHeight || 0)
  }, [])

  return (
    <div className="pb-40" id="post-detail">
      <div className="d-flex justify-between mb-16">
        <span className="size-08-em">{categories.join(', ')}</span>
        <div className="size-08-em">{createDate}</div>
      </div>
      <div className="size-32 mb-32 weight-medium">{title}</div>
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
          <OnThisPage title="ON THIS PAGE" items={onThisPage ?? []}></OnThisPage>
        </div>
      </div>
      <div className="size-1-em lh-150">
        <Markdown mdxSource={mdxSource}></Markdown>
      </div>
    </div>
  )
}

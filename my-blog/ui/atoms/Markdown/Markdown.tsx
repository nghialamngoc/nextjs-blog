import { cx } from '@/utils/cx'
import dynamic from 'next/dynamic'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { forwardRef, HTMLAttributes } from 'react'
import MarkdownCode from './MarkdownCode'
import MarkdownSandbox from './MarkdownSandbox'

// const MarkdownSandbox = dynamic(() => import('./MarkdownSandbox'), {
//   ssr: false,
// })

import styles from './Markdown.module.css'

// const remarkPlugins: Options['remarkPlugins'] = [RemarkGfm, RemarkBreaks]
// const rehypePlugins: Options['rehypePlugins'] = [RehypeRaw]

export const MDXComponents = {
  MarkdownCode,
  MarkdownSandbox,
}

export interface MarkdownProps extends Omit<HTMLAttributes<HTMLDivElement>, 'color'> {
  mdxSource?: MDXRemoteSerializeResult
}
export const Markdown = forwardRef<HTMLDivElement, MarkdownProps>((props, ref) => {
  const { mdxSource, className, ...rest } = props

  if (mdxSource) {
    return (
      <div ref={ref} className={cx(styles.root, className)} {...rest}>
        <MDXRemote {...mdxSource} components={MDXComponents}></MDXRemote>
      </div>
    )
  }

  return null
})

Markdown.displayName = 'Markdown'

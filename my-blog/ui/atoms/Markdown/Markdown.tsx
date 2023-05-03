import { cx } from '@/utils/cx'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { forwardRef, HTMLAttributes } from 'react'
import MarkdownCode from './MarkdownCode'

// const MarkdownCode = dynamic(() => import('./MarkdownCode'), {
//   ssr: false,
// })

import styles from './Markdown.module.css'

// const remarkPlugins: Options['remarkPlugins'] = [RemarkGfm, RemarkBreaks]
// const rehypePlugins: Options['rehypePlugins'] = [RehypeRaw]

export const MDXComponents = {
  MarkdownCode,
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

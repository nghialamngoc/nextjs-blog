import { cx } from '@/utils/cx'
import { forwardRef, HTMLAttributes } from 'react'
import ReactMarkdown, { Components, Options } from 'react-markdown'
import RehypeRaw from 'rehype-raw'
import RemarkBreaks from 'remark-breaks'
import RemarkGfm from 'remark-gfm'

import styles from './Markdown.module.css'

const remarkPlugins: Options['remarkPlugins'] = [RemarkGfm, RemarkBreaks]
const rehypePlugins: Options['rehypePlugins'] = [RehypeRaw]

// Custom components
const components: Components = {
  img(imageProps) {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img loading="lazy" {...imageProps} />
  },
}

export interface MarkdownProps extends Omit<HTMLAttributes<HTMLDivElement>, 'color'> {
  content?: string
}
export const Markdown = forwardRef<HTMLDivElement, MarkdownProps>((props, ref) => {
  const { content, className, ...rest } = props

  if (content) {
    return (
      <div ref={ref} className={cx(styles.root, className)} {...rest}>
        <ReactMarkdown remarkPlugins={remarkPlugins} rehypePlugins={rehypePlugins} components={components}>
          {content}
        </ReactMarkdown>
      </div>
    )
  }

  return null
})

Markdown.displayName = 'Markdown'

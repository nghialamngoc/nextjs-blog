import { cx } from '@/utils/cx'
import dynamic from 'next/dynamic'
import React, { forwardRef, HTMLAttributes } from 'react'
import ReactMarkdown, { Components, Options } from 'react-markdown'
import RehypeRaw from 'rehype-raw'
import RemarkBreaks from 'remark-breaks'
import RemarkGfm from 'remark-gfm'
import {
  SandpackCodeEditor,
  SandpackFileExplorer,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
} from '@codesandbox/sandpack-react'

const MarkdownCode = dynamic(() => import('./MarkdownCode'), {
  ssr: false,
})

import styles from './Markdown.module.css'

const remarkPlugins: Options['remarkPlugins'] = [RemarkGfm, RemarkBreaks]
const rehypePlugins: Options['rehypePlugins'] = [RehypeRaw]

// Custom components
const components: Components = {
  img(imageProps) {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img loading="lazy" {...imageProps} />
  },

  p: 'div',

  // Custom code
  code: (props) => <MarkdownCode {...props}></MarkdownCode>,
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

        {/* <SandpackProvider
          template="nextjs"
          options={{
            autorun: true,
            autoReload: false,
          }}
          files={{
            'text.js': `export default function Text() {
                return <div>Text component</div>
            }`,
            '/pages/index.js': `import Text from '/text.js'
            export default function Home({ data }) {
              return (
                            <div>
                              <h1>Hello {data}</h1>
                              <Text/>
                            </div>
                          );
                        }
                          
            export function getServerSideProps() {
              return {
                props: {
                  data: '2'
                }
              }
            }`,
          }}
        >
          <SandpackLayout>
            <SandpackCodeEditor showRunButton={false} />
            <SandpackPreview />
          </SandpackLayout>
        </SandpackProvider> */}
      </div>
    )
  }

  return null
})

Markdown.displayName = 'Markdown'

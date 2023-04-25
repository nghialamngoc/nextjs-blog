import { useDarkMode } from '@/hooks/dark-mode/use-dark-mode'
import { FC, HTMLAttributes } from 'react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { a11yDark, oneLight } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import styles from './MarkdownCode.module.css'

export interface MarkdownCodeProps extends HTMLAttributes<HTMLDivElement> {
  language?: string
  children?: any
}

export const MarkdownCode: FC<MarkdownCodeProps> = (props) => {
  const { language = 'javascript', children = '' } = props
  const { darkMode } = useDarkMode()

  return (
    <SyntaxHighlighter className={styles.root} language={language} style={darkMode ? a11yDark : oneLight}>
      {String(children).replace('\n', '')}
    </SyntaxHighlighter>
  )
}

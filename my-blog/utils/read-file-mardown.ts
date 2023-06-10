import { PostDetailProps } from '@/modules/posts/pages/post-detail'
import fs from 'fs'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import prism from 'remark-prism'
import { serialize } from 'next-mdx-remote/serialize'

export const readFileMarkdown = async (pathFile: string) => {
  const fileContents = fs.readFileSync(pathFile, 'utf8')

  const matterResult = matter(fileContents)

  const { data, content } = matterResult
  const { id = '', title = '', description = '', categories = [], createDate = '', onThisPage = [] } = data

  const postDetail: PostDetailProps = {
    id,
    title,
    categories,
    description,
    createDate,
    onThisPage,
    mdxSource: await serialize(content || ''),
  }

  return postDetail
}

export const markdownToHtml = async (markdown: string) => {
  const result = await remark()
    // https://github.com/sergioramos/remark-prism/issues/265
    .use(html, { sanitize: false })
    .use(prism)
    .process(markdown)
  return result.toString()
}

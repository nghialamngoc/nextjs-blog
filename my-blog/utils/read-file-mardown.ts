import { PostDetailProps } from '@/modules/posts/pages/post-detail'
import fs from 'fs'
import matter from 'gray-matter'

export const ReactFileMarkdown = (pathFile: string) => {
  const fileContents = fs.readFileSync(pathFile, 'utf8')

  const matterResult = matter(fileContents)
  const { id, title, description, categories, content } = matterResult.data || {}

  const data: PostDetailProps = {
    id,
    title,
    categories,
    description,
    content,
  }

  return data
}

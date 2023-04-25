import { GetServerSidePropsContext } from 'next'
import { ModuleAtom } from '@/hooks/module'
import { PostIdsMapping } from '@/post-files'
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { PostDetailProps } from '../../pages/post-detail'
import { readFileMarkdown } from '@/utils/read-file-mardown'

const handler = (props: ModuleAtom) => {
  return async (context: GetServerSidePropsContext) => {
    const { moduleSubPath } = props

    if (moduleSubPath) {
      const postSlug = moduleSubPath?.split('/')[0]
      const postPathName = PostIdsMapping[postSlug]

      if (postPathName) {
        const fullPath = path.join(process.cwd(), '/post-files/', postPathName)
        try {
          const fileData = await readFileMarkdown(fullPath)

          // const fileContent = fs.readFileSync(fullPath, 'utf8')
          // const { data, content } = matter(fileContent)
          // const { id = '', title = '', description = '', categories = [] } = data

          // const postDetail: PostDetailProps = {
          //   id,
          //   title,
          //   description,
          //   categories,
          //   content,
          // }

          return {
            props: fileData,
          }
        } catch (err) {
          console.log('[dev Sharing] [error]: Can not find post path name!')
          return {
            notFound: true,
          }
        }
      } else {
        return {
          notFound: true,
        }
      }
    }

    return {
      props: {},
    }
  }
}

export default handler

import { ModuleAtom } from '@/hooks/module'
import { PostIdsMapping } from '@/post-files'
import { readFileMarkdown } from '@/utils/read-file-mardown'
import { GetServerSidePropsContext } from 'next'
import path from 'path'

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

          return {
            props: fileData,
          }
        } catch (err) {
          console.log('[dev Sharing] [error]: ', err)
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

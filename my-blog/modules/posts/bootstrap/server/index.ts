import { DEFAULT_LOCALE } from '@/config/common'
import { ModuleAtom } from '@/hooks/module'
import { PostIdsMapping } from '@/data/post/post-files'
import { getPostList } from '@/services/server-side/post-list'
import { readFileMarkdown } from '@/utils/read-file-mardown'
import { error } from '@/utils/safety-log'
import { GetServerSidePropsContext } from 'next'
import path from 'path'

const handler = (props: ModuleAtom) => {
  return async (context: GetServerSidePropsContext) => {
    const { moduleSubPath } = props
    const { locale = DEFAULT_LOCALE } = context

    if (moduleSubPath) {
      const postSlug = moduleSubPath?.split('/')[0]
      const postPathName = PostIdsMapping[postSlug]

      if (postPathName) {
        const fullPath = path.join(process.cwd(), '/data/post/post-files/', postPathName)
        try {
          const fileData = await readFileMarkdown(fullPath)

          return {
            props: fileData,
          }
        } catch (err) {
          return {
            notFound: true,
          }
        }
      } else {
        return {
          notFound: true,
        }
      }
    } else {
      try {
        const postList = (await getPostList(locale)) ?? []

        return {
          props: {
            postList,
          },
        }
      } catch (err) {
        error('get post list data failed', err)
        return {
          notFound: true,
        }
      }
    }
  }
}

export default handler

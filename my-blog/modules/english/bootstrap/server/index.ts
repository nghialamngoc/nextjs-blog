import { GetServerSidePropsContext } from 'next'
import { ModuleAtom } from '@/hooks/module'
import { getTopicList } from '@/services/server-side/topic'

const validSubPath = ['vocabulary-check', 'grammar']

const handler = (props: ModuleAtom) => {
  return async (context: GetServerSidePropsContext) => {
    const { moduleSubPath } = props

    if (moduleSubPath && !validSubPath.includes(moduleSubPath)) {
      return {
        props: {},
        notFound: true,
      }
    }

    if (moduleSubPath === validSubPath[0]) {
      const topicData = await getTopicList()

      return {
        props: {
          topicData: topicData ?? {},
        },
      }
    }

    return {
      props: {},
    }
  }
}

export default handler

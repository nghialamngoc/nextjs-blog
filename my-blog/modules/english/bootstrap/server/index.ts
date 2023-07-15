import { GetServerSidePropsContext } from 'next'
import { ModuleAtom } from '@/hooks/module'

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

    return {
      props: {},
    }
  }
}

export default handler

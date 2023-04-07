import { GetServerSidePropsContext } from 'next'
import { ModuleAtom } from '@/hooks/module'

const handler = (props: ModuleAtom) => {
  return async (context: GetServerSidePropsContext) => {
    return {
      props: {},
    }
  }
}

export default handler

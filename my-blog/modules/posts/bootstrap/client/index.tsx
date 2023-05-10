import { PageProps } from '@/bootstrap/client'
import Layout from '@/components/Layout'
import { useModule } from '@/hooks/module/use-module'
import dynamic from 'next/dynamic'

const PostList = dynamic(() => import('../../pages/post-list'))
const PostDetail = dynamic(() => import('../../pages/post-detail'))

export default function PostModule(pageProps: any) {
  const { moduleSubPath } = useModule()

  return (
    <Layout containerSize="lg" withFontSelection={true} withBlogProcessing={true} withDarkModeToggle={true}>
      {moduleSubPath ? <PostDetail {...pageProps}></PostDetail> : <PostList></PostList>}
    </Layout>
  )
}

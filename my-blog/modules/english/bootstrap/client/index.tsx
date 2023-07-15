import Layout from '@/components/Layout'
import { useModule } from '@/hooks/module/use-module'
import dynamic from 'next/dynamic'

const Grammer = dynamic(() => import('../../pages/grammar'))
const VocabularyCheck = dynamic(() => import('../../pages/vocabulary-check'))

export default function English(pageProps: any) {
  const { moduleSubPath } = useModule()

  const isVocabularyCheck = moduleSubPath === 'vocabulary-check'

  return (
    <Layout containerSize="lg" withFontSelection={true} withBlogProcessing={true} withDarkModeToggle={true}>
      {isVocabularyCheck ? <VocabularyCheck {...pageProps} /> : <Grammer {...pageProps} />}
    </Layout>
  )
}

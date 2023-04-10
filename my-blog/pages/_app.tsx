import type { AppProps } from 'next/app'
import { Provider as JotaiProvider } from 'jotai'

// Global styles
import '@/ui/styles/index.css'
import { useRouter } from 'next/router'
import { mainStore } from '@/store/main'
import { useModuleInit } from '@/hooks/module/use-module-init'

export default function App({ Component, pageProps }: AppProps) {
  const { moduleData } = pageProps ?? {}

  const { locale } = useRouter()

  useModuleInit(moduleData)

  return (
    // Because each store should be init once
    // So when change locale store will not init again
    // That's why we use difference store for each locale
    <JotaiProvider store={locale === 'en' ? mainStore.en : mainStore.vn}>
      <Component {...pageProps} />
    </JotaiProvider>
  )
}

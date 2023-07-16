import { useModuleInit } from '@/hooks/module/use-module-init'
import { mainStore } from '@/store/main'
import { Provider as JotaiProvider } from 'jotai'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { Provider as NiceModalProvider } from '@ebay/nice-modal-react'

// Global styles
import '@/ui/styles/index.css'

export default function App({ Component, pageProps }: AppProps) {
  const { moduleData, ...rest } = pageProps ?? {}

  const { locale } = useRouter()

  useModuleInit(moduleData)

  return (
    // Because each store should be init once
    // So when change locale store will not init again
    // That's why we use difference store for each locale
    <JotaiProvider store={locale === 'en' ? mainStore.en : mainStore.vn}>
      <NiceModalProvider>
        <Component {...pageProps} />
      </NiceModalProvider>
    </JotaiProvider>
  )
}

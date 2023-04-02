import type { AppProps } from 'next/app'

// Global styles
import '@/ui/styles/index.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

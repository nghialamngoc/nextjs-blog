import { useStore as useJotaiStore } from 'jotai'
import { useRouter } from 'next/router'
import { mainStore } from '@/store/main'

export const useStore = () => {
  const { locale } = useRouter()

  // Select correct store base on locale
  // We are using difference store base on locale
  return useJotaiStore({ store: locale === 'en' ? mainStore.en : mainStore.vn })
}

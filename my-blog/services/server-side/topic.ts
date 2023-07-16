import { DEFAULT_LOCALE } from '@/config/common'
import { error } from '@/utils/safety-log'
import { client } from './client'

const CACHE_KEY = '_topic_list'

export const getTopicList = async (locale: string = DEFAULT_LOCALE) => {
  try {
    const response = await client({
      endPoint: 'english/vocabularies',
      cacheKey: locale + CACHE_KEY,
      isLocalFile: true,
      isFolder: true,
    })

    // Transform data
    return response
  } catch (e) {
    error('get topic list error: ', { locale, e })
    return null
  }
}

import { DEFAULT_LOCALE } from '@/config/common'
import { error } from '@/utils/safety-log'
import { client } from './client'

const CACHE_KEY = '_post_list'

export const getPostList = async (locale: string = DEFAULT_LOCALE) => {
  try {
    const response = await client({
      endPoint: '/post-list',
      cacheKey: locale + CACHE_KEY,
    })

    // Transform data
    return response
  } catch (e) {
    error('get post list error: ', { locale, e })
    return {}
  }
}

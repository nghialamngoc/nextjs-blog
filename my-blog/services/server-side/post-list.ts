import { DEFAULT_LOCALE } from '@/config/common'
import { error } from '@/utils/safety-log'
import { client } from './client'

const CACHE_KEY = '_post_list'

export const getPostList = async (locale: string = DEFAULT_LOCALE) => {
  try {
    const response = await client({
      endPoint: 'post/post-list/post-list.json',
      cacheKey: locale + CACHE_KEY,
      isLocalFile: true,
    })

    // Transform data
    return response
  } catch (e) {
    error('get post list error: ', { locale, e })
    return null
  }
}

import axios from 'axios'
import { DEFAULT_LOCALE } from '@/config/common'
import { get, set } from '@/utils/file-cache'
import { info } from '@/utils/safety-log'
import { API_DEFAULT_CACHE_TIME, API_ENABLE_CACHE, API_URL, API_TOKEN } from '@/config/env'
import { readJson, readdirSync } from 'fs-extra'

const MAP_LOCALES: Record<string, string> = {
  en: 'en',
  vn: 'vn',
}

export interface ApiProps {
  endPoint: string
  method?: 'POST' | 'GET'
  variables?: Record<string, any>
  cacheKey?: string
  ttl?: number
  isLocalFile?: boolean
  isFolder?: boolean
}

export const client = async <T extends Record<string, any>>(props: ApiProps) => {
  if (typeof window !== 'undefined') throw new Error('Please DONT call this on client side')
  if (!API_URL) throw new Error('Missing API_END_POINT. Please check environment variables')

  const { endPoint, method = 'GET', variables, cacheKey, ttl = API_DEFAULT_CACHE_TIME, isLocalFile, isFolder } = props

  const locale: string = variables?.locale?.toLowerCase()

  const enableCache = cacheKey && API_ENABLE_CACHE

  const cachedData = enableCache ? await get<T>(cacheKey) : null

  // Cached data
  if (cachedData) {
    info('using cached data: ', cacheKey, variables)
    return cachedData
  }

  try {
    let data: any
    if (isLocalFile) {
      if (isFolder) {
        data = {}
        const files = await readdirSync('data/' + endPoint)

        for (let index = 0; index < files.length; index++) {
          const file = files[index]
          if (file) {
            const topic = file.split('.')[0]
            const fileData = await readJson('data/' + endPoint + '/' + file)
            data[topic] = fileData
          }
        }
      } else {
        data = await readJson('data/' + endPoint)
      }
    } else {
      const response = await axios({
        url: API_URL + endPoint,
        method,
        headers: {
          access_token: API_TOKEN,
        },
        data: {
          variables: {
            ...variables,
            locale: locale in MAP_LOCALES ? MAP_LOCALES[locale] : MAP_LOCALES[DEFAULT_LOCALE],
          },
        },
      })

      data = response?.data ?? {}
    }

    enableCache && (await set(cacheKey, data, ttl))

    return data
  } catch (error) {
    return Promise.reject(error)
  }
}

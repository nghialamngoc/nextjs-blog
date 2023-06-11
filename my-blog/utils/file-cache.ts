import { readJson, outputJson } from 'fs-extra'

const getDir = (key: string) => '.cache/' + key + '.json'

export const get = async <T>(key: string) => {
  try {
    const data = await readJson(getDir(key))

    // Check expired
    const now = new Date().getTime()

    if (data.expiredAt && now >= data.expiredAt) {
      return null
    }

    return data.value as T
  } catch (error) {
    return null
  }
}

export const set = async <T>(key: string, value: T, ttl: number = 0) => {
  try {
    const now = new Date().getTime()

    await outputJson(getDir(key), {
      value,
      expiredAt: ttl ? now + ttl : 0,
    })
  } catch (error) {
    throw error
  }
}

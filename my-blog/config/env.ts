export const isLocal = process.env.NODE_ENV === 'development'

// Client env
export const HOME_PATH = process.env.NEXT_PUBLIC_HOME_PATH ?? ''
export const V2_PATH = process.env.NEXT_PUBLIC_V2_PATH ?? ''

export const BASE_PATH = HOME_PATH + V2_PATH

export const API_DEFAULT_CACHE_TIME = 1000 * 60 * 60

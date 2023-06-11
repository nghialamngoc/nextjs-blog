import { parseNumber } from '@/utils/number'

export const isLocal = process.env.NODE_ENV === 'development'

// Client env
export const HOME_PATH = process.env.NEXT_PUBLIC_HOME_PATH ?? ''
export const V2_PATH = process.env.NEXT_PUBLIC_V2_PATH ?? ''

export const BASE_PATH = HOME_PATH + V2_PATH

export const API_URL = process.env.API_URL ?? ''
export const API_ENABLE_CACHE = process.env.API_ENABLE_CACHE === 'true'
export const API_DEFAULT_CACHE_TIME = parseNumber(process.env.API_DEFAULT_CACHE_TIME) ?? 30000
export const API_TOKEN = process.env.API_TOKEN ?? ''

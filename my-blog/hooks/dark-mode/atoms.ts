import { IS_DARK_MODE_STORE_NAME } from '@/config/common'
import { atomWithStorage } from 'jotai/utils'

export const darkModeAtom = atomWithStorage(IS_DARK_MODE_STORE_NAME, false)

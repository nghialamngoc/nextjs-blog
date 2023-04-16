import { atom } from 'jotai'

export interface SettingAtom {
  isDarkMode: boolean
  logo?: string
}

export const settingAtom = atom<SettingAtom | undefined>(undefined)

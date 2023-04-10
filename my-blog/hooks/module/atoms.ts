import { ModuleType } from '@/config/module'
import { atom } from 'jotai'

export interface ModuleAtom {
  moduleType: ModuleType
  modulePath: string
  moduleSubPath: string
  moduleConfig: Record<string, any>
  moduleLangDict: Record<string, string>
}

export const moduleAtom = atom<ModuleAtom | undefined>(undefined)

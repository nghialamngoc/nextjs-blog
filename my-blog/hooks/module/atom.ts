import { ModuleType } from '@/config/module'

export interface ModuleAtom {
  moduleType: ModuleType
  modulePath: string
  moduleSubPath: string
  moduleConfig: Record<string, any>
  moduleLangDict: Record<string, string>
}

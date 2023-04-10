import { info } from '@/utils/safety-log'
import { useStore } from '@/hooks/store'
import { ModuleAtom, moduleAtom } from './atoms'

// Use this hook to set init data from server side
export const useModuleInit = (initValues: ModuleAtom) => {
  info('module data: ', initValues)

  const store = useStore()

  store.set(moduleAtom, initValues)
}

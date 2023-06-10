import { useStore } from '@/hooks/store'
import { ModuleAtom, moduleAtom } from './atoms'

// Use this hook to set init data from server side
export const useModuleInit = (initValues: ModuleAtom) => {
  const store = useStore()

  store.set(moduleAtom, initValues)
}

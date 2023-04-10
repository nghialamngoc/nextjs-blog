import { useAtomValue } from 'jotai'
import { moduleAtom } from './atoms'

export const useModule = () => {
  const data = useAtomValue(moduleAtom)

  if (data) return data

  throw new Error('No data from store, make sure you already have useModuleInit on _app.tsx')
}

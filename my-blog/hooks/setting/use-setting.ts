import { useAtom } from 'jotai'
import { settingAtom } from './atoms'

export const useSetting = () => {
  const [setting, setSetting] = useAtom(settingAtom)

  if (setting) return { setting, setSetting }

  throw new Error('No data from store, make sure you already have useModuleInit on _app.tsx')
}

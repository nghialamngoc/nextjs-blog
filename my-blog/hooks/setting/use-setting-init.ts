import { info } from '@/utils/safety-log'
import { useStore } from '@/hooks/store'
import { SettingAtom, settingAtom } from './atoms'

// Use this hook to set init data from server side
export const useSettingInit = (initValues: SettingAtom) => {
  info('setting data: ', initValues)

  const store = useStore()

  store.set(settingAtom, initValues)
}

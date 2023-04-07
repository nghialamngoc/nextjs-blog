import { DEFAULT_LOCALE } from '@/config/common'
import { ModuleInfo, ModuleType } from '@/config/module'

const getSharedTranslation = async (locale: string) => {
  // call api get remote translation here
  const remoteTranslation = {}

  try {
    const { default: localTranslation = {} } = await import('../../translations/' + locale + '.json')

    return {
      ...localTranslation,
      ...remoteTranslation,
    }
  } catch (e) {
    return remoteTranslation
  }
}

const getModuleTranslationByType = async (moduleType: ModuleType, locale: string) => {
  try {
    const { default: langDict = {} } = await import('../../modules/' + moduleType + '/translations/' + locale + '.json')
    return langDict
  } catch (e) {
    return {}
  }
}

export const getModuleTranslation = async (moduleInfo: ModuleInfo, locale: string = DEFAULT_LOCALE) => {
  const sharedTranslation = await getSharedTranslation(locale)
  const moduleTranslation = await getModuleTranslationByType(moduleInfo.type, locale)

  return {
    ...sharedTranslation,
    ...moduleTranslation,
  }
}

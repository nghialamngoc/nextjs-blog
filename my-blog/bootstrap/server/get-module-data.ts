import { GetServerSidePropsContext } from 'next'
import { BASE_PATH } from '@/config/env'
import { MODULES } from '@/config/module'
import { getModuleTranslation } from './get-module-translation'

export const getModuleData = async (context: GetServerSidePropsContext) => {
  const { query, locale } = context

  const basePathParts = BASE_PATH.split('/')
  const segments = Array.isArray(query.segment) ? query.segment.filter((x) => !basePathParts.includes(x)) : ['/']

  const moduleInfo = MODULES.find((x) => segments.includes(x.path))

  // Module not registered / not found
  if (!moduleInfo) throw new Error('Module not found or not registered!')

  // Get module translation
  const moduleLangDict = await getModuleTranslation(moduleInfo, locale)

  const moduleSubPath = segments.filter((x) => x !== moduleInfo.path).join('/')

  return {
    moduleId: moduleInfo.id,
    moduleType: moduleInfo.type,
    modulePath: moduleInfo.path,
    moduleSubPath,
    moduleLangDict,
  }
}

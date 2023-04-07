import { ModuleType } from '@/config/module'

export const getModuleHandler = async (moduleType: ModuleType) => {
  try {
    const { default: handler } = await import('../../modules/' + moduleType + '/bootstrap/server')

    return handler
  } catch (e) {
    return undefined
  }
}

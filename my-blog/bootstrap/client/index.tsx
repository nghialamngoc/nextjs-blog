import Layout from '@/components/Layout'
import { ModuleType } from '@/config/module'
import { ModuleAtom } from '@/hooks/module'
import { info, raw } from '@/utils/safety-log'
import dynamic from 'next/dynamic'
import { FC } from 'react'

export interface PageProps {
  [key: string]: any
  header?: any
  moduleData: ModuleAtom
}

const ModuleComponents = {
  [ModuleType.HOME]: dynamic(() => import('../../modules/home/bootstrap/client')),
  [ModuleType.ABOUT]: dynamic(() => import('../../modules/about/bootstrap/client')),
  [ModuleType.POSTS]: dynamic(() => import('../../modules/posts/bootstrap/client')),
}

const logStyles = 'color: red; font-weight: bold; font-size: 12px;'

export const Page: FC<PageProps> = (props) => {
  const { moduleData, ...rest } = props

  const moduleType = moduleData.moduleType
  const ModuleComponent = ModuleComponents[moduleType]
  const moduleProps = rest[moduleType] ?? {}

  // Note: make sure this log only show once time per request
  info('module data: ' + moduleType, moduleProps)

  typeof window !== 'undefined' && raw('%c🔥 make sure this line only show once per request', logStyles)

  return <Layout>{ModuleComponent ? <ModuleComponent {...moduleProps} /> : null}</Layout>
}

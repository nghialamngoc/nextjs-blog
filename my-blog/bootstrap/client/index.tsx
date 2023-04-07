import Layout from '@/components/Layout'
import { ModuleType } from '@/config/module'
import { ModuleAtom } from '@/hooks/module'
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

export const Page: FC<PageProps> = (props) => {
  const { moduleData, ...rest } = props

  const moduleType = moduleData.moduleType
  const ModuleComponent = ModuleComponents[moduleType]
  const moduleProps = rest[moduleType] ?? {}

  return <Layout>{ModuleComponent ? <ModuleComponent {...moduleProps} /> : null}</Layout>
}

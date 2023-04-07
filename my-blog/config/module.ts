export enum ModuleType {
  HOME = 'home',
  ABOUT = 'about',
  POSTS = 'posts',
}

export enum ModuleId {
  HOME = 'home',
  ABOUT = 'about',
  POSTS = 'posts',
}

export interface ModuleInfo {
  id: ModuleId
  path: string
  type: ModuleType
  // cms config uid
  configUid: string
}

export const MODULES: ModuleInfo[] = [
  {
    id: ModuleId.HOME,
    path: '/',
    type: ModuleType.HOME,
    configUid: '',
  },
  {
    id: ModuleId.ABOUT,
    path: 'about',
    type: ModuleType.ABOUT,
    configUid: '',
  },
  {
    id: ModuleId.POSTS,
    path: 'posts',
    type: ModuleType.POSTS,
    configUid: '',
  },
]

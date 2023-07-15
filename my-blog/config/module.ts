export enum ModuleType {
  HOME = 'home',
  ABOUT = 'about',
  POSTS = 'posts',
  ENGLISH = 'english',
}

export enum ModuleId {
  HOME = 'home',
  ABOUT = 'about',
  POSTS = 'posts',
  ENGLISH = 'english',
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
  {
    id: ModuleId.ENGLISH,
    path: 'english',
    type: ModuleType.ENGLISH,
    configUid: '',
  },
]

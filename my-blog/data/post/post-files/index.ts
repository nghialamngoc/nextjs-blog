export enum PostType {
  NEXTJS = 'nextjs',
  JS = 'javascript',
  REACTJS = 'reactjs',
}

export const PostIdsMapping: Record<string, string> = {
  '4-cap-do-ky-luat-ban-than': '1.mdx',
}

export const itemPerPage = 20

export const PostListTypeList = [
  {
    type: PostType.NEXTJS,
    title: 'NextJs',
    color: 'white',
    background: '#183028',
  },
  {
    type: PostType.JS,
    title: 'Javascript',
    color: '#183028',
    background: '#F7D800',
  },
  {
    type: PostType.REACTJS,
    title: 'ReactJs',
    color: 'white',
    background: '#5FD3F3',
  },
]

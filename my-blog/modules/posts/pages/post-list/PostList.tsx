import { FC } from 'react'

export interface PostListProps {
  postList: PostListItem[]
}

export interface PostListItem {
  uid: string
  title: string
  description: string
  categories: Array<string>
  createDate: number
}

export const PostList: FC<PostListProps> = ({ postList }) => {
  return <div>Post List</div>
}

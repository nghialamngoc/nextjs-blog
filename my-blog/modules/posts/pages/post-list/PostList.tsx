import { HOME_PATH } from '@/config/env'
import { cx } from '@/utils/cx'
import { formatDate, isFutureDateString } from '@/utils/date'
import { goto } from '@/utils/url'
import Link from 'next/link'
import { FC } from 'react'

import styles from './PostList.module.css'

export interface PostListProps {
  postList: PostListItem[]
}

export interface PostListItem {
  uid: string
  title: string
  description: string
  categories: Array<string>
  createDate: number
  slug: string
}

export const PostList: FC<PostListProps> = ({ postList }) => {
  return (
    <div>
      <div className="size-32 mb-32 weight-medium">Post List</div>
      <section className="d-grid grid-lg-3 gap-20">
        {postList?.map((x, index) => {
          return (
            <article key={index} className="border-1 round-16 px-16 py-16 border-primary">
              <div
                onClick={() => {
                  x.slug && goto(HOME_PATH + '/posts/' + x.slug)
                }}
                className={cx(styles.title, 'weight-medium mb-8 lh-150 color-text pointer')}
              >
                {x.title}
              </div>
              <div className={styles.thumnail}>
                <div className={styles['thumnail-title']}>{x.description}</div>
                <div className="size-14">{formatDate(x.createDate)}</div>
              </div>
            </article>
          )
        })}
      </section>
    </div>
  )
}

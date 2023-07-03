import { HOME_PATH } from '@/config/env'
import Loading from '@/ui/atoms/Loading'
import { cx } from '@/utils/cx'
import { formatDate } from '@/utils/date'
import { goto } from '@/utils/url'
import { FC, useState } from 'react'
import { InView } from 'react-intersection-observer'

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
  const [page, setPage] = useState(0)
  const [loading, setLoading] = useState(false)

  return (
    <div className="pb-64">
      <div className="size-32 mb-32 weight-medium">Post List</div>
      <section className="d-grid grid-lg-3 gap-20">
        {postList?.slice(0, (page + 1) * 6)?.map((x, index) => {
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

      <InView
        as="div"
        onChange={(inView) => {
          console.log('here')

          setLoading(inView)
          setTimeout(() => {
            inView && setPage(page + 1)
          }, 2000)
        }}
      ></InView>

      {loading && postList.length > postList?.slice(0, (page + 1) * 6).length && (
        <div className="d-flex align-center justify-center w-full py-8">
          <Loading />
        </div>
      )}
    </div>
  )
}

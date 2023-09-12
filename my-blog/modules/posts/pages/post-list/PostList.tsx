import { HOME_PATH } from '@/config/env'
import Loading from '@/ui/atoms/Loading'
import { cx } from '@/utils/cx'
import { formatDate } from '@/utils/date'
import { goto } from '@/utils/url'
import { FC, useMemo, useState } from 'react'
import { InView } from 'react-intersection-observer'
import Image from 'next/image'

import NextJsIcon from '@/public/nextjs-icon.svg'
import JsIcon from '@/public/javascript-icon.png'
import ReactJSIcon from '@/public/react-icon.png'

import styles from './PostList.module.css'
import { itemPerPage, PostListTypeList, PostType } from '@/data/post/post-files'
import { useRouter } from 'next/router'

const getThumbIcon = (type: string) => {
  switch (type) {
    case PostType.NEXTJS:
      return <Image src={NextJsIcon} width={100} height={50} alt="post-icon" />
      break

    case PostType.REACTJS:
      return <Image src={ReactJSIcon} width={100} height={50} alt="post-icon" />
      break

    case PostType.JS:
      return <Image src={JsIcon} width={100} height={50} alt="post-icon" />

    default:
      return <Image src={JsIcon} width={100} height={50} alt="post-icon" />
      break
  }
}

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
  const router = useRouter()

  const [page, setPage] = useState(0)
  const [loading, setLoading] = useState(false)
  const [filterType, setFilterType] = useState(router.query.type || '')

  const filterData = useMemo(() => {
    return filterType ? postList.filter((x) => x.categories?.[0] === filterType) : postList
  }, [filterType, postList])

  return (
    <div className="pb-64">
      <div className="size-32 mb-20 weight-medium">Post List</div>
      <div>
        {PostListTypeList.map((x, index) => {
          return (
            <div
              key={index}
              className="mb-20 px-10 py-8 d-inline-block mr-10 round-8 pointer"
              style={{
                color: x.color,
                background: x.background,
                boxShadow: x.type === filterType ? '0 2px 6px rgba(0, 0, 0, 0.3)' : 'none',
              }}
              onClick={() => {
                window.history.replaceState(null, '', '?type=' + x.type)
                setFilterType(x.type)
                setPage(0)
              }}
            >
              {x.title}
            </div>
          )
        })}
      </div>
      <section className="d-flex flex-column gap-20">
        {filterData?.slice(0, (page + 1) * itemPerPage)?.map((x, index) => {
          return (
            <article
              key={index}
              className={cx(
                styles.item,
                'd-flex align-center gap-10 border-1 round-16 px-16 py-16 border-primary pointer'
              )}
              onClick={() => {
                x.slug && goto(HOME_PATH + '/posts/' + x.slug)
              }}
            >
              <div>{getThumbIcon(x?.categories?.[0])}</div>
              <div>
                <div className={cx(styles.title, 'size-26 weight-bold lh-150 color-text mb-4')}>{x.title}</div>
                <div className="mb-6">{x.description}</div>
                <div className="size-12">{formatDate(x.createDate)}</div>
              </div>
            </article>
          )
        })}
      </section>

      {/* <InView
        as="div"
        onChange={(inView) => {
          setTimeout(() => {
            if (filterData.length / itemPerPage > page) {
              setLoading(inView)
              setTimeout(() => {
                inView && setPage(page + 1)
              }, 2000)
            }
          }, 2000)
        }}
      ></InView>

      {loading && postList.length > postList?.slice(0, (page + 1) * 6).length && (
        <div className="d-flex align-center justify-center w-full py-8">
          <Loading />
        </div>
      )} */}
    </div>
  )
}

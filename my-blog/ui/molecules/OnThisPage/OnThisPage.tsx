import { cx } from '@/utils/cx'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import styles from './OnThisPage.module.css'

export interface OnThisPageProps {
  title?: string
  items?: OnThisPageLink[]
}

export interface OnThisPageLink {
  anchorId?: string
  label?: string
  id?: string
  children?: OnThisPageLink[]
  setAnchorId?: any
}

export const OnThisPageLink: FC<OnThisPageLink> = ({ anchorId, setAnchorId, label, id, children }) => {
  return (
    <div>
      <a
        className={cx(styles.link, 'round-8 size-14 decoration-none py-8 px-8 d-block weight-medium mb-8')}
        href={id ?? ''}
        data-active={((id && anchorId === id) || false).toString()}
        onClick={() => setAnchorId?.(id || '')}
      >
        {label}
      </a>
      {children &&
        children.map((x, index) => {
          return (
            <div className="pl-16" key={index}>
              <OnThisPageLink {...x} anchorId={anchorId} setAnchorId={setAnchorId} />
            </div>
          )
        })}
    </div>
  )
}

export const OnThisPage: FC<OnThisPageProps> = ({ items, title }) => {
  const { asPath } = useRouter()
  const [anchorId, setAnchorId] = useState('')

  useEffect(() => {
    setAnchorId('#' + asPath.split('#').at(-1))
  }, [asPath])

  return (
    <div>
      <div className="mb-16 weight-medium size-18">{title}</div>
      {items &&
        items.map((x, index) => <OnThisPageLink {...x} anchorId={anchorId} setAnchorId={setAnchorId} key={index} />)}
    </div>
  )
}

import { cx } from '@/utils/cx'
import Image from 'next/image'
import { FC } from 'react'
import { IVocabulary } from '../../pages/vocabulary-check'
import BodyThum from '../../public/body-thumb.jpg'
import styles from './TopicList.module.css'

export interface TopicListProps {
  topicList: Array<any>
  topicData: Record<string, Array<IVocabulary>>
  onClick?: (type: string) => void
}
export const TopicList: FC<TopicListProps> = ({ topicList, topicData, onClick }) => {
  return (
    <section className="d-grid grid-lg-3 gap-20">
      {topicList.map((x, index) => {
        return (
          <div key={index} className={cx('round-8 clickable', styles.item)} onClick={() => onClick?.(x.type || '')}>
            <div
              className="relative"
              style={{
                animationDuration: (index + 1) * 0.3 + 's',
              }}
            >
              <div
                className={cx(
                  styles.title,
                  'absolute-center size-28 weight-bold color-blue bg-color-blue-light px-10 py-2 round-8'
                )}
              >
                {x.title}
              </div>
              <Image className="image-100 round-8" src={BodyThum} alt="topic-thumb" priority></Image>
            </div>
            <div className="mt-10 d-flex gap-8 flex-column size-14">
              <div>Total Words: {topicData[x.type]?.length}</div>
              <div>Last Check: N/A</div>
              <div>Last Score: N/A</div>
            </div>
          </div>
        )
      })}
    </section>
  )
}

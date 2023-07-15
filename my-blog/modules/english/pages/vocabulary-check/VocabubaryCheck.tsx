import { cx } from '@/utils/cx'
import Image from 'next/image'
import BodyThum from '../../public/body-thumb.jpg'
import styles from './VocabularyCheck.module.css'

const topicList = [
  {
    title: 'Body',
    thumb: BodyThum,
    color: '',
  },
]

export const VocabubaryCheck = () => {
  return (
    <div>
      <div className="size-32 mb-32 weight-medium">Vocabulary Check</div>
      <div className="size-24 mb-32">Topics</div>
      <section className="d-grid grid-lg-3 gap-20">
        {topicList.map((x, index) => {
          return (
            <div
              className={cx('relative round-8 clickable', styles.item)}
              key={index}
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
              <Image className="image-100 round-8" src={BodyThum} alt="topic-thumb"></Image>
            </div>
          )
        })}
      </section>
    </div>
  )
}

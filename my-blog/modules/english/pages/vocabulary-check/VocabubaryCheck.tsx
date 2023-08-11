import { shuffle } from '@/utils/array'
import NiceModal from '@ebay/nice-modal-react'
import { FC, useMemo, useState } from 'react'
import { VocabubaryCheckConfirm } from '../../components/Modals/VocabularyCheckConfirm'
import TopicCheck from '../../components/TopicCheck'
import TopicList from '../../components/TopicList'
import BodyThumb from '../../public/body-thumb.jpg'
import TastesThumb from '../../public/tastes-thumb.png'
import styles from './VocabularyCheck.module.css'

const topicList = [
  {
    title: 'Body',
    type: 'body',
    thumb: BodyThumb,
    color: '',
  },
  {
    title: 'Tastes',
    type: 'tastes',
    thumb: TastesThumb,
    color: '',
  },
]

export interface VocabubaryCheckProps {
  topicData: Record<string, Array<IVocabulary>>
}

export interface IVocabulary {
  uid?: string
  word?: string
  mean?: string
  pronounce?: string
  category?: Array<string>
  type?: string
}

export const VocabubaryCheck: FC<VocabubaryCheckProps> = ({ topicData }) => {
  const [loading, setLoading] = useState(false)
  const [isCheck, setIsCheck] = useState(false)
  const [selectedTopic, setSelectedTopic] = useState('')

  console.log('topicData', topicData)

  const selectedVocabulary = useMemo(() => {
    return topicData[selectedTopic] ? shuffle(topicData[selectedTopic]) : []
  }, [selectedTopic, topicData])

  const onTopicCheck = () => {
    setIsCheck(true)
  }

  const onTopicClick = (topic: string) => {
    if (topicData[topic]?.length > 0) {
      setSelectedTopic(topic)
      NiceModal.show(VocabubaryCheckConfirm, {
        totalWords: topicData[topic].length,
        description: `We have total ${topicData[topic].length} words and you have ${topicData[topic].length} mins for this examination.`,
        onSubmit: onTopicCheck,
      })
    }
  }

  const onCheckFinish = () => {
    setIsCheck(false)
    setSelectedTopic('')
  }

  return (
    <div>
      <div className="size-32 mb-32 weight-medium">Vocabulary Check</div>
      <div className="size-24 mb-32">Topics</div>
      {isCheck ? (
        <TopicCheck topic={selectedTopic} vocabularies={selectedVocabulary} onCheckFinish={onCheckFinish} />
      ) : (
        <TopicList topicData={topicData} topicList={topicList} onClick={onTopicClick}></TopicList>
      )}
    </div>
  )
}

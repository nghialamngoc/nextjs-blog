import { randomIntFromInterval } from '@/utils/number'
import { FC, useMemo, useState } from 'react'
import { IVocabulary } from '../../pages/vocabulary-check'

export interface TopicCheckProps {
  topic?: string
  vocabularies: IVocabulary[]
}

export const TopicCheck: FC<TopicCheckProps> = (props) => {
  const { vocabularies, topic } = props
  const [questionNumber, setQuestionNumber] = useState(1)

  const totalMeans = useMemo(() => {
    return vocabularies.map((x) => x.mean)
  }, [vocabularies])

  const randomAnswerList = useMemo(() => {
    const result = [
      { isRight: false, mean: '' },
      { isRight: false, mean: '' },
      { isRight: false, mean: '' },
      { isRight: false, mean: '' },
    ]

    const rightPosition = randomIntFromInterval(0, 3)
    result[rightPosition] = {
      isRight: true,
      mean: vocabularies[questionNumber].mean ?? '',
    }

    const randomNumberList = [questionNumber]
    for (let index = 0; index < result.length; index++) {
      if (index === rightPosition) {
        continue
      }

      let nextRandomNumber = questionNumber

      while (randomNumberList.includes(nextRandomNumber)) {
        nextRandomNumber = randomIntFromInterval(1, totalMeans.length)
      }

      const randomMean = totalMeans[nextRandomNumber]
      result[index] = {
        isRight: false,
        mean: randomMean || '',
      }
    }

    return result
  }, [questionNumber, vocabularies, totalMeans])

  return (
    <div>
      <div className="d-flex justify-between size-20">
        <div className="weight-medium">{topic?.toLocaleUpperCase()}</div>
        <div>
          {questionNumber} / {vocabularies.length}
        </div>
      </div>
      <div>{vocabularies[questionNumber].word}</div>
      <div>{JSON.stringify(randomAnswerList)}</div>
    </div>
  )
}

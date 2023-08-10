import { cx } from '@/utils/cx'
import { randomIntFromInterval } from '@/utils/number'
import NiceModal from '@ebay/nice-modal-react'
import { FC, useMemo, useState } from 'react'
import { IVocabulary } from '../../pages/vocabulary-check'
import { ConfirmModal } from '../Modals/Confirm'

import styles from './TopicCheck.module.css'

export interface TopicCheckProps {
  topic?: string
  vocabularies: IVocabulary[]
  onCheckFinish?: () => void
}

export const TopicCheck: FC<TopicCheckProps> = (props) => {
  const { vocabularies, topic, onCheckFinish } = props
  const [questionNumber, setQuestionNumber] = useState(0)
  const [checked, setChecked] = useState<Array<any>>([])
  const [error, setError] = useState('')
  const [anwsers, setAnwsers] = useState<Array<any>>([])

  const totalMeans = useMemo(() => {
    return vocabularies.map(({ word, mean }) => ({
      word,
      mean,
    }))
  }, [vocabularies])

  const randomAnswerList = useMemo(() => {
    const result = [
      { isRight: false, mean: '', word: '' },
      { isRight: false, mean: '', word: '' },
      { isRight: false, mean: '', word: '' },
      { isRight: false, mean: '', word: '' },
    ]

    const rightPosition = randomIntFromInterval(0, 3)
    result[rightPosition] = {
      isRight: true,
      mean: vocabularies[questionNumber].mean ?? '',
      word: vocabularies[questionNumber].word ?? '',
    }

    const randomNumberList = [questionNumber]
    for (let index = 0; index < result.length; index++) {
      if (index === rightPosition) {
        continue
      }

      let nextRandomNumber = questionNumber

      while (randomNumberList.includes(nextRandomNumber)) {
        nextRandomNumber = randomIntFromInterval(1, totalMeans.length - 1)
      }

      randomNumberList.push(nextRandomNumber)

      const random = totalMeans[nextRandomNumber]

      result[index] = {
        isRight: false,
        mean: random?.mean || '',
        word: random?.word || '',
      }
    }

    return result
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questionNumber])

  const onFinish = () => {
    NiceModal.show(ConfirmModal, {
      title: 'Are you sure to finish it?',
      cancelText: 'Cancel',
      submitText: 'Submit',
      onSubmit: onCalculateScore,
    })
  }

  const onCalculateScore = () => {
    NiceModal.show(ConfirmModal, {
      title: 'This is your result',
      description: (
        <div>
          {anwsers.map((x, index) => {
            return (
              <div key={index} className={cx(x.isRight ? 'color-green' : 'color-error', 'mt-4 size-14')}>
                - Word: {vocabularies[index].word}, Your answer: {x.mean}
                {x.isRight ? '' : `, Correct answer: ${vocabularies[index].mean}`}
              </div>
            )
          })}
        </div>
      ),
      onClose: onCheckFinish,
    })
  }

  const onSubmit = () => {
    setError('')
    if (checked.length <= 0) {
      setError('Chưa chọn kìa bé 🫣😱😤')
      return
    }

    anwsers[questionNumber]
      ? setAnwsers((pre) => {
          pre[questionNumber] = checked[0]
          return pre
        })
      : setAnwsers([...anwsers, checked[0]])

    if (questionNumber === vocabularies.length - 1) {
      onFinish()
      return
    }

    setQuestionNumber(questionNumber + 1)
    setChecked([])
  }

  return (
    <div>
      <div className="d-flex justify-between size-20">
        <div className="weight-medium">{topic?.toLocaleUpperCase()}</div>
        <div>
          {questionNumber + 1} / {vocabularies.length}
        </div>
      </div>
      <div className={styles.container}>
        <div className="size-20 weight-medium">{vocabularies[questionNumber].word}:</div>
        <div className="mt-8">
          {randomAnswerList.map((x, i) => {
            return (
              <div key={i} className="mt-6">
                <input
                  type="checkbox"
                  id={'_id' + i}
                  value={x.word}
                  checked={x.word === checked[0]?.word}
                  onChange={() => {
                    setError('')
                    setChecked([x])
                  }}
                />
                <label className="ml-8" htmlFor={'_id' + i}>
                  {x.mean}
                </label>
              </div>
            )
          })}
        </div>
      </div>
      <div className="d-flex justify-between mt-20">
        <div className="size-18 color-error weight-medium">{error}</div>
        <button onClick={onSubmit}>{questionNumber === vocabularies.length - 1 ? 'Finish' : 'Next'}</button>
      </div>
    </div>
  )
}

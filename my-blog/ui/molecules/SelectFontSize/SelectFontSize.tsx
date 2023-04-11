import { FC, HTMLAttributes } from 'react'
import styles from './SelectFontSize.module.css'

export interface SelectFontSizeProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick'> {
  activeIndex?: number
  options?: {
    label: string
    value: string
  }[]
  onClick?: (value: number) => void
}

export const SelectFontSize: FC<SelectFontSizeProps> = (props) => {
  const { options, activeIndex = 0, onClick } = props

  return (
    <div className="d-flex gap-16 align-end">
      {options?.map((x, index) => {
        return (
          <span
            className={styles.item}
            data-active={index === activeIndex}
            key={index}
            style={{
              fontSize: x.value,
            }}
            onClick={() => onClick?.(index)}
          >
            {x.label}
          </span>
        )
      })}
    </div>
  )
}

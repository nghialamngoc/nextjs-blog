import { cx } from '@/utils/cx'
import { FC, HTMLAttributes } from 'react'
import styles from './DarkModeToggle.module.css'

export interface DarkModeToggleProps extends Omit<HTMLAttributes<HTMLInputElement>, 'onChange'> {
  value?: boolean
  onChange?: (value: boolean) => void
}

export const DarkModeToggle: FC<DarkModeToggleProps> = (props) => {
  const { value, onChange } = props

  return (
    <div className={styles.toggleWrapper}>
      <input
        defaultChecked={value}
        type="checkbox"
        className={styles.dn}
        id="dn"
        onChange={(e) => onChange?.(e.target.checked)}
      />
      <label htmlFor="dn" className={styles.toggle}>
        <span className={styles.toggleHandler}>
          <span className={cx(styles.crater, styles.crater1)}></span>
          <span className={cx(styles.crater, styles.crater2)}></span>
          <span className={cx(styles.crater, styles.crater3)}></span>
        </span>
        <span className={cx(styles.star, styles.star1)}></span>
        <span className={cx(styles.star, styles.star2)}></span>
        <span className={cx(styles.star, styles.star3)}></span>
        <span className={cx(styles.star, styles.star4)}></span>
        <span className={cx(styles.star, styles.star5)}></span>
        <span className={cx(styles.star, styles.star6)}></span>
      </label>
    </div>
  )
}

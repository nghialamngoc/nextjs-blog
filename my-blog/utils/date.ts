import dayjs from 'dayjs'

const DEFAULT_DATE_FORMAT = 'MMM DD YYYY'

export const isValidDateString = (date?: string, format: string = DEFAULT_DATE_FORMAT) => {
  return dayjs(date, format, true).isValid()
}

export const isFutureDateString = (date?: string, format: string = DEFAULT_DATE_FORMAT) => {
  return dayjs().isBefore(dayjs(date, format, true))
}

export const formatDate = (date?: number, format: string = DEFAULT_DATE_FORMAT) => {
  return dayjs(date).format(format)
}

export const tomorrow = () => dayjs().add(1, 'day').toDate()

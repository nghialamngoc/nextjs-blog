// Parse given value to number
// If given value is not a valid number fallback to defaultValue
export const parseNumber = (value: any, defaultValue?: number) => {
  if (typeof value === 'string' && value && !isNaN(Number(value))) {
    return Number(value)
  }
  return defaultValue
}

export const randomIntFromInterval = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

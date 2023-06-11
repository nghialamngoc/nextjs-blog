// Parse given value to number
// If given value is not a valid number fallback to defaultValue
export const parseNumber = (value: any, defaultValue?: number) => {
  if (typeof value === 'string' && value && !isNaN(Number(value))) {
    return Number(value)
  }
  return defaultValue
}

type T = string | number | undefined | null | boolean

export const cx = (...args: (T | T[] | Record<string, boolean | number | undefined | null>)[]) => {
  const classNames: string[] = []

  for (const arg of args) {
    if (Array.isArray(arg)) {
      const className = cx(...arg)
      className && classNames.push(className)
      continue
    }

    if (typeof arg === 'string') {
      classNames.push(arg)
      continue
    }

    if (typeof arg === 'number') {
      classNames.push(arg.toString())
      continue
    }

    if (arg && typeof arg === 'object') {
      classNames.push(
        ...Object.entries(arg)
          .filter((x) => x[1])
          .map((x) => x[0])
      )
      continue
    }
  }

  return classNames.join(' ')
}

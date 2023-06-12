export const goto = (url?: string) => {
  const searchParams = new URLSearchParams(window.location.search)
  if (url && !searchParams.has('noredirect')) window.location.href = url
}

export const buildUrl = (...args: (string | string[] | null | undefined)[]): string => {
  const path = args
    .map((arg: any) => {
      if (typeof arg === 'string') {
        // Remove any dupplicate splash
        return arg
          .split('/')
          .map((x) => x.trim())
          .filter((x) => x)
          .join('/')
      }

      if (Array.isArray(arg)) {
        return buildUrl(...arg)
      }

      return null
    })
    // Remove any undefined or null
    .filter((x: any) => x)
    .join('/')

  const urlWithPrefix = '/' + path
  const segments = urlWithPrefix.split('?')

  if (segments.length > 1) {
    const urlPart = segments[0].endsWith('/') ? segments[0] : segments[0] + '/'
    return urlPart + '?' + segments[1]
  }

  return urlWithPrefix.endsWith('/') ? urlWithPrefix : urlWithPrefix + '/'
}

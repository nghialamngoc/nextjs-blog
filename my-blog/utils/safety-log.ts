const isProduction = process.env.NEXT_PUBLIC_API_URL === 'https://ecom.fwd.com.hk/online-insurance'
const isLocal = process.env.NODE_ENV === 'development'
const isClient = typeof window !== 'undefined'

type LogType = 'log' | 'info' | 'warn' | 'error'

const LOG_PREFIX = '[Dev sharing]'

interface GenerateLogOptions {
  showOnLocalTerminal?: boolean
  showOnProduction?: boolean
}

const generateLog = (type: LogType, args: any[], options?: GenerateLogOptions) => {
  const { showOnLocalTerminal, showOnProduction } = options ?? {}

  // Don't show any log on production browser
  if (isProduction && isClient && !showOnProduction) return

  // Don't show log on local server terminal, we don't want to make it too long
  if (isLocal && !isClient && !showOnLocalTerminal) return

  // If it's server log then we parse it to string then it can display better on datadogs
  isClient ? console[type](LOG_PREFIX, ...args) : console[type](LOG_PREFIX, JSON.stringify(args))
}

export const log: Console['log'] = (...args) => generateLog('log', args)

export const info: Console['info'] = (...args) => generateLog('info', args)

export const warn: Console['warn'] = (...args) => generateLog('warn', args)

export const error: Console['error'] = (...args) => generateLog('error', args, { showOnLocalTerminal: true })

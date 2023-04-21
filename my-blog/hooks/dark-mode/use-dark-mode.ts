import { IS_DARK_MODE_STORE_NAME } from '@/config/common'
import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { darkModeAtom } from './atoms'

export const useDarkMode = () => {
  const [darkMode, setDMode] = useAtom(darkModeAtom)

  const setDarkMode = (value: boolean) => {
    localStorage.setItem(IS_DARK_MODE_STORE_NAME, value.toString())
    setDMode(value)
  }

  useEffect(() => {
    darkMode ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode')
  }, [darkMode])

  return { darkMode, setDarkMode }
}

import { createStore } from 'jotai'

// https://jotai.org/docs/core/store
export const mainStore = {
  en: createStore(),
  vn: createStore(),
}

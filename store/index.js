import * as mut from '~/config/store/mut'
import { darkModeDefault } from '~/config/app/main'
import { cookieSharedList } from '~/config/store/main'

export const state = () => ({
  darkMode: darkModeDefault,
  darkModeDefault
})

export const mutations = {
  [mut.SET_DARKMODE](state, mode) {
    state.darkMode = mode
  }
}

export const getters = {
  darkMode: state => state.darkMode
}

export const actions = {
  nuxtServerInit({ commit }, { app }) {
    const cookies = app.$cookies.getAll()
    for (const mutation in cookieSharedList) {
      const sharedCookieName = cookieSharedList[mutation]
      if (cookies[sharedCookieName]) {
        commit(mutation, cookies[sharedCookieName])
      }
    }
  },
  toggleDarkMode({ commit, getters }) {
    commit(mut.SET_DARKMODE, !getters.darkMode)
  }
}

import { auth } from '~/plugins/firebase'

export default function ({ store }) {
  return new Promise((resolve, reject) => {
    let timeoutId;
    
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      store.dispatch('setUser', user)
      unsubscribe()
      resolve()
    }, (error) => {
      console.error('Auth state change error:', error)
      store.commit('SET_ERROR', error.message)
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      reject(error)
    })

    timeoutId = setTimeout(() => {
      unsubscribe()
      const error = new Error('Firebase authentication initialization timeout')
      store.commit('SET_ERROR', error.message)
      reject(error)
    }, 10000)
  })
} 
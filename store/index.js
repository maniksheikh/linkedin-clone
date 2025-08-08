import { auth, createUserWithEmailAndPassword, updateProfile, signOut, signInWithEmailAndPassword } from '~/plugins/firebase'

export const state = () => ({
  user: null,
  error: null
})

export const mutations = {
  SET_USER(state, user) {
    state.user = user
  },
  SET_ERROR(state, error) {
    state.error = error
  }
}

export const actions = {
  async signup({ commit }, { email, password, userName }) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(userCredential.user, {
        displayName: userName
      })
      
      commit('SET_USER', {
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        displayName: userName,
        photoURL: userCredential.user.photoURL
      })
      
      return userCredential.user
    } catch (error) {
      commit('SET_ERROR', error.message)
      throw error
    }
  },
  
  async logout({ commit }) {
    try {
      await signOut(auth)
      commit('SET_USER', null)
    } catch (error) {
      commit('SET_ERROR', error.message)
      throw error
    }
  },
  
  async login({ commit }, { email, password }) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      commit('SET_USER', {
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        displayName: userCredential.user.displayName,
        photoURL: userCredential.user.photoURL
      })
      return { hasAccount: true, user: userCredential.user }
    } catch (error) {
      commit('SET_ERROR', error.message)
      throw error
    }
  },

  async loginWithGoogle({ commit }, userData) {
    try {
      commit('SET_USER', {
        uid: userData.uid,
        email: userData.email,
        displayName: userData.displayName,
        photoURL: userData.photoURL
      })
      return { hasAccount: true, user: userData }
    } catch (error) {
      commit('SET_ERROR', error.message)
      throw error
    }
  },
  
  setUser({ commit }, user) {
    if (user) {
      commit('SET_USER', {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL
      })
    } else {
      commit('SET_USER', null)
    }
  }
}

export const getters = {
  isAuthenticated: (state) => !!state.user,
  getUser: (state) => state.user
} 
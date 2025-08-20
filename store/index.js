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
      await userCredential.user.reload()
      
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
        displayName: userCredential.user.displayName || userCredential.user.email?.split('@')[0],
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
      console.log('=== STORE LOGIN WITH GOOGLE DEBUG ===')
      console.log('Received userData:', userData)
      console.log('userData.photoURL:', userData.photoURL)
      console.log('userData.photoURL type:', typeof userData.photoURL)
      console.log('userData.photoURL === null:', userData.photoURL === null)
      console.log('userData.photoURL === undefined:', userData.photoURL === undefined)
      console.log('userData.photoURL === "":', userData.photoURL === "")

      let finalPhotoURL = userData.photoURL;
      
      if (!finalPhotoURL && userData.providerData && userData.providerData.length > 0) {
        console.log('Main photoURL is null/empty, checking provider data...')
        for (let provider of userData.providerData) {
          console.log('Checking provider:', provider.providerId, 'photoURL:', provider.photoURL)
          if (provider.photoURL) {
            finalPhotoURL = provider.photoURL;
            console.log('Found photoURL in provider data:', finalPhotoURL)
            break;
          }
        }
      }
      
      const userToStore = {
        uid: userData.uid,
        email: userData.email,
        displayName: userData.displayName || userData.email?.split('@')[0],
        photoURL: finalPhotoURL || null
      }
      
      console.log('Final user object to store:', userToStore)
      console.log('=== END STORE DEBUG ===')
      
      commit('SET_USER', userToStore)
      return { hasAccount: true, user: userData }
    } catch (error) {
      commit('SET_ERROR', error.message)
      throw error
    }
  },
  
  setUser({ commit }, user) {
    if (user) {
      console.log('=== SET USER DEBUG ===')
      console.log('setUser called with:', user)
      console.log('user.photoURL:', user.photoURL)
      
      let finalPhotoURL = user.photoURL;
      
      if (!finalPhotoURL && user.providerData && user.providerData.length > 0) {
        console.log('Main photoURL is null/empty in setUser, checking provider data...')
        for (let provider of user.providerData) {
          console.log('Checking provider in setUser:', provider.providerId, 'photoURL:', provider.photoURL)
          if (provider.photoURL) {
            finalPhotoURL = provider.photoURL;
            console.log('Found photoURL in provider data (setUser):', finalPhotoURL)
            break;
          }
        }
      }
      
      const userToStore = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName || user.email?.split('@')[0],
        photoURL: finalPhotoURL
      }
      
      console.log('Final user object in setUser:', userToStore)
      console.log('=== END SET USER DEBUG ===')
      
      commit('SET_USER', userToStore)
    } else {
      commit('SET_USER', null)
    }
  },

  async updateUserProfile({ commit }, { displayName }) {
    try {
      const currentUser = auth.currentUser
      if (currentUser) {
        await updateProfile(currentUser, {
          displayName: displayName
        })
        await currentUser.reload()
        
        commit('SET_USER', {
          uid: currentUser.uid,
          email: currentUser.email,
          displayName: displayName,
          photoURL: currentUser.photoURL
        })
        
        return currentUser
      }
    } catch (error) {
      commit('SET_ERROR', error.message)
      throw error
    }
  }
}

export const getters = {
  isAuthenticated: (state) => !!state.user,
  getUser: (state) => state.user
} 
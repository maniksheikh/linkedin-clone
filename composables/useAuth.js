// composables/useAuth.js
import { auth, provider, signInWithPopup } from "~/plugins/firebase";
import { ref } from "vue";

export const useAuth = () => {
  const user = ref(null);
  const error = ref(null);

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      user.value = result.user;
    } catch (err) {
      error.value = err.message;
      console.error("Error during sign-in:", err);
    }
  };

  const signOut = async () => {
    try {
      await auth.signOut();
      user.value = null;
    } catch (err) {
      error.value = err.message;
      console.error("Error during sign-out:", err);
    }
  };

  return {
    user,
    error,
    signInWithGoogle,
    signOut,
  };
};

<template>
  <div id="login-form">
    <div class="login-container">
      <h2>Linked<span><img class="linkedin-img" src="../img/linkedin.png" alt="LinkedIn Logo"></span></h2>
      <div class="container">
        <div v-if="error" class="error">
          {{ error }}
        </div>
        <form @submit.prevent="loginUser">
          <input v-model="user.email" type="email" placeholder="Email address or phone number" required />
          <input v-model="user.password" type="password" placeholder="Password" required />
          <div class="text-center">
            <button type="submit">Agree & Join</button>
          </div>
        </form>
        <button @click="signInWithGoogle">Sign in with Google</button>
        <label>
          <input v-model="rememberMe" type="checkbox" name="remember"> Remember me
        </label>
        <footer>
          <p>Already on LinkedIn?</p>
          <span class="create-content" @click="showSignup">Create an Account</span>
        </footer>
      </div>
      <Signin v-if="show" @toggle-order-form="showModal"></Signin>
      <SignUp v-if="visible" @toggle-order-form="showSignup"></SignUp>
    </div>
  </div>
</template>

<script>
import { auth, GoogleAuthProvider, signInWithPopup } from '@/firebase';

import Signin from '../components/Signin.vue';
import SignUp from '../components/SignUp.vue';

export default {
  components: {
    Signin,
    SignUp,
  },
  data() {
    return {
      show: false,
      visible: false,
      error: '',
      user: {
        email: '',
        password: '',
      },
      rememberMe: false,
    };
  },
  methods: {
    showModal() {
      this.show = !this.show;
    },
    showSignup() {
      this.visible = !this.visible;
    },
    async loginUser() {
      this.error = '';
      if (!this.user.email || !this.user.password) {
        this.error = 'Please enter both email and password';
        return;
      }

      try {
        const userData = await this.$store.dispatch('login', {
          email: this.user.email,
          password: this.user.password,
        });

        if (userData && userData.hasAccount) {
          alert('You are successfully logged in! Redirecting...');
          await this.$router.push('/feed');
          this.clearForm();
        } else {
          this.error = 'You need to create an account before logging in!';
        }
      } catch (error) {
        console.error('Login failed:', error);
        this.error = 'Failed login! Please check your credentials and try again.';
        this.clearForm();
      }
    },
    async signInWithGoogle() {
      const provider = new GoogleAuthProvider();
      this.error = '';

      try {
        const result = await signInWithPopup(auth, provider);
        const userData = result.user;

        await this.$store.dispatch('loginWithGoogle', userData);

        alert('You are successfully logged in with Google! Redirecting...');
        await this.$router.push('/feed');
        this.clearForm();
      } catch (error) {
        console.error('Google Sign-In failed:', error);
        this.error = 'Google Sign-In failed. Please try again.';
      }
    },
    clearForm() {
      this.user.email = '';
      this.user.password = '';
      this.rememberMe = false;
    },
  },
};
</script>

<style scoped>
* {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
}

#login-form {
  border-radius: 12px;
  width: 100%;
  max-width: 400px;
  margin: 7rem auto;
  background: #ffffff;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid #e1e5e9;
}

.login-container {
  padding: 1.5rem 2rem;
}

h2 {
  text-align: center;
  font-weight: 600;
  font-size: 2rem;
  margin: 0 0 1.5rem 0;
  color: #0a66c2;
  letter-spacing: -0.5px;
  line-height: 1.2;
}

.linkedin-img {
  height: 24px;
  width: 28px;
  margin-left: 4px;
  vertical-align: middle;
}

.error {
  color: #d32f2f;
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  margin-bottom: 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
}

input[type=email],
input[type=password] {
  width: 100%;
  padding: 0.75rem 1rem;
  margin: 0.375rem 0;
  font-size: 1rem;
  border: 2px solid #e1e5e9;
  box-sizing: border-box;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  background-color: #ffffff;
  color: #333333;
  font-weight: 400;
}

input[type=email]:focus,
input[type=password]:focus {
  border-color: #0a66c2;
  box-shadow: 0 0 0 3px rgba(10, 102, 194, 0.1);
}

input[type=email]::placeholder,
input[type=password]::placeholder {
  color: #666666;
  font-weight: 400;
}

button {
  background-color: #0a66c2;
  color: white;
  padding: 0.75rem 1.5rem;
  margin: 0.75rem 0 0.5rem 0;
  border: none;
  cursor: pointer;
  width: 100%;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  transition: background-color 0.2s ease, transform 0.1s ease;
  font-family: inherit;
  margin-bottom: 1rem;
}

button:hover {
  background-color: #084d7a;
  transform: translateY(-1px);
}

button:active {
  transform: translateY(0);
}

/* Google Sign-in button */
button + button {
  background-color: #ffffff;
  color: #333333;
  border: 2px solid #e1e5e9;
  margin: 0.375rem 0 0.75rem 0;
  font-weight: 500;
}

button + button:hover {
  background-color: #f8f9fa;
  border-color: #d1d5db;
  transform: translateY(-1px);
}

.container {
  background: #ffffff;
  border-radius: 12px;
  padding: 0;
  margin: 0;
  box-shadow: none;
}

/* Remember me checkbox */
label {
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: #666666;
  font-weight: 400;
  margin-bottom: 1rem;
  cursor: pointer;
}

input[type="checkbox"] {
  width: auto;
  margin: 0 0.5rem 0 0;
  padding: 0;
  accent-color: #0a66c2;
}

footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0 0 0;
  margin: 0;
  border-top: 1px solid #e1e5e9;
}

footer p {
  font-size: 0.875rem;
  color: #666666;
  font-weight: 400;
  margin: 0;
  text-decoration: none;
}

.create-content {
  cursor: pointer;
  color: #0a66c2;
  font-size: 0.875rem;
  font-weight: 600;
  margin-left: 0.5rem;
  text-decoration: none;
  transition: color 0.2s ease;
}

.create-content:hover {
  color: #084d7a;
  text-decoration: underline;
}

/* Responsive Design */
@media screen and (max-width: 480px) {
  #login-form {
    margin: 1rem;
    width: calc(100% - 2rem);
  }
  
  .login-container {
    padding: 1.25rem 1.5rem;
  }
  
  h2 {
    font-size: 1.75rem;
    margin-bottom: 1.25rem;
  }
  
  input[type=email],
  input[type=password] {
    padding: 0.625rem;
    font-size: 1rem;
  }
  
  button {
    padding: 0.625rem 1rem;
    font-size: 1rem;
  }
}

@media screen and (max-width: 320px) {
  .login-container {
    padding: 1rem;
  }
  
  h2 {
    font-size: 1.5rem;
  }
}

/* Loading and disabled states */
button:disabled {
  background-color: #e1e5e9;
  color: #9ca3af;
  cursor: not-allowed;
  transform: none;
}

button:disabled:hover {
  background-color: #e1e5e9;
  transform: none;
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {
  button,
  input,
  .create-content {
    transition: none;
  }
}

/* Focus styles for better accessibility */
button:focus,
.create-content:focus {
  outline: 2px solid #0a66c2;
  outline-offset: 2px;
}
</style>
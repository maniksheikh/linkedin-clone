<template>
  <div class="login-page">
    <div id="login-form">
    <div class="login-container">
      <h2>Linked<span><img class="linkedin-img" src="/img/linkedin.png" alt="LinkedIn Logo" @error="handleImageError"></span></h2>
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
        <button @click="signInWithGoogle" class="google-signin-btn">
          <svg width="18" height="18" viewBox="0 0 18 18" class="google-icon">
            <path fill="#4285F4" d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18z"/>
            <path fill="#34A853" d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2.04a4.8 4.8 0 0 1-7.18-2.53H1.83v2.07A8 8 0 0 0 8.98 17z"/>
            <path fill="#EA4335" d="M4.5 10.49a4.8 4.8 0 0 1 0-3.09V5.33H1.83a8 8 0 0 0 0 7.16z"/>
            <path fill="#FBBC04" d="M8.98 4.72c1.16 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.33L4.5 7.4c.68-2.07 2.49-2.68 4.48-2.68z"/>
          </svg>
          Sign in with Google
        </button>
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
  </div>
</template>

<script>
import { auth, signInWithPopup, provider } from '@/plugins/firebase';

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
    handleImageError(event) {
      event.target.src = '/img/linkedin-placeholder.svg'; // Fallback image
    }
  },
};
</script>

<style scoped lang="scss">

$primary-color: #0a66c2;
$primary-dark: #084d7a;
$white: #ffffff;
$text-primary: #333333;
$text-secondary: #666666;
$text-muted: #9ca3af;
$border-color: #e1e5e9;
$border-light: #d1d5db;
$error-color: #d32f2f;
$error-bg: #fef2f2;
$error-border: #fecaca;
$success-bg: #f8f9fa;

$border-radius: 8px;
$border-radius-lg: 12px;
$transition: 0.2s ease;
$box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

$font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;

@mixin button-hover-effect {
  transform: translateY(-1px);
}

@mixin focus-style {
  outline: 2px solid $primary-color;
  outline-offset: 2px;
}

@mixin input-focus {
  border-color: $primary-color;
  box-shadow: 0 0 0 3px rgba(10, 102, 194, 0.1);
}

* {
  font-family: $font-family;
}

body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
}

#login-form {
  border-radius: $border-radius-lg;
  width: 100%;
  max-width: 400px;
  margin: 2rem auto;
  background: $white;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15), 0 8px 25px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
    border-radius: $border-radius-lg;
    pointer-events: none;
  }
}

.login-container {
  padding: 1.5rem 2rem;
  position: relative;
  z-index: 1;
}

h2 {
  text-align: center;
  font-weight: 600;
  font-size: 2rem;
  margin: 0 0 1.5rem 0;
  color: $primary-color;
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
  color: #ff0000 !important;
  background-color: #fff5f5;
  border: 2px solid #ff0000;
  padding: 1rem;
  border-radius: $border-radius;
  margin-bottom: 1rem;
  font-size: 1.1rem !important;
  font-weight: 700 !important;
  text-align: center;
  display: block !important;
  visibility: visible !important;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(255, 0, 0, 0.3);
}

input[type=email],
input[type=password] {
  width: 100%;
  padding: 0.75rem 1rem;
  margin: 0.375rem 0;
  font-size: 1rem;
  border: 2px solid $border-color;
  box-sizing: border-box;
  border-radius: $border-radius;
  outline: none;
  transition: border-color $transition, box-shadow $transition;
  background-color: $white;
  color: $text-primary;
  font-weight: 400;

  &:focus {
    @include input-focus;
  }

  &::placeholder {
    color: $text-secondary;
    font-weight: 400;
  }
}

button {
  background-color: $primary-color;
  color: white;
  padding: 0.75rem 1.5rem;
  margin: 0.75rem 0 0.5rem 0;
  border: none;
  cursor: pointer;
  width: 100%;
  font-size: 1rem;
  font-weight: 600;
  border-radius: $border-radius;
  transition: background-color $transition, transform 0.1s ease;
  font-family: inherit;
  margin-bottom: 1rem;

  &:hover {
    background-color: $primary-dark;
    @include button-hover-effect;
  }

  &:active {
    transform: translateY(0);
  }

  &:focus {
    @include focus-style;
  }

  &:disabled {
    background-color: $border-color;
    color: $text-muted;
    cursor: not-allowed;
    transform: none;

    &:hover {
      background-color: $border-color;
      transform: none;
    }
  }

  &.google-signin-btn {
    background-color: $white;
    color: #3c4043;
    border: 2px solid #dadce0;
    margin: 0.375rem 0 0.75rem 0;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    transition: all $transition;

    &:hover {
      background-color: #f8f9fa;
      border-color: #dadce0;
      box-shadow: 0 1px 3px 0 rgba(60, 64, 67, 0.3);
      @include button-hover-effect;
    }

    &:focus {
      background-color: #f8f9fa;
      border-color: #4285f4;
      box-shadow: 0 1px 3px 0 rgba(60, 64, 67, 0.3);
    }

    .google-icon {
      flex-shrink: 0;
    }
  }
}

.container {
  background: $white;
  border-radius: $border-radius-lg;
  padding: 0;
  margin: 0;
  box-shadow: none;
}

label {
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: $text-secondary;
  font-weight: 400;
  margin-bottom: 1rem;
  cursor: pointer;
}

input[type="checkbox"] {
  width: auto;
  margin: 0 0.5rem 0 0;
  padding: 0;
  accent-color: $primary-color;
}

footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0 0 0;
  margin: 0;
  border-top: 1px solid $border-color;

  p {
    font-size: 0.875rem;
    color: $text-secondary;
    font-weight: 400;
    margin: 0;
    text-decoration: none;
  }
}

.create-content {
  cursor: pointer;
  color: $primary-color;
  font-size: 0.875rem;
  font-weight: 600;
  margin-left: 0.5rem;
  text-decoration: none;
  transition: color $transition;

  &:hover {
    color: $primary-dark;
    text-decoration: underline;
  }

  &:focus {
    @include focus-style;
  }
}

@media screen and (max-width: 768px) {
  .login-page {
    padding: 1rem 0.5rem;
    min-height: 100vh;
  }
  
  #login-form {
    margin: 0.5rem;
    width: 97%;
    max-width: 97%;
    box-sizing: border-box;
  }
  
  .login-container {
    padding: 1.5rem 1.25rem;
  }
  
  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .linkedin-img {
    height: 20px;
    width: 24px;
  }
  
  input[type=email],
  input[type=password] {
    padding: 0.75rem;
    font-size: 0.95rem;
    margin: 0.25rem 0;
  }
  
  button {
    padding: 0.75rem 1.25rem;
    font-size: 0.95rem;
    margin: 0.5rem 0;
  }
  
  label {
    font-size: 0.8rem;
    margin-bottom: 0.75rem;
  }
  
  footer {
    padding: 0.75rem 0 0 0;
    
    p, .create-content {
      font-size: 0.8rem;
    }
  }
}

@media screen and (max-width: 480px) {
  body {
    padding: 0;
    margin: 0;
  }
  
  .login-page {
    padding: 0.5rem 0.25rem;
    min-height: 100vh;
  }
  
  #login-form {
    margin: 0.25rem;
    width: 97%;
    max-width: 97%;
    box-sizing: border-box;
  }
  
  .login-container {
    padding: 1rem 1rem;
  }
  
  h2 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
  
  .linkedin-img {
    height: 18px;
    width: 22px;
  }
  
  input[type=email],
  input[type=password] {
    padding: 0.65rem;
    font-size: 0.9rem;
    margin: 0.2rem 0;
  }
  
  button {
    padding: 0.65rem 1rem;
    font-size: 0.9rem;
    margin: 0.4rem 0;
  }
  
  label {
    font-size: 0.75rem;
    margin-bottom: 0.5rem;
  }
  
  .error {
    font-size: 0.9rem !important;
    padding: 0.75rem;
  }
  
  footer {
    padding: 0.5rem 0 0 0;
    
    p, .create-content {
      font-size: 0.75rem;
    }
  }
}

@media screen and (max-width: 375px) {
  .login-page {
    padding: 0.25rem 0.125rem;
  }
  
  #login-form {
    margin: 0.125rem;
    width: 97%;
    max-width: 97%;
  }
  
  .login-container {
    padding: 0.75rem 0.75rem;
  }
  
  h2 {
    font-size: 1.2rem;
    margin-bottom: 0.75rem;
  }
  
  .linkedin-img {
    height: 16px;
    width: 20px;
  }
  
  input[type=email],
  input[type=password] {
    padding: 0.5rem;
    font-size: 0.85rem;
  }
  
  button {
    padding: 0.5rem 0.75rem;
    font-size: 0.85rem;
  }
}
</style>
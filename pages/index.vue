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
        <label>
          <input v-model="rememberMe" type="checkbox" name="remember"> Remember me
        </label>
        <footer>
          <p>Already on LinkedIn?</p>
          <span class="create-content" @click="showModal">Create an Account</span>
        </footer>
      </div>
      <Signin v-if="show" @toggle-order-form="showModal"></Signin>
      <SignUp v-if="visible" @toggle-order-form="showSignup"></SignUp>
    </div>
  </div>
</template>
<script>
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
    }
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

    clearForm() {
      this.user.email = '';
      this.user.password = '';
      this.rememberMe = false;
    },
  },
}


</script>

<style scoped>
#login-form {
  border-radius: 15px;
  width: 500px;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-top: 10rem;
  background: white;
  box-shadow: border-box;
}

.login-container {
  padding: 20px;
}

h2 {
  text-align: center;
  justify-content: center;
  font-weight: bold;
  margin: auto;
  font-size: 40px;
  padding-top: 15px;
  color: black;
}

.linkedin-img {
  height: 30px;
  width: 35px;
}

.error {
  color: red;
  margin-top: 10px;
}

form {
  margin-bottom: 7px;
}

input[type=email],
input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  font-size: 17px;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 8px;
  outline: none;
}

button {
  background-color: #04a3f8;
  color: white;
  padding: 10px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  font-size: 17px;
  font-weight: bold;
  border-radius: 10px;
}

button:hover {
  transition: 1s;
  background: #11587e;
  color: white;
}

.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #ee36f4;
  border-radius: 10px;
}

.container {
  box-shadow: border-box;
  border-radius: 15px;
  padding: 16px;
  background: white !important;
  margin-top: -15px;
}

span.password {
  font-size: 14px;
  font-weight: bold;
  float: right;
  padding-top: 16px;
}

.password {
  color: black;
}

@media screen and (max-width: 300px) {
  span.password {
    display: block;
    float: none;
  }

  .cancelbtn {
    width: 100%;
  }
}

footer {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 0 3px;
  margin-top: 20px;
}

p {
  font-size: 1rem;
  color: gray;
  font-weight: bold;
  text-decoration: none;
}

.create-content {
  cursor: pointer;
  color: blue;
  font-size: 18px;
  font-weight: bold;
  margin-left: 20px;
  text-decoration: underline;
}
</style>
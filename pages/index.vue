<template>
  <div id="login-form">
    <h2> Linked<span><img class="linkedin-img" src="../img/linkedin.png" alt=""></span></h2>
    <div class="container">
      <button type="submit" @click="login">Agree & Join</button>
      <label>
        <input type="checkbox" checked="checked" name="remember"> Remember me
      </label>
      <footer>
        <p>Already on LinkedIn?</p> <span class="footer-p"> Sign in</span>
      </footer>
    </div>
    <Signin v-if="show" @toggole-order-form="showModal"></Signin>
    <SignUp v-if="visible" @toggle-order-form="showSignup"></SignUp>
  </div>
</template>
<script>
import Signin from '../components/Signin.vue';
import SignUp from '../components/SignUp.vue'

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
    }
  },
  methods: {
    showModal() {
      this.show = !this.show
    },
    showSignup() {
      this.visible = !this.visible
    },
    async loginUser() {
      try {
        const userData = await this.$store.dispatch('login', {
          email: this.user.email,
          password: this.user.password,
        });
        if (userData && userData.hasAccount) {
          alert('You are successfully logged in! Click here');
          await this.$router.push('/feed');
        } else {
          this.error = 'You need to create an account before logging in!';
        }
      } catch (error) {
        this.error = 'Failed login!';
      }
    },
  },
}
</script>

<style scoped>
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

#login-form {
  border-radius: 15px;
  width: 500px;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-top: 8rem;
  background: white;
  box-shadow: border-box;
}

form {
  border: 3px solid #f1f1f1;
}

/* Full-width inputs */
input[type=text],
input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 8px;
}

/* Set a style for all buttons */
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

/* Add a hover effect for buttons */
button:hover {
  transition: 1s;
  background: #11587e;
  color: white;
}

/* Extra style for the cancel button (red) */
.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #ee36f4;
  border-radius: 10px;
}

/* Center the avatar image inside this container */
.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}


/* Add padding to containers */
.container {
  box-shadow: border-box;
  border-radius: 15px;
  padding: 16px;
  background: white !important;
  margin-top: -15px;
}

/* The "Forgot password" text */
span.password {
  font-size: 14px;
  font-weight: bold;
  float: right;
  padding-top: 16px;
}

.password {
  color: black;
}

/* Change styles for span and cancel button on extra small screens */
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
}

p {
  font-size: 1rem;
  color: black;
  font-weight: bold;
  text-decoration: none;
}

.footer-p {
  cursor: pointer;
  color: blue;
  font-size: 14px;
  font-weight: bold;
}
</style>
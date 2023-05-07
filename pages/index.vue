<template>
  <div id="login-form">
    <h2> Linked<span><img class="linkedin-img" src="../img/linkedin.png" alt=""></span></h2>
    <div class="container">
      <label for="name">
        <b> UserName</b>
      </label>
      <input type="text" v-model="name" placeholder="Enter Username" name="name" required>

      <label for="email">
        <b>Email: </b>
      </label>
      <input type="text" v-model="email" placeholder="Enter Email" name="email" required>

      <label for="password">
        <b>Password:</b>
      </label>
      <input type="password" v-model="password" placeholder="Enter Password" required>

      <button type="submit" @click="login">Agree & Join</button>
      <label>
        <input type="checkbox" checked="checked" name="remember"> Remember me
      </label>

      <footer>
        <p>Already on LinkedIn?</p>   <span class="footer-p"> Sign in</span>
      </footer>

    </div>

  </div>
</template>
<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export default {

  data() {
    return {
      name: null,
      email: '',
      password: ''
    }
  },

  methods: {

    login() {
      try {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
        alert('Successfully registered! Please login.');
        this.$router.push('/feed');
      }
      catch (error) {
        alert(error.message);
      } finally {
        this.name = '';
        this.email = '';
        this.password = '';
      }

    }
  }
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

/* Bordered form */
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
  background:#11587e;
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
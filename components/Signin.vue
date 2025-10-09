<template>
    <div v-if="showModal">
        <div class="modalBody">
            <div class="signin">
                <div class="signin-group">
                    <div v-if="error" class="error mt-3">
                        {{ error }}
                    </div>
                    <div class="header">
                        Log in to LinkedIn
                    </div>
                    <img src="/assets/img/icons-question-mark-img.png" alt="" class="cross-icon" @click="hideorderform" />
                    <div class="signin-wrap">
                        <form @submit.prevent="loginUser">
                            <input v-model="user.email" type="email" placeholder="Email address or phone number"
                                required />
                            <input v-model="user.password" type="password" placeholder="Password" required />
                            <div class="flex-check">
                                <div>
                                    <input id="" type="checkbox" name="" />
                                </div>
                                <span>Remember password</span>
                            </div>
                            <div class="text-center">
                                <button type="submit" class="btn btn-secondery">Log in</button>
                            </div>
                        </form>
                        <div class="text-center">
                            <p class="forgot-pass">Forgotten password?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="backdrop" @click="hideorderform"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            error: '',
            showModal: true,
            user: {
                username: '',
                email: '',
                password: '',
            },
        }
    },
    methods: {
        hideorderform() {
            this.showModal = false;
        },
        async loginUser() {
            try {
                this.isLoading = true
                await this.$store.dispatch('login', {
                    email: this.user.email,
                    password: this.user.password,
                })
                this.$router.push('/feed')
            } catch (error) {
                this.error = 'Failed login!'
                this.isLoading = false
            }
        },
    },
}
</script>

<style scoped>
* {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
}

div {
    border-radius: 10px;
}

.modalBody {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    z-index: 99999;
    background-color: #fec855;
}

.backdrop {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    cursor: pointer;
}

.signin-group {
    width: 500px;
    padding: 20px 20px;
    border: 1px solid white;
    background: white;
    box-sizing: border-box;
    z-index: 9999;
    box-shadow: 0 0 10px rgba(130, 117, 117, 0.2);
}

.flex-check {
    display: flex;
    gap: 0.5rem;
    padding: 0.7rem 0 !important;
    cursor: pointer;
}

input {
    width: 15px;
    height: 15px;
    margin-top: 0.2rem;
    cursor: pointer;
}

span {
    font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 17px;
    line-height: 1.5;
}

.cross-icon {
    position: absolute;
    top: 1.5rem;
    right: 1rem;
    padding: 5px;
    background: #dadde1;
    border-radius: 50%;
    cursor: pointer;
}

.header {
    margin: 0 12px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.3rem;
    padding: 1rem 0 !important;
    font-weight: bold;
}

.signin-wrap {
    padding: 1rem;
    width: 100%;
    margin: 0 auto;
}

input {
    display: block;
    width: 100%;
    background: transparent;
    padding: 1.3rem 0.7rem;
    margin-bottom: 10px;
    font-size: 1rem;
    border: 1px solid rgba(130, 117, 117, 0.2);
    border-radius: 5px;
    outline: none;
    box-sizing: border-box;
}

input:focus {
    border: 1px solid blue;
}

p {
    color: #1877f2;
    padding: 0.8rem 0;
    font-size: 1.1rem;
      &:hover {
        text-decoration: underline;
       }
}

.forgot-pass {
    color: #1877f2;
    font-size: 14px;
    letter-spacing: 1px;
    font-family: Helvetica, Arial, sans-serif;
}

.btn-secondery {
    width: 100%;
    padding: 0.7rem 0;
    background: #0268ee;
    color: white;
    font-size: 1.2rem;
    font-weight: 700;
    border-radius: 5px;
    transition: 0.3s ease-in;
    border: none;
    cursor: pointer;
}

.btn-secondery:hover {
    background: #005fdb;
}

.btn-primary {
    padding: 0.9rem;
    background: #42b72a;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
        'Lucida Sans', Arial, sans-serif;
    color: white;
    font-size: 1.2rem;
    font-weight: 700;
    border-radius: 5px;
    transition: 0.3s ease-in-out;
}

.btn-primary:hover {
    background: #40bc27;
}

.forgot-pass {
    text-align: center;
    cursor: pointer;
}

@media screen and (max-width: 500px) {
    .signin-group {
        width: 350px;
    }
}
</style>
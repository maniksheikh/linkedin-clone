<template>
    <div>
        <div class="backdrop"></div>
        <div class="signup">
            <div class="content">
                <p v-if="error" class="error">
                    {{ error }}
                </p>
                <h1>Sign Up</h1>
            </div>
            <div class="signup-group">
                <form action="#" @submit.prevent="registerUser">
                    <div class="flex">
                        <input v-model="user.username" class="input" type="text" placeholder="FirstName" required />
                        <input class="input" type="text" placeholder="LastName" />
                    </div>
                    <input v-model="user.email" class="input" type="email" required placeholder="Email address" />
                    <input v-model="user.password" class="input" type="password" required placeholder="New password" />
                    <div class="birth">
                        <a href="#">Date of birth
                            <img class="question-png" src="/assets/image/icons-question-mark-img.png" alt="" /></a>
                        <div class="flex">
                            <select id="" v-model="selectedays" name="">
                                <option v-for="day in days" :key="day">
                                    {{ day }}
                                </option>
                            </select>

                            <select v-model="selectedmonths">
                                <option v-for="month in months" :key="month">
                                    {{ month }}
                                </option>
                            </select>
                            <select v-model="selectedYear">
                                <option v-for="year in years" :key="year">{{ year }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="gender">
                        <a href="#">Gender
                            <img class="question-png" src="/assets/image/icons-question-mark-img.pngg" alt="" /></a>
                        <div class="flex-items">
                            <div class="form-control">
                                <label for="html">Female</label><br />
                                <input type="radio" name="fav_language" value="Female" />
                            </div>
                            <div class="form-control">
                                <label for="css">Male</label><br />
                                <input type="radio" name="fav_language" value="Male" />
                            </div>
                            <div class="form-control">
                                <label for="javascript">Custom</label>
                                <input type="radio" name="fav_language" value="Custom" />
                            </div>
                        </div>
                    </div>
                    <div class="terms">
                        <a href="#">By clicking Sign Up, you agree to our Terms,
                            <span>Privacy</span> <span>Policy</span> and
                            <span>Cookies Policy</span> . You may receive SMS notifications
                            from us and can opt out at any time.</a>
                    </div>
                    <div class="text-center py-1">
                        <button type="submit" class="btn btn-primary">Sign up</button>
                    </div>
                </form>
            </div>
            <img id="u_2_9_Am" class="delete-img" src="https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/zgulV2zGm8t.png"
                alt="" width="24" height="24" @click="hideOrderForm" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            error: '',
            user: {
                username: '',
                email: '',
                password: '',
            },
            selectedays: 1,
            selectedmonths: 'Jan',
            selectedYear: 2024,
            days: [
                '1', '2', '3', '4', ' 5', '6', ' 7', ' 8', ' 9', '10', '11', '12', ' 13', '14', '15', '16', '17', '18', '19', '20',
                '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'
            ],
            months: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
            ],
        }
    },

    computed: {
        years() {
            const year = new Date().getFullYear()
            return Array.from({ length: year - 1900 }, (value, index) => 1901 + index)
        },
    },

    methods: {
        hideOrderForm() {
            this.$emit('toggle-order-form')
        },
        async registerUser() {
            try {
                await this.$store.dispatch('signup', {
                    email: this.user.email,
                    password: this.user.password,
                    userName: this.user.username,
                })
                this.$router.push('/feed')
            } catch (error) {
                alert(error)
                this.error = 'Something went wrong to create account'
            }
        },
    },
}
</script>

<style>

* {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
}

.signup {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    z-index: 99999;
    background: white;
    box-shadow: 0 0 5px #ccc;
    border-radius: 10px;
}

.signup .delete-img {
    position: absolute;
    top: 1.5rem;
    right: 1rem;
    cursor: pointer;
}

.signup .content {
    padding: 1rem;
    border: 1px solid rgba(99, 96, 96, 0.3);
}

.signup .content h1 {
    text-align: center;
    font-family: Helvetica, Arial, sans-serif;
}

.signup .content span {
    font-family: Helvetica, Arial, sans-serif;
    color: #606770;
    font-weight: 400;
    font-size: 14px;
}

.signup .signup-group {
    padding: 1rem;
}

.signup .signup-group .input {
    width: 100%;
    display: block;
    padding: 0.6rem;
    font-size: 15px;
    border: none;
    outline: none;
    border: 1px solid #ccc;
    font-family: Helvetica, Arial, sans-serif;
    box-sizing: border-box;
    border-radius: 5px;
    background: #f5f6f7;
    margin: 10px auto;
}

.signup .signup-group .flex {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.signup .signup-group .birth .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.signup .signup-group .birth select {
    width: 200px;
    padding: 0.6rem;
    font-weight: 400;
    font-size: 15px;
    outline: none;
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.signup .signup-group .birth select option {
    padding: 10px;
}

.signup .signup-group .birth a {
    display: flex;
    align-items: center;
    font-size: 16px;
    padding: 0.4rem 0;
    color: #606770;
    font-weight: 400;
    text-decoration: none;
    font-family: SFProText-Medium, Helvetica, Arial, sans-serif;
}

.signup .signup-group .birth a .question-png,
.signup .signup-group .gender a .question-png {
    width: 10px;
    height: 10px;
    color: white;
}

.signup .signup-group .gender a {
    display: flex;
    align-items: center;
    font-size: 16px;
    padding: 0.4rem 0;
    color: #606770;
    font-weight: 400;
    text-decoration: none;
    font-family: Helvetica, Arial, sans-serif;
}

.signup .signup-group .gender .flex-items {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.signup .signup-group .gender .flex-items .form-control {
    border: 1px solid #ccc;
    padding: 0.6rem;
    display: flex;
    align-items: center;
    border-radius: 5px;
    font-weight: 400;
    font-size: 15px;
    cursor: pointer;
    margin-bottom: 10px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    gap: 1.9rem;
}

.signup .signup-group .gender .flex-items .form-control label {
    cursor: pointer;
    font-size: 1rem;
    font-family: Arial, Helvetica, sans-serif;
}

.signup .signup-group .terms a {
    text-decoration: none;
    margin-top: 3rem;
    color: #777777;
    font-size: 13px;
    font-weight: 400;
    font-family: Helvetica, Arial, sans-serif;
}

.signup .signup-group .terms a span {
    color: #92d2ff;
}

.signup .signup-group .terms a span:hover {
    text-decoration: underline;
}

.signup .signup-group .btn-primary {
    display: block;
    margin: 1rem auto;
    padding: 0.4rem 3.5rem;
    color: white;
    font-size: 1.3rem;
    background: #00a400;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    border-radius: 10px;
    border: none;
    cursor: pointer;
}


.error {
    margin-top: 2rem;
    color: white !important;
    background: red;
    padding: 0.8rem 0.6rem;
    font-size: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 10px;
}

.backdrop {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(99, 96, 96, 0.4);
    z-index: 9999;
}

@media screen and (max-width: 500px) {
    .signup {
        width: 350px;
    }

    .signup .signup-group .gender .flex-items {
        gap: 0.3rem;
    }

    .signup .signup-group .gender .flex-items .form-control {
        gap: 0.5rem;
    }
}
</style>
<template>
    <img class="logo" src="../assets/Restaurant-Logo-PNG-File-Download-Free.png">
    <div>Login</div>
    <div class="login">
        <input type="text" v-model="email" placeholder="Enter E-mail">
        <div class="errorMsg">{{ emailError }}</div>
        <input type="password" v-model="password" placeholder="Enter Password">
        <div class="errorMsg">{{ passwordError }}</div>
        <button @click="login">Login</button>
        <div>
            <router-link to="/sign-up">SignUp</router-link>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: 'LoginPage',
    data() {
        return {
            email: '',
            password: '',
            emailError: '',
            passwordError: ''
        }
    },
    methods: {
        async login() {
            this.emailError = ""
            this.passwordError = ""
            if (this.email && this.password) {
                let result = await axios.get(
                    `http://localhost:3000/user?email=${this.email}&password=${this.password}`
                )
                console.log(result)
                if (result.status === 200 && result.data.length > 0) {
                    localStorage.setItem("user-info", JSON.stringify(result.data[0]))
                    this.$router.push({ name: 'Home' })
                }
            }
            if (!this.email) {
                this.emailError = "Enter email"
            }
            if (!this.password) {
                this.passwordError = "Enter Password"
            }
        }
    },
    mounted() {
        let user = localStorage.getItem("user-info")
        if (user) {
            this.$router.push({ name: 'Home' })
        }
    }
}
</script>
<style></style>
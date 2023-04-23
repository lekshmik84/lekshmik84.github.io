<template>
    <img class="logo" src="../assets/Restaurant-Logo-PNG-File-Download-Free.png">
    <div>SignUp</div>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter Name">
        <div class="errorMsg">{{ nameError }}</div>
        <input type="email" v-model="email" placeholder="Enter E-mail">
        <div class="errorMsg">{{ emailError }}</div>
        <input type="password" v-model="password" placeholder="Enter Password">
        <div class="errorMsg">{{ passwordError }}</div>
        <button @click="signUp()">Sign Up</button>
        <div>
            <router-link to="/login">Login</router-link>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
// import { validate } from 'json-schema';
import { v4 as uuidv4 } from 'uuid';
// import { onMounted } from 'vue';

export default {
    name: "SignUp",
    data() {
        return {
            name: "",
            email: "",
            password: "",
            nameError: "",
            emailError: "",
            passwordError: "",
            flag: false
        }
    },
    watch: {
    },
    methods: {
        async signUp(e) {
            this.nameError = ""
            this.emailError = ""
            this.passwordError = ""
            if (this.name && this.email && this.password) {
                try {
                    const id = uuidv4();
                    const result = await axios.post('http://localhost:3000/user', {
                        id,
                        email: this.email,
                        password: this.password,
                        name: this.name
                    });
                    console.log(result)
                    if (result.status === 201) {
                        localStorage.setItem("user-info", JSON.stringify(result.data))
                        this.$router.push({ name: 'Home' })
                    }
                }
                catch (error) {
                    console.error(error);
                    alert('There was an error signing up. Please try again later.');
                }
                return true;
            }
            if (!this.name) {
                this.nameError = "enter name"
            }
            if (!this.email) {
                this.emailError = "enter email"
            }
            if (!this.password) {
                this.passwordError = "enter password"
            }
            e.preventDefault
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
<style>
</style>
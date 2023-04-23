<template>
    <HeaderPart />
    <div>Hello user, Welcome to Add Restaurant page</div>
    <form class="add">
        <input v-model="restaurant.name" type="text" name="name" placeholder="enter name">
        <input v-model="restaurant.address" type="text" name="address" placeholder="enter address">
        <input v-model="restaurant.contact" type="text" name="contact" placeholder="enter contact">
        <button @click.prevent="addRestaurant">Add New Restaurant</button>
    </form>
</template>
<script>
import axios from 'axios'
import HeaderPart from './Header.vue'
import { v4 as uuidv4 } from 'uuid';
export default {
    name: 'AddRestaurant',
    data() {
        return {
            restaurant: {
                id: "",
                name: "",
                address: "",
                contact: ""
            }
        }
    },
    components: {
        HeaderPart
    },
    methods: {
        async addRestaurant() {
            const id = uuidv4();
            const result = await axios.post('http://localhost:3000/restaurant', {
                id,
                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact
            });
            if (result.status == 201) {
                this.$router.push({ name: 'Home' })
            }
        }
    },
    mounted() {
        let user = localStorage.getItem("user-info")
        if (!user) {
            this.$router.push({ name: 'SignUp' })
        }
    }
}
</script>















<template>
    <HeaderPart />
    <div>Hello, Welcome to Update Restaurant page</div>
    <form class="update">
        <input v-model="restaurant.name" type="text" name="name" placeholder="enter name">
        <input v-model="restaurant.address" type="text" name="address" placeholder="enter address">
        <input v-model="restaurant.contact" type="text" name="contact" placeholder="enter contact">
        <button @click.prevent="updateRestaurant">Update Restaurant</button>
    </form>
</template>
<script>
import HeaderPart from './Header.vue'
import axios from 'axios'
export default {
    name: 'UpdateRestaurant',
    components: {
        HeaderPart
    },
    data() {
        return {
            restaurant: {
                name: "",
                address: "",
                contact: ""
            }
        }
    },
    methods: {
        async updateRestaurant() {
            const result = await axios.put('http://localhost:3000/restaurant/' + this.$route.params.id, {
                id: this.restaurant.id,
                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact
            });
            if (result.status == 200) {
                this.$router.push({ name: 'Home' })
            }
        }
    },
    async mounted() {
        let user = localStorage.getItem("user-info")
        if (!user) {
            this.$router.push({ name: 'SignUp' })
        }
        const result = await axios.get('http://localhost:3000/restaurant/' + this.$route.params.id)
        // console.log(this.$route.params.id)
        this.restaurant = result.data
    }
}
</script>















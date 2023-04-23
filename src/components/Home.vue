<template>
    <HeaderPart />
    <div class="welcomeText">Hello {{ name }}, Welcome to home page</div>
    <table id="restaurantDetails" border="1">
        <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Contact</td>
            <td>Address</td>
            <td>Actions</td>
        </tr>
        <tr v-for="(item, index) in restaurant" :key="item.id">
            <td>{{ index + 1 }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.contact }}</td>
            <td>{{ item.address }}</td>
            <td><router-link :to="'/update/' + item.id" style="text-decoration: none; color: black;">Update</router-link>
                <button id="deleteButton" @click="deleteRestaurant(item.id)">Delete</button>
            </td>
        </tr>
    </table>
</template>
<script>
import axios from 'axios'
import HeaderPart from './Header.vue'
import { RouterLink } from 'vue-router'
export default {
    name: 'HomePage',
    data() {
        return {
            name: "",
            restaurant: []
        }
    },
    components: {
        HeaderPart,
        RouterLink
    },
    methods: {
        async deleteRestaurant(id) {
            let result = await axios.delete('http://localhost:3000/restaurant/' + id)
            console.log(result.status)
            if (result.status == 200) {
                this.loadData()
            }
        },
        async loadData() {
            let user = localStorage.getItem("user-info")
            this.name = JSON.parse(user).name
            if (!user) {
                this.$router.push({ name: 'SignUp' })
            }
            let result = await axios.get('http://localhost:3000/restaurant')
            console.log(result)
            this.restaurant = result.data
        }
    },
    async mounted() {
        this.loadData()
    }
}
</script>
<style>
td {
    width: 160px;
    height: 40px;
}

#restaurantDetails {
    width: 100%;
    table-layout: fixed;
    height: 300px;
    overflow-x: auto;
    margin-top: 0px;
    border: 1px solid rgba(255, 255, 255, 0.3);
}

#deleteButton {
    padding: 7px;
    margin-left: 10px;
}
</style>















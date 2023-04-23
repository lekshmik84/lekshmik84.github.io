import HomePage from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import {createRouter,createWebHistory} from 'vue-router'
import LoginPage from './components/Login.vue'
import UpdateRestaurant from './components/Update.vue'
import AddRestaurant from './components/Add.vue'

const routes=[
    {
        name:'Home',
        component:HomePage,
        path:'/'
    },
    {
        name:'SignUp',
        component:SignUp,
        path:"/sign-up"
    },
    {
        name:'Login',
        component:LoginPage,
        path:"/login"
    },
    {
        name:'Update',
        component:UpdateRestaurant,
        path:"/update/:id"
    },
    {
        name:'Add',
        component:AddRestaurant,
        path:"/add"
    }
];
const router=createRouter({
    history:createWebHistory(),
    routes
});
export default router;
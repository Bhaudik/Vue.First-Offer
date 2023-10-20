import TheHome from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import loginUser from './components/Login.vue'
import IndexPage from './components/Index.vue'
import ManageSchool from './components/ManageSchool'
import ManageProgram from './components/ManageProgram'
import AddSchool from './components/AddSchool'
import UpdataSchool from './components/UpdateSchool'
import AddProgram from './components/AddProgram'
import UpdateProgram from './components/UpdateProgram'
import DemoPage from './components/Demo'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: 'Index', component: IndexPage, path: '/',
    },
    {
        name: 'Home', component: TheHome, path: '/home',
    },
    {
        name: 'SignUp', component: SignUp, path: '/Sign-Up',
    },
    {
        name: 'Login', component: loginUser, path: '/login',
    },
    {
        name: 'ManageSchool', component: ManageSchool, path: '/school',
    },
    {
        name: 'AddSchool', component: AddSchool, path: '/AddSchool',
    },
    {
        name: 'UpdataSchool', component: UpdataSchool, path: '/UpdateSchool/:id',
    },
      
    {
        name: 'ManageProgram', component: ManageProgram, path: '/Program',
    },
    {
        name: 'AddProgram', component: AddProgram, path: '/AddProgram',
    },
    {
        name: 'UpdataProgram', component: UpdateProgram, path: '/UpdateProgram/:id',
    },
    {
        name: 'DemoPage', component: DemoPage, path: '/Demo',
    },
   

]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
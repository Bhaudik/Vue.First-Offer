import TheHome from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import loginUser from './components/Login.vue'
import IndexPage from './components/Index.vue'
import ManageSchool from './components/ManageSchool'
import ManageProgram from './components/ManageProgram'
import ManageCompany from './components/ManageCompany'
import UpdateSchool from './components/UpdateSchool'
import UpdateProgram from './components/UpdateProgram'
import UpdateCompany from './components/UpdateCompany'
import AddProgram from './components/AddProgram'
import AddCompany from './components/AddCompany'
import AddSchool from './components/AddSchool'
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
        name: 'UpdateSchool', component: UpdateSchool, path: '/UpdateSchool/:id',
    },
      
    {
        name: 'ManageProgram', component: ManageProgram, path: '/Program',
    },
    {
        name: 'AddProgram', component: AddProgram, path: '/AddProgram',
    },
    {
        name: 'UpdateProgram', component: UpdateProgram, path: '/UpdateProgram/:id',
    },
    {
        name: 'ManageCompany', component: ManageCompany, path: '/Company',
    },
    {
        name: 'AddCompany', component: AddCompany, path: '/AddCompany',
    },
    {
        name: 'UpdateCompany', component: UpdateCompany, path: '/UpdateCompany/:id',
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
<template>
  <img class="logo" src="../assets/FirstOfferWeb.png" />
  <h3>Sign Up</h3>
  <div class="register">
    <input type="text" v-model="name" placeholder="Enter Name" />
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter password" />
    <input type="password" v-model="password_confirmation" placeholder="Enter confrom password" />
    
    <button v-on:click="signUp">Sing up</button>
    <p>
      <router-link to="./login">Login</router-link>
    </p>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: "SignUp",
  data(){
    return{
        name:'',
        email:'',
        password:'',
        password_confirmation:''
    }
  },
  methods:{
    async signUp()
    {
        console.warn("signUp",this.name,this.email,this.password)
        let result=await axios.post("http://127.0.0.1:8000/api/register",{
            name:this.name,
            email:this.email,
            password:this.password,
            password_confirmation:this.password_confirmation
        });
        console.warn(result);
        if(result.status==201)
        {
            alert("sigin up done")
        }
        localStorage.setItem("user-info",JSON.stringify(result.data))
        this.$router.push({name:"Home"})
    }
  },
  mounted() {
  let user = localStorage.getItem('user-nfo');
  if (user) {
    this.$router.push({ name: "Home" });
  }
},

};
</script>

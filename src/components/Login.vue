<template>
  <img class="logo" src="../assets/FirstOfferWeb.png" />
  <h3>Login</h3>
  <div class="register">
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter password" />
    <button v-on:click="Login">Login</button>
    <p>
      <router-link to="/sign-up">Sign Up</router-link>
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LoginUser",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async Login()
    {
        console.warn("signUp",this.name,this.email,this.password)
        let result=await axios.post("http://127.0.0.1:8000/api/login",{
            email:this.email,
            password:this.password,
        });
        console.warn(result);
        if(result.status==200)
        {
            alert("login done")
        }
        localStorage.setItem("user-info",JSON.stringify(result.data));
        localStorage.setItem("tokan",JSON.stringify(result.data.token));
        this.$router.push({name:"Home"})
    }
  },
  mounted()
  {
    let user = localStorage.getItem('user-info');
    if(user)
    {
      this.$router.push({name:"Home"})
    }
  },
};
</script>
<template>
  <div class="nav">
    <router-link to="/Home">Home</router-link>
    <router-link to="/school">Manage School</router-link>
    <router-link to="/program">Manage Program</router-link>
    <router-link to="/Demo">demo icon</router-link>

    <a v-on:click="logout" href="Home">Logout</a>
  </div>
</template>
<script>
export default {
  name: "HeaderComponents",
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "Login" });
    },
  },
};
</script>
<style>
.nav {
  background-color: #333;
  overflow: hidden;
}
.nav a {
  float: left;
  text-align: center;
  padding: 16px 18px;
  text-decoration: none;
  font-size: 16px;
  color: white;
  margin: 4px 5px;
}
.nav a:hover {
  background-color: #ddd;
  color: #222;
}
</style>
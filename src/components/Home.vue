<template>
  <!-- Importing a header component to use across every page. -->
    <Hearder />
    <div>
      <h1 v-if="name">Hello {{ name }}, Welcome to Home Page</h1>
      <h1 v-else>Please sign in to view this page.</h1>
    </div>
    <table>
      <tr v-for="item in schoolMaster" :key="item.id">
        <td>{{ item.SchoolName }}</td>
      </tr>
    </table>
  </template>
  <script>
  import Hearder from "./Header.vue";
  export default {
    name: "TheHome",
    components: {
      Hearder
    },
    mounted() {
      let user = localStorage.getItem("user-info");
      if (!user) {
       // Redirect to the SignUp page or handle not signed in user logic here
        this.$router.push({ name: "SignUp" });
      }
    },
  };
  </script>
  
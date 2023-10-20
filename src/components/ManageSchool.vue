<template>
  <Hearder />
  <p class="new">
    <router-link to="./AddSchool">Add New School</router-link>
  </p>
  <table class="my-class">
    <tr class="t-header">
      
      <th>Id</th>
      <th>School Name</th>
      <th>Update</th>
      <th>Delete</th>
    </tr>
    <tr v-for="item in schoolMaster" :key="item.SchoolId">
      <td>{{ item.SchoolId }}</td>
      <td>{{ item.SchoolName }}</td>
      <td>
        <router-link :to="'/UpdateSchool/' + item.SchoolId">Update</router-link>
      </td>
      <td>
        <button class="delete" v-on:click="deleteSchool(item.SchoolId)">
          Delete
        </button>
      </td>
    </tr>
  </table>
</template>

<script>
import Hearder from "./Header.vue";
import axios from "axios";
export default {
  name: "ManageSchool",
  data() {
    return {
      schoolMaster: [],
    };
  },
  methods: {
    async deleteSchool(id) {

      const result = await axios.delete("http://127.0.0.1:8000/api/school/"+id);

      if (result.status == 200) {
        this.lodedata()
      }
      //const result=await axios.delete(this.id);
    },
    async lodedata() {
      let user = localStorage.getItem("user-info");
      if (!user) {
        // Redirect to the SignUp page or handle not signed in user logic here
        this.$router.push({ name: "SignUp" });
      }
      let result = await axios.get("http://127.0.0.1:8000/api/school");
      this.schoolMaster = result.data;
    }
  },
  components: {
    Hearder,
  },
  mounted() {
    this.lodedata()
  }
};
</script>


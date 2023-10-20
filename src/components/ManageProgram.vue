<template>
    <Hearder />
    <p class="new">
      <router-link to="./AddProgram">Add New School</router-link>
    </p>
    <table class="my-class">
      <tr>
        <th>Id</th>
        <th>School ID</th>
        <th>Program Name</th>
        <th>Program Type</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
      <tr v-for="item in ProgramMaster" :key="item.programId">
        <td>{{ item.programId }}</td>
        <td>{{ item.SchoolName }}</td>
        <td>{{ item.programName }}</td>
        <td>{{ item.programType }}</td>
        <td>
          <router-link :to="'/UpdateProgram/' + item.programId">Update</router-link>
        </td>
        <td>
          <button class="delete" v-on:click="deleteProgram(item.programId)">
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
    name: "ManageProgram",
    data() {
      return {
        ProgramMaster: [],
      };
    },
    methods: {
      async deleteProgram(id) {
  
        const result = await axios.delete("http://127.0.0.1:8000/api/program/"+id);
        
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
        let result = await axios.get("http://127.0.0.1:8000/api/program");
        this.ProgramMaster = result.data;
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
  
  
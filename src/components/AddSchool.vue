<template>
  <div v-if="isRecordInserted" class="popup-message">
    Record Inserted Successfully!
  </div>

  <!-- Importing a header component to use across every page. -->
  <Hearder />
  <h1>Add new School</h1>
  <form class="add">
    <input
      type="text"
      v-model="SchoolName"
      name="SchoolName"
      placeholder="enter school name"
    />
    <button type="button" v-on:click="addSchool">Add</button>
  </form>
</template>
   <script>
import Hearder from "./Header.vue";
import axios from "axios";
export default {
  name: "TheHome",
  data() {
    return {
      SchoolName: "",
      isRecordInserted: false,
    };
  },
  components: {
    Hearder,
  },
  methods: {
    async addSchool() {
      let result = await axios.post("http://127.0.0.1:8000/api/school", {
        SchoolName: this.SchoolName,
      });
      if (result.status == 201) {
        // Assuming the record was successfully inserted
        this.isRecordInserted = true;        
        // Optionally, you can also set a timer to hide the pop-up message after a few seconds
        setTimeout(() => {
          this.isRecordInserted = false;
        }, 2000); // Hide after 3 seconds (adjust as needed)
      } else {
        alert("have any error");
      }
      this.$router.push({name:"ManageSchool"})

      }
    },
};
</script>
       
    
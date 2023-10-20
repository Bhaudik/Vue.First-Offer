<template>
  <div v-if="isRecordInserted" class="popup-message">
    Record Inserted Successfully!
  </div>

  <!-- Importing a header component to use across every page. -->
  <Hearder />
  <h1>Add new Program</h1>
  <form class="add">
    <input
      type="text"
      v-model="programMaster.programName"
      name="SchoolName"
      placeholder="enter school name"
    />
    <select
    class="my-select"
    name="Select School"
    v-model="programMaster.SchoolName"
      type="select"
      style="width: 300px; height: 40px; border: 1px solid skyblue"
      
    >
      <!-- <tr v-for="item in ProgramMaster" :key="item.programId"></tr> -->
      <option v-for="item in schoolMaster" :key="item.SchoolId">
        {{ item.SchoolName }}
      </option>
    </select>
    <select
    name="Types"
    v-model="programMaster.programType"
      type="select"
      style="width: 300px; height: 40px; border: 1px solid skyblue"
    >
      <!-- <tr v-for="item in ProgramMaster" :key="item.programId"></tr> -->
      <option value="" selected>-- Select Type Of Study --</option>
      <option>Bechloer</option>
      <option>Master</option>
    </select>
    <button type="button" v-on:click="AddProgram">Add</button>
  </form>
</template>
<script>
import Hearder from "./Header.vue";
import axios from "axios";
export default {
  name: "AddProgram",
  data() {
    return {
      programMaster: {
        programName: "",
        SchoolName: "",
        programType: "",
      },
      schoolMaster: [],
      isRecordInserted: false,
    };
  },
  components: {
    Hearder,
  },
  methods: {
    async AddProgram() {
      let result = await axios.post("http://127.0.0.1:8000/api/program", {
        programName: this.programMaster.programName,
        SchoolName: this.programMaster.SchoolName,
        programType: this.programMaster.programType,
        });

      if (result.status == 201) {
        // Assuming the record was successfully inserted
        this.isRecordInserted = true;

        // Optionally, you can also set a timer to hide the pop-up message after a few seconds
        setTimeout(() => {
          this.isRecordInserted = false;
        }, 3000); // Hide after 3 seconds (adjust as needed)
        this.$router.push({name:"ManageProgram"})
      } else {
        alert("have any error");
      }
    },
  },
  async mounted() {
    let result = await axios.get("http://127.0.0.1:8000/api/school/");
    //   this.Schoolname = result.data.SchoolMaster; //
    this.schoolMaster = result.data;
    
  },
};
</script>
         
      
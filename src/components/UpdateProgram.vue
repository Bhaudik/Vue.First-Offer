<template>
  <div v-if="isRecordUpdeted" class="popup-message">
    Record Updated Successfully!
  </div>

  <!-- Importing a header component to use across every page. -->
  <Hearder />
  <h1>Update Program</h1>
  <form class="add">
    <input type="text" v-model="programMaster.programName" name="ProgramName"  placeholder="enter Program name"  />
    <select class="my-select" name="Select School" v-model="programMaster.SchoolName" type="select" style="width: 300px; height: 40px; border: 1px solid skyblue" required>
      <option v-for="item in schoolMaster" :key="item.SchoolId">
        {{ item.SchoolName }}
      </option>
    </select>
    <select
    name="Types"
    v-model="programMaster.programType"
      style="width: 300px; height: 40px; border: 1px solid skyblue"
    >
      <!-- <tr v-for="item in ProgramMaster" :key="item.programId"></tr> -->
      <option value="" selected>-- Select Type Of Study --</option>
      <option>Bechloer</option>
      <option>Master</option>
    </select>
    <button type="button" v-on:click="Update">Update Program</button>
  </form>
</template>
 <!-- script -->

<script>
import Hearder from "./Header.vue";
import axios from "axios";
export default {
  name: "UpdateProgram",
  data() {
    return {
      programMaster: {
        programName: "",
        SchoolName: "",
        programType: "",
      },
      schoolMaster: [],
      isRecordUpdeted: false,
    };
  },
  components: {
    Hearder,
  },
  methods: {
    async Update() {
      let result = await axios.put("http://127.0.0.1:8000/api/program/"+this.$route.params.id, {
        programName: this.programMaster.programName,
        SchoolName: this.programMaster.SchoolName,
        programType: this.programMaster.programType,
        });
        
        if (result.status == 200) {
        // Assuming the record was successfully inserted
        this.isRecordUpdeted = true;        
        // Optionally, you can also set a timer to hide the pop-up message after a few seconds
        setTimeout(() => {
          this.isRecordUpdeted = false;
        }, 3000); // Hide after 3 seconds (adjust as needed)
      } else {
        alert("have any error");
      }
      this.$router.push({name:"ManageSchool"})


    },
  },
  async mounted() {
    let result = await axios.get("http://127.0.0.1:8000/api/program/");
    //   this.Schoolname = result.data.SchoolMaster; //
    this.schoolMaster = result.data;

    let record=await axios.get("http://127.0.0.1:8000/api/program/"+this.$route.params.id)
    //console.warn(this.$route.params.id)
    console.warn(record.data)
    this.programMaster=record.data;
  
  },
};
</script>
        
    
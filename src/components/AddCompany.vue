<template>
  <div v-if="isRecordInserted" class="popup-message">
    Record Inserted Successfully!
  </div>

  <!-- Importing a header component to use across every page. -->
  <Hearder />
  <h1>Add New Company</h1>
  <form class="add">
    <input
      type="text"
      v-model="CompanyMaster.CompanyName"
      name="CompanyName"
      placeholder="enter Company Name"
    />
    <input
      type="text"
      v-model="CompanyMaster.CompanyLocation"
      name="CompanyLocation"
      placeholder="enter Company Location"
    />
    <input
      type="email"
      v-model="CompanyMaster.CompanyEmail"
      name="CompanyEmail"
      placeholder="enter Company Email"
    />
    <input
      type="number"
      v-model="CompanyMaster.CompanyPhone"
      name="CompanyPhone"
      placeholder="enter Company Phone"
      max="10"
      min="10"
    />
    <input
      type="link"
      v-model="CompanyMaster.CompanyWebsite"
      name="CompanyWebsite"
      placeholder="enter Company Website"
    />
    <!-- CompanyDescription -->
    <input
      type="text"
      v-model="CompanyMaster.CompanyDescription"
      name="IndustryType"
      placeholder="enter Industry Type"
    />
    
    <input
      type="text"
      v-model="CompanyMaster.IndustryType"
      name="IndustryType"
      placeholder="enter Industry Type"
    />
    <button type="button" v-on:click="addCompany">Add</button>
  </form>
</template>
     <script>
import Hearder from "./Header.vue";
import axios from "axios";
export default {
  name: "TheHome",
  data() {
    return {
      CompanyMaster: [
        "CompanyName",
        "CompanyLocation",
        "CompanyEmail",
        "CompanyPhone",
        "CompanyWebsite",
        "CompanyDescription",
        "IndustryType",
    ],
      isRecordInserted: false,
    };
  },
  components: {
    Hearder,
  },
  methods: {
    async addC() {
      let result = await axios.post("http://127.0.0.1:8000/api/company", {
        CompanyName: this.CompanyMaster.CompanyName,
        CompanyLocation: this.CompanyMaster.CompanyLocation,
        CompanyEmail: this.CompanyMaster.CompanyEmail,
        CompanyPhone: this.CompanyMaster.CompanyPhone,
        CompanyWebsite: this.CompanyMaster.CompanyWebsite,
        CompanyDescription: this.CompanyMaster.CompanyDescription,
        IndustryType: this.CompanyMaster.IndustryType,
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
      this.$router.push({ name: "ManageCompany" });
    },
  },
};
</script>
         
      
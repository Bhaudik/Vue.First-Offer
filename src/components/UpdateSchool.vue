<template>
  <div v-if="isRecordInserted" class="popup-message">
    Record Updated Successfully!
  </div>

  <!-- Importing a header component to use across every page. -->
  <Hearder />
  <h1>Update School</h1>
  <form class="add">
    <input
      type="text"
      v-model="SchoolMaster.SchoolName"
      name="SchoolName"
      placeholder="enter school name"
    />
    <button type="button" v-on:click="updateSchool">Update</button>
  </form>
</template>
<script>
import Hearder from "./Header.vue";
import axios from "axios";
export default {
  name: "UpdateSchool",
  data() {
    return {
      SchoolMaster:{
        SchoolName: "",
      },
      isRecordInserted: false,
    };
  },
  components: {
    Hearder,
  },
methods:{
  async updateSchool() {
      let result = await axios.put("http://127.0.0.1:8000/api/school/"+this.$route.params.id, {
        SchoolName: this.SchoolMaster.SchoolName,
      });
      if (result.status == 200) {
        // Assuming the record was successfully inserted
        this.isRecordInserted = true;        
        // Optionally, you can also set a timer to hide the pop-up message after a few seconds
        setTimeout(() => {
          this.isRecordInserted = false;
        }, 3000); // Hide after 3 seconds (adjust as needed)
      } else {
        alert("have any error");
      }
      this.$router.push({name:"ManageSchool"})
    },
},
  async mounted(){
    const result=await axios.get("http://127.0.0.1:8000/api/school/"+this.$route.params.id)
    //console.warn(this.$route.params.id)
    console.warn(result.data)
    this.SchoolMaster=result.data;
  }
};
</script>
       
    
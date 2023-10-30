<template>
  <Hearder />
  <p class="new">
    <router-link to="./AddCompany">Add New Company</router-link>
  </p>
  <div>
    <button v-on:click="generatePDF">Generate PDF</button>
  </div>
    <table class="my-class">
    <tr class="t-header">
      <th>Company Id</th>
      <th>Company Name</th>
      <th>Company Location</th>
      <th>Company Email</th>
      <th>Company Phon</th>
      <th>Company Webside</th>
      <!-- <th>Company Description</th> -->
      <th>Industry Type</th>
      <th>Status</th>
    </tr>
    <tr v-for="item in companyMaster" :key="item.CompanyId">
      <td>{{ item.CompanyId }}</td>
      <td>{{ item.CompanyName }}</td>
      <td>{{ item.CompanyLocation }}</td>
      <td>{{ item.CompanyEmail }}</td>
      <td>{{ item.CompanyPhone }}</td>
      <!-- <td style=" padding: 25px; overflow: hidden; width: 20px;">{{ item.CompanyDescription }}</td> -->
      <td>{{ item.CompanyWebsite }}</td>

      <td>{{ item.IndustryType }}</td>

      <td>
        <router-link :to="'/UpdateCompany/' + item.CompanyId"
          >Update</router-link
        >
      </td>
    </tr>
  </table>
</template>
  
<script>
import jsPDF from 'jspdf';
import XLSX from 'xlsx';
import 'jspdf-autotable';
import Hearder from "./Header.vue";
import axios from "axios";
export default {
  name: "ManageCompany",
  data() {
    return {
      companyMaster: [],
    };
  },
  methods: {
    async lodedata() {
      let user = localStorage.getItem("user-info");
      if (!user) {
        // Redirect to the SignUp page or handle not signed in user logic here
        this.$router.push({ name: "SignUp" });
      }
      let result = await axios.get("http://127.0.0.1:8000/api/company");
      this.companyMaster = result.data;
    },
    generatePDF() {
    const pdf = new jsPDF();

    // Define the columns and initialize the data array
    const columns = [
      'Company Id',
      'Company Name',
      'Company Location',
      'Company Email',
      'Company Phone',
      'Company Website',
      'Industry Type',
    ];
    const data = [];

    // Populate the data array with your table data
    this.companyMaster.forEach(item => {
      const rowData = [
        item.CompanyId,
        item.CompanyName,
        item.CompanyLocation,
        item.CompanyEmail,
        item.CompanyPhone,
        item.CompanyWebsite,
        item.IndustryType,
      ];
      data.push(rowData);
    });

    // Generate the table in the PDF
    pdf.autoTable({
      head: [columns],
      body: data,
    });

    // Save the PDF with a file name
    pdf.save('company-list.pdf');
  },
  generateExcel() {
      // Sample data
      const data = [
        ["Name", "Age"],
        ["John", 30],
        ["Alice", 25],
        ["Bob", 35]
      ];

      // Create a workbook and add a worksheet
      const ws = XLSX.utils.aoa_to_sheet(data);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

      // Generate a blob from the workbook
      const blob = XLSX.write(wb, { bookType: 'xlsx', type: 'blob' });

      // Save the blob as a file
      const fileName = "example.xlsx";
      const blobUrl = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = fileName;
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
  },
  },
  components: {
    Hearder,
  },
  mounted() {
    this.lodedata();
  },
};
</script>
  
  
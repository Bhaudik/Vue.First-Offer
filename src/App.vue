<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}

body{
  padding: 0;
  margin: 0;
}
.logo {
  width: 200px;
}
.register input , .add input ,.add select{
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid skyblue;
}
.my-select::part(listbox)
{
  padding: 10px;
    margin-top: 5px;
    border: 1px solid red;
    border-radius: 5px;
}
.register button ,.add button{
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  color: white;
  background-color: skyblue;
  cursor: pointer;
}
.login {
  margin-left: 80%;
  border: 2px solid;
  padding: 10px;
  border-radius: 10px;
  background-color: green;
  width: 10%;
}
.new{
border: 2px solid;
margin-top:5%;
padding: 10px;
border-radius: 10px;
background-color: green;
width: 30%;
}
.login a , .new a{
  color: white;
  text-decoration: none;
}

.index {
  width: 90%;
  margin-top: 10%;
}

.popup-message {
  position: fixed;
  top: 10px;
  right: 10px;
  background-color: #28a745; /* Green background color */
  color: #fff; /* White text color */
  padding: 10px;
  border-radius: 4px;
  z-index: 1000; /* Ensure it appears above other elements */
  animation: myfirst 3s 1;
}
@keyframes myfirst {
  25%  {top: 30px;}
 
}
/* Style the table */
table {
  border-collapse: collapse;
  width: 100%;
  margin:auto ;
}


/* Style the table cells (td) */
td {
  border: 1px solid #ddd;
  padding: 8px;
}
.delete{
  border: 1px solid black;
  border-radius: 20%;
  background-color: red;
}
.update{
  border: 1px solid black;
  border-radius: 20%;
  background-color: orange;
}
/* Add alternating row background colors */
tr:nth-child(even) {
  background-color: #f2f2f2;
}

/*th no header */
.t-header{
  background: black;
  text-align: center;
  padding: 12px;
  color:white;
}
.t-header:hover{
  background: black;
  text-align: center;
  padding: 12px;
  color:white;
}
/* Hover effect on table rows */
tr:hover {
  background-color: #ddd;
}

/* Style the table header row (optional) */
thead {
  background-color: #333;
  color: #fff;
}

/* Style the table footer row (optional) */
tfoot {
  background-color: #333;
  color: #fff;
}

</style>

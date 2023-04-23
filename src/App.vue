<template>
  <router-view />
</template>

<script>

export default {
  name: 'App',
}
</script>
<style>
#app {
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  margin: 0;
  padding: 0;
}
.logo {
  width: 100px;
}

.register input, .login input, .add input, .update input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-top: 5px;
  margin-bottom: 15px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid rgb(238, 238, 39);
}

.register button, .login button, .add button, .update button {
  background-color: rgb(236, 181, 29);
  border: 1px solid rgb(236, 181, 29);
  padding: 7px;
  border-radius: 4px;
  cursor: pointer;
  width: 320px;
}
.welcomeText{
  padding: 10px;
}
.errorMsg {
    color: red;
    font-size: smaller;
}
</style>

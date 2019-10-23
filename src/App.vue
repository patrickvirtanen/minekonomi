<template>
  <div id="app">
    <comp-header/>
    <compStartPage/>
  
  </div>
</template>

<script>
import compStartPage from "./components/startPage";
import compHeader from "./components/header_footer/header";

export default {
  name: "app",
  components: {
    compStartPage,
    compHeader
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

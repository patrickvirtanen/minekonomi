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
@import "./assets/style.css";
</style>

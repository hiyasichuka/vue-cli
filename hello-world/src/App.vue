<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <template>
      <like-header></like-header>
      <LikeNumber></LikeNumber>
    </template>
  </div>
</template>

<script>
// component ローカル登録
import HelloWorld from "./components/HelloWorld.vue";
import LikeHeader from "./components/LikeHeader.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    LikeHeader,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

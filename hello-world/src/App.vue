<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <template>
      <like-header></like-header>
      <h2>{{ number }}</h2>
      <LikeNumber v-bind:totalNumber="number"></LikeNumber>
      <LikeNumber :total-number="number"></LikeNumber>
    </template>
  </div>
</template>

<script>
// component ローカル登録
import HelloWorld from "./components/HelloWorld.vue";
import LikeHeader from "./components/LikeHeader.vue";

export default {
  name: "App",
  data() {
    return {
      number: 16,
    };
  },
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

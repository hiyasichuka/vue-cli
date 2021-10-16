<template>
  <div>
    <LikeHeader header-text="hello">
      <h2>Hi ,every one.</h2>
      <template v-slot:title>
        <h2>こんにちは</h2>
      </template>
      <h3>default slot</h3>
      <p>nice to meet you</p>
      <template v-slot:numb>
        <p>{{ number }}</p>
      </template>
    </LikeHeader>
    <LikeNumber :total-number="number" @my-click="number = $event"></LikeNumber>
    <LikeNumber :total-number="number" @my-click="incNum"></LikeNumber>
    <LikeNumber :total-number="number"></LikeNumber>
  </div>
</template>
<script>
import LikeHeader from "./components/LikeHeader.vue";

export default {
  data() {
    return {
      number: 14,
    };
  },
  components: {
    LikeHeader,
  },
  methods: {
    incNum(value) {
      this.number = value;
    },
  },
};
</script>

<style scoped>
div {
  border: 1px solid blue;
}
h1 {
  color: red;
}
</style>



<template>
  <div>
    <slot name="title" :user="user" text="text"> </slot>
    <slot></slot>
    <hr />
    <p>good number</p>
    <slot name="numb"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstName: "jack",
        lastName: "donald",
      },
    };
  },
};
</script>


<style scoped>
h1 {
  color: orange;
}
</style>
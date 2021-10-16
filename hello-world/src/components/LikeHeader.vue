<template>
  <div>
    <slot name="title"> </slot>
    <hr />
    <p>good number</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["headerText"],
};
</script>


<style scoped>
h1 {
  color: orange;
}
</style>
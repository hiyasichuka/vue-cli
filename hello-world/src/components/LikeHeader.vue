<template>
  <div>
    <slot name="title"> </slot>
    <slot></slot>
    <hr />
    <p>good number</p>
    <slot name="numb"></slot>
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
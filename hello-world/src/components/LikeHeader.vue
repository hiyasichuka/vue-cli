<template>
  <div>
    <slot>
      <h2>default title</h2>
    </slot>
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
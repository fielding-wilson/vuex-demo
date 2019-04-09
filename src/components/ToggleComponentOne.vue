<template>
  <div>
    <input
      type="radio"
      id="primary"
      name="toggle"
      value="true"
      v-model="toggleValue">
    <label for="primary">{{ primaryLabel }}</label>
    &nbsp;
    <input
      type="radio"
      id="secondary"
      name="toggle"
      value="false"
      v-model="toggleValue">
    <label for="secondary">{{ secondaryLabel }}</label>
    <br>
  </div>
</template>

<script>
export default {
  name: 'ToggleComponentOne',
  props: {
    toggleValue: {
      type: String,
      default: 'false',
    },
    primaryLabel: {
      type: String,
      default: '',
    },
    secondaryLabel: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>

</style>

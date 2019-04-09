<template>
  <div>
    <input
      type="radio"
      id="primary"
      name="toggle"
      value="true"
      v-model="mutableToggleValue">
    <label for="primary">{{ primaryLabel }}</label>
    &nbsp;
    <input
      type="radio"
      id="secondary"
      name="toggle"
      value="false"
      v-model="mutableToggleValue">
    <label for="secondary">{{ secondaryLabel }}</label>
    <br>
  </div>
</template>

<script>
export default {
  name: 'ToggleComponentTwo',
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
  computed: {
    mutableToggleValue: {
      get() {
        return this.toggleValue;
      },
      set(value) {
        this.$store.dispatch('set_toggleValue', value);
      },
    },
  },
};
</script>

<style scoped>

</style>

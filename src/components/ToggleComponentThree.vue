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
import { mapFields } from 'vuex-map-fields';

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
    ...mapFields({
      mutableToggleValue: 'toggleValue',
    }),
  },
};
</script>

<style scoped>

</style>

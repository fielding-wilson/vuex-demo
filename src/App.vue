<template>
  <div id="app">
    Isn't Vuex cool?
    <ToggleComponentOne
      :toggle-value.sync="toggleValue"
      primary-label="Yes"
      secondary-label="No" />
<!--    <ToggleComponentTwo-->
<!--      :toggle-value.sync="toggleValue"-->
<!--      primary-label="Yes"-->
<!--      secondary-label="No" />-->
<!--    <ToggleComponentThree-->
<!--      :toggle-value.sync="toggleValue"-->
<!--      primary-label="Yes"-->
<!--      secondary-label="No" />-->
    <div v-if="showYesText">
      Right on! Vuex Rocks.
    </div>
  </div>
</template>

<script>
import ToggleComponentOne from './components/ToggleComponentOne.vue';
import ToggleComponentTwo from './components/ToggleComponentTwo.vue';
import ToggleComponentThree from './components/ToggleComponentThree.vue';

export default {
  name: 'app',
  components: {
    ToggleComponentOne,
    ToggleComponentTwo,
    ToggleComponentThree,
  },
  computed: {
    toggleValue() {
      return this.$store.state.toggleValue;
    },
    showYesText() {
      return this.$store.state.toggleValue === 'true';
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 20px;
  color: #2c3e50;
  margin: 60px 20px 0 20px;
  max-width: 1280px;
}
</style>

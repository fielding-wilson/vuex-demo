import Vue from 'vue';
import Vuex from 'vuex';
import { getField, updateField } from 'vuex-map-fields';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    toggleValue: '',
  },
  getters: {
    toggleValue: state => state.toggleValue,
  },
  mutations: {
    SET_TOGGLEVALUE: (state, payload) => {
      state.toggleValue = payload;
    },
  },
  actions: {
    set_toggleValue: (context, payload) => {
      context.commit('SET_TOGGLEVALUE', payload);
    },
  },
});

// export default new Vuex.Store({
//   strict: true,
//   state: {
//     toggleValue: '',
//   },
//   getters: {
//     getField,
//   },
//   mutations: {
//     updateField,
//   },
// });

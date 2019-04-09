import Vue from 'vue';
import Vuex from 'vuex';

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

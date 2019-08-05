import {RIGHTLAYOUTANIME} from '../mutation-types';
import anime from 'animejs';

export default {
  namespaced: true,
  state: {
    data: null,
  },
  mutations: {
    [RIGHTLAYOUTANIME](state, {data}) {
      state.data = data;
    },
  },
  actions: {
    set({commit}, {data}) {
      commit(RIGHTLAYOUTANIME, {data});
    },
    layoutTransformByX({state}, {el, x}) { // eslint-disable-line
      anime({
        targets: el,
        translateX: x,
        easing: 'easeInOutQuad',
        duration: 500,
      });
    },
  },
  getters: {
    data(state) {
      return state.data;
    },
  },
};

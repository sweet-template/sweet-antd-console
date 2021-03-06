const menu = {
  state: {
    isCollapse: false,
    addRouters: null,
  },
  getters: {},
  mutations: {
    setCollapse(state) {
      state.isCollapse = !state.isCollapse;
    },
    SET_ROUTERS(state, routers) {
      state.addRouters = JSON.parse(JSON.stringify(routers));
    },
    // /**
    //  * 一级路由跳转函数
    //  * @param state
    //  * @param payload 跳转地址参数
    //  * @constructor
    //  */
    // GONEXTPAGEBYONEROUTE(state, payload) {
    //   router.push(payload);
    // },
    // /**
    //  * 二级路由跳转函数
    //  * @param state
    //  * @param payload 跳转地址参数
    //  */
    // GONEXTPAGEBYTWOROUTE(state, payload) {
    //   router.push(payload);
    // },
    // /**
    //  * 三级路由跳转函数
    //  * @param state
    //  * @param payload 跳转地址参数
    //  * @constructor
    //  */
    // GONEXTPAGEBYTHREEROUTE(state, payload) {
    //   router.push(payload);
    // },
  },
  actions: {
    openLefeMenuCollapse({commit}) {
      commit('setCollapse');
    },
    generateRoutes({commit}, payload) {
      commit('SET_ROUTERS', payload);
    },
  },
};
export default menu;

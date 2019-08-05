<template>
  <div class="sidebar-left">
    <a-layout-sider
      :trigger="null"
      collapsible
      v-model="isCollapse"
    >
      <div class="logo">CIC</div>
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="activeIndex">
        <template v-for="item in routes">
          <a-menu-item :key="item.path" v-if="item.path !== '/' && !item.children">
            <a-icon :type="item.component.meta.icon ? item.component.meta.icon:'bars'"/>
            <span>{{item.component.meta.title ? item.component.meta.title : item.path}}</span>
          </a-menu-item>
        </template>
      </a-menu>
    </a-layout-sider>
  </div>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    computed: {
      ...mapState({
        theme: state => state.setting.theme,
        routes: state => state.menu.addRouters,
        skin: state => state.setting.skin,
        isCollapse: state => state.menu.isCollapse,
      }),
    },
    data() {
      return {
        activeIndex: ['/dashboard'],
      };
    },
    watch: {
      $route: 'changePath',
    },
    methods: {
      changePath() {
        const curPath = this.$route.path;
        this.activeIndex = [curPath];
      },
    },
    mounted() {
      this.changePath();
    },
    filters: {
      themeConfig(type, theme) {
        const _type = {
          'bgColor': {
            'deep': '#545c64',
            'light': '#fff',
            'dark': '#000',
            'simple': '#f3f5f9',
          },
          'textColor': {
            'deep': '#fff',
            'light': '#303133',
            'dark': '#fff',
            'simple': '#8996a0',
          },
          'activeTextColor': {
            'deep': '#ffd04b',
            'light': '#303133',
            'dark': '#04BBA4',
            'simple': '#098dff',
          },
        };
        return _type[type][theme];
      },
    },
  };
</script>
<style lang="less">
  @import "_Sidebar.less";
</style>

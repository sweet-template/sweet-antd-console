<template>
  <div class="header-vertical">
    <a-menu mode="horizontal" :defaultSelectedKeys="defaultIndex" :selectedKeys="activeIndex"
            :style="{ lineHeight: '64px' }">
      <template v-for="item in routes">
        <a-menu-item :key="item.path" v-if="item.path !== '/' && !item.children" @click="goToNewPage(item.path)">
          <a-icon :type="item.component.meta.icon ? item.component.meta.icon:'bars'"/>
          <span>{{item.component.meta.title ? item.component.meta.title : item.path}}</span>
        </a-menu-item>
      </template>
    </a-menu>
  </div>
</template>

<script>
  import {mapActions, mapState} from 'vuex';
  import version from '../../../../package.json';

  export default {
    name: 'Header',
    data() {
      return {
        avatar: '', // 用户是否有头像
        version: version.version,
        defaultIndex: ['/dashboard'],
        activeIndex: [],
      };
    },
    computed: {
      ...mapState({
        routes: state => state.menu.addRouters,
      }),
    },
    watch: {
      $route: 'changePath',
    },
    mounted() {
      this.changePath();
    },
    methods: {
      ...mapActions(['setLanguageAction']),
      changePath() {
        const curPath = this.$route.path;
        this.activeIndex = [curPath];
      },
      changaanguageHandler(language) {
        this.$i18n.locale = language;
        this.setLanguageAction(language);
      },
      changeOptionsHandler(opt) {
        switch (opt) {
          case 'saf_hap':
            window.location.href = window.$paraContext.safcare;
            break;
          case 'exit':
            this.$toLogout();
            break;
          default:
            break;
        }
      },
      goToNewPage(path) {
        this.$router.push(path);
      },
    },
  };
</script>
<style lang="less">
  @import "_Header.less";
</style>

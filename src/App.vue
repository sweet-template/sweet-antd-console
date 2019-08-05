<template>
  <div id="app">
    <!-- Top layout -->
    <a-layout v-if="layout === 0">
      <SidebarTop/>
      <a-layout-content>
        <Main/>
      </a-layout-content>
      <!-- <a-layout-footer style="text-align: center">
         <Footer />
       </a-layout-footer>-->
    </a-layout>
    <!-- Left layout -->
    <a-layout v-else>
      <SidebarLeft/>
      <a-layout>
        <HeaderLeft/>
        <a-layout-content class="para-layout-content">
          <Main/>
        </a-layout-content>
      </a-layout>
    </a-layout>
    <Setting/>
  </div>
</template>

<script>
  import Setting from './components/layout/setting/Setting'; // 设置
  import HeaderLeft from './components/layout/header/HeaderHorizon'; // 垂直头部
  import SidebarLeft from './components/layout/sidebar/SidebarLeft'; // 左边菜单
  import SidebarTop from './components/layout/sidebar/SidebarTop'; // 左边菜单
  import Main from './components/layout/main/Main'; // 内容区域
  // import Footer from './components/layout/footer/Footer'; // 底部
  import {mapState} from 'vuex';

  export default {
    name: 'App',
    components: {
      Setting,
      HeaderLeft,
      SidebarLeft,
      SidebarTop,
      Main,
      // Footer,
    },
    computed: {
      ...mapState({
        layout: state => state.setting.layout,
        theme: state => state.setting.theme,
        skin: state => state.setting.skin,
        isCollapse: state => state.menu.isCollapse,
      }),
    },
  };
</script>
<style lang="less">
  .para-layout-content {
    margin: 24px 16px;
    padding: 24px;
    background: #ffffff;
    minHeight: 280px
  }

  .light-back {
    background-color: #ffffff;
    color: #303133;
  }

  .black-back {
    background-color: rgb(84, 92, 100);
    color: #ffffff;
  }

  .dark-back {
    background-color: #000;
    color: #ffffff;
  }

  .simple-back {
    background-color: #f3f5f9;
    color: #8996a0;
  }
</style>

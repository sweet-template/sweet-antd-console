<template>
  <div class="sidebar-top">
    <a-layout-header class="header">
      <div class="logo">
        <img src="../../../assets/logo.png" alt="">
        <span class="title">Paraview</span>
        <span class="line"></span>
      </div>
      <div class="menu">
        <HeaderTop/>
      </div>
      <div class="header-top-right-icon">
        <span class="line"></span>
        <span class="help">
          <a-icon type="question-circle" />
        </span>
        <span class="logout">
          <a-icon type="logout" />
        </span>
      </div>
      <div class="header-top-right-user">
        <img src="../../../assets/logo.png" alt="">
        <a-dropdown :trigger="['click']">
          <span class="ant-dropdown-link" href="#">
            Sysadmin <a-icon type="down" />
          </span>
          <a-menu slot="overlay">
            <a-menu-item>
              <span>其他</span>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
      <div class="header-top-right-selfcare">
        <a-button type="primary">
          自助服务
          <a-icon type="arrow-right" />
        </a-button>
      </div>
    </a-layout-header>
  </div>
</template>

<script>
  import HeaderTop from '@/components/layout/header/HeaderVertical'; // 水平头部

  export default {
    components: {
      HeaderTop,
    },
  };
</script>
<style lang="less">
  @import "_Sidebar";
</style>

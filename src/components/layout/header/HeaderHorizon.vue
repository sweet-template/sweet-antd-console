<template>
  <div class="header-horizon">
    <a-layout-header style="background: #fff; padding: 0">
      <a-icon
        class="trigger"
        :type="$store.state.menu.isCollapse ? 'menu-unfold' : 'menu-fold'"
        @click="changaeftMenuStatus"
      />
    </a-layout-header>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';
  import version from '../../../../package.json';

  export default {
    name: 'Header',
    data() {
      return {
        avatar: '', // 用户是否有头像,
        leftOrRight: true,
        version: version.version,
      };
    },
    methods: {
      ...mapActions(['openLefeMenuCollapse', 'setLanguageAction']),
      changaeftMenuStatus() {
        this.leftOrRight = !this.leftOrRight;
        this.openLefeMenuCollapse({});
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
      // openFormDesign() {
      //   // window.open("/form");
      //   window.open("/formDesign/index.html#key=form29182e836a-USER-console&basic=true");
      // },
    },
  };
</script>
<style lang="less">
  @import "_Header.less";
  @import "../../../styles/themes/mixin.less";
</style>

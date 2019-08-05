<template>
  <div>
    <div class="para-setting">
      <div class="para-left-btn" @click="setSettingHandler">
        <a-icon type="setting"></a-icon>
      </div>
      <div class="para-right-content">
        <h4>{{$t('setting.style.name')}}</h4>
        <a-row :gutter="10">
          <a-radio-group
            v-model="resource.radio"
            size="small"
            style="margin: 0 auto;display: block;text-align: center"
            @change="changeThemeHandler"
          >
            <a-col :span="12">
              <a-row>
                <img src="https://gw.alipayobjects.com/zos/rmsportal/LCkqqYNmvBEbokSDscrm.svg" alt="">
              </a-row>
              <a-row>
                <a-radio border label="deep" :value="1">{{$t('setting.style.deep')}}</a-radio>
              </a-row>
            </a-col>
            <a-col :span="12">
              <a-row>
                <img src="https://gw.alipayobjects.com/zos/rmsportal/jpRkZQMyYRryryPNtyIC.svg" alt="">
              </a-row>
              <a-row>
                <a-radio border label="light" :value="2">{{$t('setting.style.light')}}</a-radio>
              </a-row>
            </a-col>
            <a-col :span="12">
              <a-row>
                <img src="https://gw.alipayobjects.com/zos/rmsportal/LCkqqYNmvBEbokSDscrm.svg" alt="">
              </a-row>
              <a-row>
                <a-radio border label="dark" :value="3">{{$t('setting.style.dark')}}</a-radio>
              </a-row>
            </a-col>
            <a-col :span="12">
              <a-row>
                <img src="https://gw.alipayobjects.com/zos/rmsportal/jpRkZQMyYRryryPNtyIC.svg" alt="">
              </a-row>
              <a-row>
                <a-radio border label="simple" :value="4">{{$t('setting.style.simple')}}</a-radio>
              </a-row>
            </a-col>
          </a-radio-group>
        </a-row>
        <a-divider></a-divider>
        <h4>{{$t('setting.navigator.name')}}</h4>
        <a-row :gutter="10">
          <a-radio-group
            v-model="resource.layouts"
            size="small"
            style="margin: 0 auto;display: block;text-align: center"
            @change="changeLayoutHandler"
          >
            <a-col :span="12">
              <a-row>
                <img src="https://gw.alipayobjects.com/zos/rmsportal/JopDzEhOqwOjeNTXkoje.svg">
              </a-row>
              <a-row>
                <a-radio border label="top" :value="0">{{$t('setting.navigator.top')}}</a-radio>
              </a-row>
            </a-col>
            <a-col :span="12">
              <a-row>
                <img src="https://gw.alipayobjects.com/zos/rmsportal/KDNDBbriJhLwuqMoxcAr.svg">
              </a-row>
              <a-row>
                <a-radio border label="left" :value="1">{{$t('setting.navigator.left')}}</a-radio>
              </a-row>
            </a-col>
          </a-radio-group>
        </a-row>
      </div>
    </div>
    <!-- div click -->
    <div class="para-div-click" v-show="settingShow"></div>
  </div>
</template>

<script>
  import {mapActions, mapState} from 'vuex';

  export default {
    name: 'Setting',
    computed: {
      ...mapState({
        layout: state => state.setting.layout,
        header: state => state.setting.header,
        theme: state => state.setting.theme,
        skin: state => state.setting.skin,
      }),
      skins() {
        const skins = [];
        this.$t('setting.skin.kind')
          .map(v => skins.push(v));
        return skins;
      },
    },
    data() {
      return {
        settingShow: false,
        resource: {
          radio: '',
          color: '#f60',
          layouts: '',
          header: '',
          theme: ['#409EFF', '#ed4014', 'deepskyblue'],
          skin: '',
        },
      };
    },
    methods: {
      ...mapActions(['setColorAction', 'setLayoutAction', 'setHeaderAction', 'settThemeAction', 'setSkinAction']),
      init() {
        if (this.layout) {
          this.resource.layouts = this.layout;
          this.resource.header = this.header;
          this.resource.radio = this.theme;
          this.resource.skin = this.skin;
        }
      },
      setSettingHandler() {
        this.settingShow = !this.settingShow;
        if (this.settingShow) {
          this.$store.dispatch('animation/layoutTransformByX', {
            el: '.para-setting',
            x: -301,
          });
          this.$nextTick(() => {
            $('.para-div-click')
              .on('click', () => {
                this.$store.dispatch('animation/layoutTransformByX', {
                  el: '.para-setting',
                  x: 0,
                });
                this.settingShow = false;
                setTimeout(() => {
                  $('.para-setting')
                    .css({'z-index': '201'});
                }, 600);
              });
            $('.para-setting')
              .css({'z-index': '203'});
          });
        } else {
          this.$store.dispatch('animation/layoutTransformByX', {
            el: '.para-setting',
            x: 0,
          });
          setTimeout(() => {
            $('.para-setting')
              .css({'z-index': '201'});
          }, 600);
        }
      },
      changeThemeHandler(theme) {
        let _theme = '';
        if (theme === 'deep') {
          _theme = 'theme1';
        } else if (theme === 'light') {
          _theme = 'theme2';
        } else if (theme === 'dark') {
          _theme = 'themedark';
        } else if (theme === 'simple') {
          _theme = 'themesimple';
        } else {
          _theme = 'theme';
        }
        window.document.documentElement.setAttribute('data-theme', _theme);
        this.settThemeAction(theme);
      },
      changeColorHandler(theme) {
        const color = this.resource.theme.findIndex(th => th === theme) === 0 ? 'theme1' : this.resource.theme.findIndex(th => th === theme) === 1 ? 'theme2' : 'theme3';
        this.setColorAction(color);
        this.$message({
          message: `颜色更换为:${color}成功`,
          type: 'success',
        });
      },
      changeLayoutHandler(e) {
        const value = e.target.value;
        this.setLayoutAction(value);
        this.$router.go(0);
      },
    },
    mounted() {
      this.init();
    },
  };
</script>

<style lang="less">
  @import "_Setting.less";
</style>

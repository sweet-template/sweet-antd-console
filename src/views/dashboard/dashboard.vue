<template>
    <div class="dashboard">
        dashboard
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'dashboard', // 主页
        meta: {
            icon: 'desktop',
            title: '控制台'
        },
        components: {}
    };
</script>
<style lang="less">
    @import "_dashboard.less";
</style>

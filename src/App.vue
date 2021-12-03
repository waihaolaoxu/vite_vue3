<script setup>
import HelloWorld from './components/HelloWorld.vue'
// https://v3.cn.vuejs.org/images/options-api.png
</script>

<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
    <router-view></router-view>
</template>

<style lang="scss">
@import "@/assets/css/vant-theme.css";
@import "@/assets/css/reset.css";
@import "@/assets/css/public.scss";
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    line-height: 2;
}
</style>

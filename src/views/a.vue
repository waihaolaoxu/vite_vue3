

<script setup>

</script>

<template>
    <h1>Vue3</h1>
    <ul>
        <li><router-link to="/c">组合式 API</router-link></li>
        <li><router-link to="/teleport">Teleport</router-link></li>
        <li>片段</li>
        <li>setup 语法糖</li>
    </ul>
    <van-button type="primary">被assets/css/vant-theme重置过的样式</van-button>
</template>

<style lang="scss" scoped>
//使用全局scss变量
li {
    color: $color-logo
}
</style>

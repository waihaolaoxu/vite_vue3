
<template>
    <p>count: {{ count }}</p>
    <p>倍数： {{ multiple }}</p>
    <div>
        <button @click="increase()">加一</button>
        <button @click="decrease()">减一</button>
    </div>
</template>

<script setup>
import useCount from "../hooks/useCount";
const { count, multiple, increase, decrease } = useCount(10)
</script>

<style>
</style>
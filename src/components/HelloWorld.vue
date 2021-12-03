

<script setup>
import { ref, computed, reactive, onMounted } from "vue";
import { useStore } from 'vuex'
import { modelGetDepartmentList } from "@/models/api"
const store = useStore()

// 接收props
defineProps({
    msg: String,
});

// 定义单个值
const count = ref(0);

// 定义多个值
const obj = reactive({
    a: 1,
    b: 2
})

// vuex 数据读取
const count2 = computed(()=>{
    return store.getters.count
})

// 接口调用
function aa(){
    modelGetDepartmentList()
}
onMounted(()=>{
    aa()
    setTimeout(()=>{
        obj.b = 10
    },1000)
})


</script>

<template>
    <h1 @click="aa">{{ msg }}</h1>
    <ul>
        <li>组合式 API</li>
        <li>Teleport</li>
        <li>片段</li>
        <li>setup 语法糖</li>
    </ul>
    
    <button type="button" @click="count++" style="margin-top:20px;">count is: {{ count }}</button>
    <br>
    <van-button type="primary" @click="store.commit('increment')">vuex: {{count2}}</van-button>
    <br>
    {{obj}}
</template>

<style scoped>
a {
    color: #42b983;
}
</style>

<template>
    <div>
        <p>使用 Vue2.x 的小伙伴都熟悉，Vue2.x 中所有数据都是定义在data中，方法定义在methods中的，并且使用this来调用对应的数据和方法。在 Vue3.x 中就可以不这么玩了， 先说一下 Vue2.x 版本这么写有什么缺陷，所以才会进行升级变更。</p>

        <div>功能需要分别在 data、methods、computed 中进行操作，当我们增加一个需求，就会出现下图的情况：</div>
        <img src="../assets/11.gif" alt srcset />
        <img src="https://v3.cn.vuejs.org/images/options-api.png" alt srcset />
        <div>当我们业务复杂了就会大量出现上面的情况， 随着复杂度上升，就会出现这样一张图， 每个颜色的方块表示一个功能：</div>
        <img src="../assets/22.gif" alt srcset />
        <div>composition就是为了解决上面这个问题存在的，通过组合的方式，把零散在各个data，methods的代码，重新组合，一个功能的代码都放在一起维护，并且这些代码可以单独拆分成函数。</div>
        <img src="../assets/33.gif" alt srcset />
        <img src="../assets/44.gif" alt srcset />
        
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
div {
    max-width: 960px;
    margin: 0 auto;
}
</style>
<template lang="">
    <div class="w-175px h-auto py-3 bg-white rounded-md flex flex-col items-center justify-center">
          <!-- <router-link>可以设置hover效果，且实现不刷新页面也可跳转路由效果
            to属性设置跳转的路由路径，path属性设置路由别名，name属性设置路由名称 -->
              <router-link
              v-for="item in asideMenu"
              :key="item.text"
              :to="item.path"
              class="w-[90%] h-45px flex items-center text-gray-600 hover:text-blue-500 rounded-md"
              >
              <div v-html="item.svg" class="w-5 h-5 mx-2"></div>
              <span>{{ item.text }}</span>
              </router-link>
      </div>
</template>
<script setup>
const asideMenu = [
  {
    text: "首页",
  
},]
</script>
<style lang="">
  
</style>
<template lang="">
  <div class="flex w-full h-full">
    <!-- 左边部分开始 -->
    <div class="bg-green-300 w-[70%] mr-10">

      <!-- 导航栏开始 -->
      <div>
        <el-menu
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        router
        :default-active="path"
      >
        <el-menu-item index="/home/recommend">推荐</el-menu-item>
        <el-menu-item index="/home/latest">最新</el-menu-item>
        </el-menu>
      </div>
      <!-- 导航栏结束 -->

      <!-- 主要内容开始 -->
      <div class="mt-5">
        <router-view></router-view>
      </div>
      <!-- 主要内容结束 -->

    </div>
    <!-- 左边部分结束 -->

    <!-- 右边部分开始 -->
      <div class="bg-red-300 flex-1">
        11
      </div>
    <!-- 右边部分结束 -->
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const path = route.path


</script>
<style lang="">
  
</style>
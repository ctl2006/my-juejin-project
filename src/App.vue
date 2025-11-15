<template>
<div class="common-layout">

    <el-container>

      <!-- 头部开始 -->
      <el-header class="bg-red-50 flex h-60px">

        <!-- logo -->
        <div class=" flex items-center h-full mr-5">
          <img class="w-26 h-auto" src="//lf-web-assets.juejin.cn/obj/juejin-web/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg" alt="">
        </div>
        <!-- logo 结束 -->

        <!-- 导航开始 -->
         <!-- router：启用路由模式，菜单项点击时会进行路由跳转
        :default-active="router.currentRoute.value.path"：
        将当前路由路径绑定为默认激活的菜单项，实现菜单与路由的联动效果
        :ellipsis="false": 防止因宽度不足而导致菜单项被省略
        -->
         <el-menu
            class="el-menu-demo h-full"
            mode="horizontal"
            :ellipsis="false"
            router
            :default-active="path"
          >
            <el-menu-item 
            v-for="item in headerMenu" 
            :key="item.text" 
            :index="item.path"
            :to="`${item.path}?id=${item.id}`"
            >{{ item.text }}</el-menu-item>
        </el-menu>
        <!-- 导航结束 -->

        <!-- 搜索框 -->
         <div class="w-300px bg-yellow-50 flex items-center">
          <el-input v-model="data.input" style="width: 100%;" placeholder="探索稀土掘金" :suffix-icon="Search" class="pr-5" />
        </div>
        <!-- 搜索框结束 -->

        <!-- 创作者中心 -->
        <div class="flex items-center mr-5">
          <el-dropdown split-button type="primary" @click="handleClick">
            创作者中心
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>Action 1</el-dropdown-item>
                <el-dropdown-item>Action 2</el-dropdown-item>
                <el-dropdown-item>Action 3</el-dropdown-item>
                <el-dropdown-item divided>Action 4</el-dropdown-item>
                <el-dropdown-item>Action 5</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        <!-- 创作者中心结束 -->

        <!-- 会员 -->
         <div class="flex items-center w-auto mr-2">
          <el-button type="text" class="text-[#8A919f]">
          <img class="w-7 h-auto" src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ffd3e238ee7f46eab42bf88af17f5528~tplv-k3u1fbpfcp-image.image#?w=25&h=26&s=5968&e=svg&a=1&b=dacbbc" alt="">
            会员
          </el-button>
         </div>
        <!-- 会员结束 -->

        <!-- 登录/注册 -->
        <div class="flex items-center ml-4">
          <el-button type="primary" plain size="large">登录 | 注册</el-button>
        </div>
        <!-- 登录/注册结束 -->
        </el-header>
      <!-- 头部结束 -->

      <el-container>

        <!-- 侧边栏开始 -->
         <!-- 侧边栏的最小高度被设置为页面总高度减去60像素。 -->
        <el-aside class="bg-green-100 w-65 min-h-[calc(100vh-60px)] pt-5 pl-15">
          <AsideMenu />
        </el-aside>
        <!-- 侧边栏结束 -->

        <!-- 主体内容开始 -->

        <!-- 当 URL 变化时，Vue Router 会根据预定义的路由配置，
         将对应的组件渲染到 <router-view></router-view> 所在的位置。 -->
        <el-main class="bg-blue-50 h-full min-h-[calc(100vh-60px)]">
          <router-view></router-view>
        </el-main>
        <!-- 主体内容结束 -->

      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { Search } from "@element-plus/icons-vue";
import AsideMenu from "@/components/AsideMenu.vue";
import { id } from "element-plus/es/locales.mjs";
import { useRoute } from 'vue-router'
const route = useRoute()
const path = route.path


const data = reactive({
  input: "",
});

const headerMenu = [
  { id:1, text: '首页', path: '/' },
  { id:2, text: 'AI Coding', path: '/ai-coding' },
  { id:3, text: '沸点', path: '/hotpoint' },
  { id:4, text: '课程', path: '/courses' },
  { id:5, text: '直播', path: '/live' },
  { id:6, text: '活动', path: '/events' },
  { id:7, text: 'AI刷题', path: '/ai-practice' },
  { id:8, text: 'APP', path: '/app' },
  { text: '插件', path: '/plugins' }
];


</script>

<style scoped>
.el-menu-demo :deep(.el-menu-item) {
  @apply px-[13px];
}
.el-button--text:not(.is-disabled):hover {
    color: #8A919f;
}

/* 使按钮hover时的状态和未hover时一致 */
.el-button--primary.is-link, .el-button--primary.is-plain, .el-button--primary.is-text {
    --el-button-hover-text-color: var(--el-color-primary);
    --el-button-hover-bg-color: var(--el-color-primary-light-9);
    --el-button-hover-border-color: var(--el-color-primary-light-5);
    --el-button-active-text-color: var(--el-color-primary);
}
</style>

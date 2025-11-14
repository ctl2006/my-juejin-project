<template>
  <div style="width: 800px">
    404找不到页面
    <el-result
        icon="warning"
        title="Warning Tip"
        sub-title="Please follow the instructions"
      >
        <template #extra>
          <el-button type="primary" @click="$router.push('/')">返回主页</el-button>
        </template>
      </el-result>
    
  </div>
</template>
<script setup>





</script>
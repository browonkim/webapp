<script setup lang="ts">
import CommonAside from '@/views/common-layout/CommonAside.vue'
import CommonHeader from '@/views/common-layout/CommonHeader.vue'

</script>
<template>
<el-container>
  <el-header><CommonHeader/></el-header>
  <el-container>
    <CommonAside class="el-aside"/>
    <el-main><router-view/></el-main>
  </el-container>
</el-container>
</template>

<style scoped lang="sass">

</style>

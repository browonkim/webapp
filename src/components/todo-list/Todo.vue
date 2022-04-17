<template>
  <el-row :gutter="10">
    <el-col :span="8">
      <ul class="todo-list todo-list-container">
        <li class="infinite-list-item todo-list-header"> Todo </li>
        <li v-for="i in count" :key="i" class="infinite-list-item">{{ i }}</li>
      </ul>
    </el-col>
    <el-col :span="8">
      <ul v-infinite-scroll="load" class="todo-list todo-list-container">
        <li class="infinite-list-item todo-list-header"> Progressing </li>
        <li v-for="i in count" :key="i" class="infinite-list-item">{{ i }}</li>
      </ul>
    </el-col>
    <el-col :span="8"  >
      <ul v-infinite-scroll="load" class="todo-list todo-list-container">
        <li class="infinite-list-item todo-list-header"> Done </li>
        <li v-for="i in count" :key="i" class="infinite-list-item">{{ i }}</li>
      </ul>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const count = ref(0)
const load = () => {
  count.value += 10
}
</script>

<style lang="sass">

.todo-list
  height: 100vh
  padding: 0
  margin: 0
  list-style: none

.todo-list .infinite-list-item
  display: flex
  align-items: center
  justify-content: center
  height: 50px
  background: var(--el-color-primary-light-9)
  margin: 10px
  color: var(--el-color-primary)

.todo-list .infinite-list-item + .list-item
  margin-top: 10px

.todo-list-container
  overflow: auto

.todo-list-header
  font-weight: bolder

.todo-list-container::-webkit-scrollbar
  display: none
</style>

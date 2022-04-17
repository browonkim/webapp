<template>
  <el-row class="todo-list-container">
    <el-col class="todo-list todo" :span="7" @drop="onDrop($event, 'todo')" @dragover.prevent @dragenter.prevent>
      <p class="todo-list-header"> TODO </p>
      <el-card v-for="item in todo" :key="item.id" class="todo-element" draggable="true"
               @dragstart="startDrag($event, item.id)" v-html="item.content">
      </el-card>
    </el-col>
    <el-col class="todo-list progressing" :span="7" @drop="onDrop($event, 'progressing')" @dragover.prevent
            @dragenter.prevent>
      <p class="todo-list-header"> PROGRESSING </p>
      <el-card v-for="item in progressing" :key="item.id" class="todo-element" draggable="true"
               @dragstart="startDrag($event, item.id)" v-html="item.content">
      </el-card>
    </el-col>
    <el-col class="todo-list done" :span="7" @drop="onDrop($event, 'done')" @dragover.prevent @dragenter.prevent>
      <p class="todo-list-header"> DONE </p>
      <el-card v-for="item in done" :key="item.id" class="todo-element" draggable="true"
               @dragstart="startDrag($event, item.id)" v-html="item.content">
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue'
import { ElMessage } from 'element-plus'

const data = reactive({
  elements: [
    {
      id: 0,
      content: '이력서 넣기 <br> - 판교 회사',
      state: 'todo'
    },
    {
      id: 1,
      content: '가구 설치 <br> - 해피콜 전화 받기',
      state: 'done'
    }
  ]
})

interface element {
  id: number,
  content: string,
  state: string
}

const todo = computed(() => data.elements.filter(element => element.state === 'todo'))
const progressing = computed(() => data.elements.filter(element => element.state === 'progressing'))
const done = computed(() => data.elements.filter(element => element.state === 'done'))

const onDrop = ($event: DragEvent, state: string) => {
  const itemId = $event.dataTransfer?.getData('itemId')
  const item = data.elements.find(element => element.id.toString() === itemId)
  if (state === 'todo') {
    ElMessage({
      message: '할 일로 변경',
      type: 'info',
      showClose: true
    })
  } else if (state === 'progressing') {
    ElMessage({
      message: '진행 중으로 변경',
      type: 'warning',
      showClose: true
    })
  } else {
    ElMessage({
      message: '완료로 변경',
      type: 'success',
      showClose: true
    })
  }
  if (item) item.state = state
}

const startDrag = ($event: DragEvent, itemId: number) => {
  if ($event.dataTransfer === null) {
    return
  }
  $event.dataTransfer.dropEffect = 'move'
  $event.dataTransfer.effectAllowed = 'move'
  $event.dataTransfer.setData('itemId', itemId.toString())
}
</script>

<style scoped lang="sass">

.todo-list-container .todo-list
  display: flex
  align-items: center
  //justify-content: center
  height: 90vh
  background: var(--el-color-primary-light-9)
  margin: 10px
  color: var(--el-color-primary)

.todo-list
  padding-top: 10px
  flex-direction: column

.todo-element
  width: 25vw
  height: 10vh
  margin-bottom: 10px
  padding: 10px

p.todo-list-header
  font-size: 20px
  font-weight: bolder
  margin-top: 10px
  margin-bottom: 20px
</style>

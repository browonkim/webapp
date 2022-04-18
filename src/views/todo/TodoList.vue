<template>
  <el-dialog v-model="dialogVisible" :title="$t('insert new todo data')">
    <el-input v-model="inputTitle" clearable autofocus autosize class="input-title"
              :placeholder="$t('title')"></el-input>

    <el-input v-model="inputDetail" type="textarea" :rows="10" :placeholder="$t('detail')"
              class="input-detail" :autosize="{ minRows: 4, maxRows: 10}"></el-input>
    <div>
      <el-date-picker :placeholder="$t('date')" v-model="inputDate"
                      type="datetime"/>
      <el-button class="save" type="primary" @click="onSave" :disabled="!saveEnable">save</el-button>
    </div>
  </el-dialog>
  <el-row class="todo-list-container">
    <el-col class="todo-list todo" :span="7" @drop="onDrop($event, 'todo')" @dragover.prevent @dragenter.prevent>
      <p class="todo-list-header"> TODO </p>
      <el-card v-for="item in todo" :key="item.id" class="todo-element" draggable="true"
               @dragstart="startDrag($event, item.id)">
        <p> {{ item.title }} </p>
        <p> {{ item.detail }} </p>
      </el-card>
    </el-col>
    <el-col class="todo-list progressing" :span="7" @drop="onDrop($event, 'progressing')" @dragover.prevent
            @dragenter.prevent>
      <p class="todo-list-header"> PROGRESSING </p>
      <el-card v-for="item in progressing" :key="item.id" class="todo-element" draggable="true"
               @dragstart="startDrag($event, item.id)">
        <p> {{ item.title }} </p>
        <p> {{ item.detail }} </p>
      </el-card>
    </el-col>
    <el-col class="todo-list done" :span="7" @drop="onDrop($event, 'done')" @dragover.prevent @dragenter.prevent>
      <p class="todo-list-header"> DONE </p>
      <el-card v-for="item in done" :key="item.id" class="todo-element" draggable="true"
               @dragstart="startDrag($event, item.id)">
        <p> {{ item.title }} </p>
        <p> {{ item.detail }} </p>
      </el-card>
    </el-col>
    <el-col :span="1">
      <el-button class="todo-add-button" @click="dialogVisible = true" type="primary" plain> New </el-button>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'

const dialogVisible = ref(false)
const inputTitle = ref('')
const inputDetail = ref('')
const inputDate = ref('')
const data = reactive({
  elements: [
    {
      id: 0,
      detail: '판교 회사',
      title: '이력서 넣기',
      state: 'todo',
      date: '2022-04-18 09:00:00'
    },
    {
      id: 1,
      detail: '해피콜 전화 받기',
      title: '가구 설치',
      state: 'done',
      date: '2022-04-18 09:00:00'
    }
  ]
})

interface element {
  id: number,
  detail: string,
  state: string,
  title: string,
  date: string
}
const saveEnable = computed(() => (inputDetail.value !== '' || inputTitle.value !== ''))
const todo = computed(() => data.elements.filter(element => element.state === 'todo'))
const progressing = computed(() => data.elements.filter(element => element.state === 'progressing'))
const done = computed(() => data.elements.filter(element => element.state === 'done'))

let a = 2

const onDrop = ($event: DragEvent, state: string) => {
  const itemId = $event.dataTransfer?.getData('itemId')
  const item = data.elements.find(element => element.id.toString() === itemId)
  if (state === item?.state) {
    return
  }
  if (state === 'todo') {
    ElMessage({
      message: '할 일로 변경',
      type: 'info',
      showClose: true,
      duration: 1000
    })
  } else if (state === 'progressing') {
    ElMessage({
      message: '진행 중으로 변경',
      type: 'warning',
      showClose: true,
      duration: 1000
    })
  } else {
    ElMessage({
      message: '완료로 변경',
      type: 'success',
      showClose: true,
      duration: 1000
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

const onSave = () => {
  const element: element = {
    title: inputTitle.value,
    id: a++,
    detail: inputDetail.value,
    date: inputDate.value,
    state: 'todo'
  }
  data.elements.push(element)
  inputTitle.value = ''
  inputDetail.value = ''
  inputDate.value = ''
  dialogVisible.value = false
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

.todo-add-button
  margin-top: 10px

.input-detail
  margin-top: 10px
  margin-bottom: 10px

.save
  float: right
</style>

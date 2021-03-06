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
      <el-button class="todo-add-button" @click="dialogVisible = true" type="primary" plain> New</el-button>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { api } from '@/api/axios-configuration'
import { isSuccess } from '@/utils/httpUtils'

interface TodoItem {
  id: number | null,
  detail: string | null,
  state: string | null,
  title: string | null,
  date: string | null
}

interface ListOfTodoElement {
  todoItems: TodoItem[]
}

const dialogVisible = ref(false)
const inputTitle = ref('')
const inputDetail = ref('')
const inputDate = ref('')
const data = reactive<ListOfTodoElement>({
  todoItems: []
})

const saveEnable = computed(() => (inputDetail.value !== '' || inputTitle.value !== ''))
const todo = computed(() => data.todoItems?.filter((element: TodoItem) => element.state === 'todo'))
const progressing = computed(() => data.todoItems?.filter((element: TodoItem) => element.state === 'progressing'))
const done = computed(() => data.todoItems?.filter((element: TodoItem) => element.state === 'done'))

const onDrop = ($event: DragEvent, state: string) => {
  const itemId = $event.dataTransfer?.getData('itemId')
  const item: TodoItem | undefined = data.todoItems.find((element: TodoItem) => element?.id?.toString() === itemId)
  if (item === undefined) {
    return
  }
  if (state === item.state) {
    return
  }
  if (state === 'todo') {
    ElMessage({
      message: '할 일로 변경',
      type: 'info',
      showClose: true,
      duration: 700
    })
  } else if (state === 'progressing') {
    ElMessage({
      message: '진행 중으로 변경',
      type: 'warning',
      showClose: true,
      duration: 700
    })
  } else {
    ElMessage({
      message: '완료로 변경',
      type: 'success',
      showClose: true,
      duration: 700
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

const onSave = async () => {
  const todo: TodoItem = {
    title: inputTitle.value,
    id: null,
    detail: inputDetail.value,
    date: inputDate.value,
    state: 'todo'
  }
  const result = await insertTodo(todo)
  data.todoItems.push(result)
  inputTitle.value = ''
  inputDetail.value = ''
  inputDate.value = ''
  dialogVisible.value = false
}

async function retrieveTodoData () {
  try {
    const todoData = await api.get('/todo')
    data.todoItems = todoData.data
  } catch (e) {
    ElMessage({
      message: 'connection to API server has failed',
      duration: 1000,
      showClose: true
    })
  }
}

async function insertTodo (todo: TodoItem): Promise<TodoItem> {
  try {
    const result = await api.post('/todo', todo)
    isSuccess(result.status)
    return { ...result.data } as TodoItem
  } catch (e) {
    ElMessage({
      message: 'connection to API server has failed',
      duration: 1000,
      showClose: true
    })
    throw new Error('server error')
  }
}

onMounted(() => {
  try {
    retrieveTodoData()
  } catch (e) {
    data.todoItems = []
  }
})

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

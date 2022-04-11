<template>
  <el-dropdown @command="handleCommand" @click="handleClick">
    <el-button type="default" size="normal">
      {{ getSelectedDropdownText() }}<i class="editor-icon-arrow-down el-icon--right"></i>
    </el-button>
    <template #dropdown>
      <el-dropdown-menu class="heading-list">
        <el-dropdown-item v-for="order in 6" :command="order" :key="order" :class="getActiveClass()">
          Heading {{order}}
        </el-dropdown-item>
        <el-dropdown-item :command="7">
          normal
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">

import { Editor } from '@tiptap/vue-3'
import { defineProps, onMounted } from 'vue'
import { Level } from '@tiptap/extension-heading'

const props = defineProps({
  editor: {
    type: Editor,
    required: true
  }
})

const headingName = 'heading'

function getSelectedDropdownText () {
  const level = getLevel()
  return level ? `Heading ${level}` : 'normal'
}

function getLevel (): Level | null {
  for (let i = 1; i <= 6; i++) {
    if (props.editor?.isActive('heading', { level: i })) {
      return i as Level
    }
  }
  return null
}

function getActiveClass () {
  return { 'is-active': props.editor?.isActive('heading', { level: getLevel() }) }
}

function handleCommand (level: Level) {
  props.editor?.chain().focus().toggleHeading({ level }).run()
}

function handleClick () {
  const level = getLevel() ?? 3
  props.editor?.chain().focus().toggleHeading({ level }).run()
}

onMounted(() => {
  props.editor?.commands.setHeading({ level: 1 })
})
</script>

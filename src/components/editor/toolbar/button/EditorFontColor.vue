<template>
  <el-color-picker v-model="currentColor"/>
</template>

<script lang="ts" setup>
import { defineProps, ref, watchEffect } from 'vue'
import { Editor } from '@tiptap/vue-3'

const props = defineProps({
  editor: {
    type: Editor,
    required: true
  }
})

const currentColor = ref('#000000')

const getColor = () => {
  return props.editor?.getAttributes('textStyle').color ?? currentColor
}
watchEffect(() => props.editor?.chain().focus().setColor(currentColor.value).run())

</script>

<style scoped>

</style>

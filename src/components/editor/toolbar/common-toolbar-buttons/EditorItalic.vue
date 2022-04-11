<template>
  <TooltipIconButton icon="editor-icon-italic" tooltip-class="editor-tooltip__popper editor-tooltip-italic"
                     tooltip-content="기울임꼴" size="normal" type="default" class="icon-button"
                     label="I" :class="getActiveClass()" @click="handleClick" />
</template>

<script setup lang="ts">
import TooltipIconButton from '@/components/button/TooltipIconButton.vue'
import { defineProps } from 'vue'
import { Editor } from '@tiptap/vue-3'

const props = defineProps({
  editor: Editor
})

const getActiveClass = () => {
  return { 'is-active': props.editor?.isActive('italic') }
}

const handleClick = () => {
  props.editor?.chain().focus().toggleItalic().run()
}

</script>

<style scoped>

</style>

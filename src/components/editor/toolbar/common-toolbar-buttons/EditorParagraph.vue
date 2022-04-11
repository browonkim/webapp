<template>
  <TooltipIconButton icon="editor-icon-paragraph" tooltip-class="editor-tooltip__popper editor-tooltip-paragraph"
                     tooltip-content="paragraph" label="P"
                     size="normal" type="default" class="icon-button" :class="getActiveClass()" @click="handleClick"/>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { Editor } from '@tiptap/vue-3'
import TooltipIconButton from '@/components/button/TooltipIconButton.vue'

const props = defineProps({
  editor: Editor
})

const getActiveClass = () => {
  return { 'is-active': props.editor?.isActive('paragraph') }
}

const handleClick = () => {
  props.editor?.chain().focus().setParagraph().run()
}

</script>

<style scoped>

</style>

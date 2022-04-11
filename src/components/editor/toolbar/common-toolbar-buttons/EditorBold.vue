<template>
  <TooltipIconButton icon="editor-icon-bold" tooltip-class="editor-tooltip__popper editor-tooltip-bold"
                     tooltip-content="bold" size="normal" type="default" class="icon-button"
                     label="B" :class="getActiveClass()" @click="handleClick"/>
</template>

<script setup lang="ts">
import TooltipIconButton from '@/components/button/TooltipIconButton.vue'
import { Editor } from '@tiptap/vue-3'
import { defineProps } from 'vue'

const props = defineProps({
  editor: {
    type: Editor,
    required: true
  }
})

const getActiveClass = () => {
  return { 'is-active': props.editor?.isActive('bold') }
}

const handleClick = () => {
  props.editor?.chain().toggleBold().run()
}

</script>

<style scoped>

</style>

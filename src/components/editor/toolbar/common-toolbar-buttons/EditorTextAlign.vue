<template>
  <TooltipIconButton icon="editor-icon-align-left" tooltip-class="editor-tooltip__popper editor-tooltip-leftAlign"
                     :tooltip-content="getTooltipContent()" :label="getLabel()"
                     size="small" type="default" class="icon-button" :class="getActiveClass()" @click="handleClick()"/>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { Editor } from '@tiptap/vue-3'
import TooltipIconButton from '@/components/button/TooltipIconButton.vue'

const props = defineProps({
  editor: { type: Editor, default: null },
  direction: { type: String, required: true }
})

function getActiveClass () {
  return { 'is-active': props.editor?.isActive(props.direction) ?? false }
}

function getTooltipContent () {
  if (props.direction as string === 'left') {
    return '좌측정렬'
  }
  if (props.direction as string === 'right') {
    return '우측정렬'
  }
  return '중앙정렬'
}

function getLabel () {
  if (props.direction as string === 'left') {
    return '<'
  }
  if (props.direction as string === 'right') {
    return '>'
  }
  return '-'
}

function handleClick () {
  props.editor?.chain().focus().setTextAlign(props.direction as string).run()
}
</script>

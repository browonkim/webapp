<template>
  <TooltipIconButton icon="editor-icon-italic" tooltip-class="editor-tooltip__popper editor-tooltip-italic"
                     tooltip-content="기울임꼴" size="normal" type="default" class="icon-button"
                     :class="getActiveClass()" @click="handleClick">
    <IconBase width="15.5px" height="15.5px" view-box="0 0 30 30"><EditorItalicIcon/></IconBase>
  </TooltipIconButton>
</template>

<script setup lang="ts">
import TooltipIconButton from '@/components/common-button/TooltipIconButton.vue'
import { defineProps } from 'vue'
import { Editor } from '@tiptap/vue-3'
import IconBase from '@/components/common-icon/IconBase.vue'
import EditorItalicIcon from '@/components/editor/toolbar/icon/EditorItalicIcon.vue'

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

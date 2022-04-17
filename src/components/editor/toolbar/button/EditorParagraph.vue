<template>
  <TooltipIconButton icon="editor-icon-paragraph" tooltip-class="editor-tooltip__popper editor-tooltip-paragraph"
                     :tooltip-content="$t('paragraph')" label="P"
                     size="normal" type="default" class="icon-button" :class="getActiveClass()" @click="handleClick">
  <IconBase view-box="0 -2 35 35" width="15.5px" height="15.5px"><EditorParagraphIcon/></IconBase>
  </TooltipIconButton>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { Editor } from '@tiptap/vue-3'
import TooltipIconButton from '@/components/common-button/TooltipIconButton.vue'
import EditorParagraphIcon from '@/components/editor/toolbar/icon/EditorParagraphIcon.vue'
import IconBase from '@/components/common-icon/IconBase.vue'

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

<template>
  <TooltipIconButton icon="editor-icon-highlight" tooltip-class="editor-tooltip__popper editor-tooltip-highlight"
                     :tooltip-content="$t('highlight')"
                     type="default" class="icon-button" :class="getActiveClass()" @click="handleClick">
    <IconBase icon-name="bold" width="20px" height="20px" view-box="-2 -6 40 40"><EditorHighlightIcon/></IconBase>
  </TooltipIconButton>
</template>

<script setup lang="ts">
import TooltipIconButton from '@/components/common-button/TooltipIconButton.vue'
import { Editor } from '@tiptap/vue-3'
import { defineProps } from 'vue'
import IconBase from '@/components/common-icon/IconBase.vue'
import EditorHighlightIcon from '@/components/editor/toolbar/icon/EditorHighlightIcon.vue'

const props = defineProps({
  editor: {
    type: Editor,
    required: true
  }
})

const getActiveClass = () => {
  return { 'is-active': props.editor?.isActive('highlight') }
}

const handleClick = () => {
  props.editor?.chain().focus().toggleHighlight({ color: '#ffc078' }).run()
}

</script>

<style scoped>

</style>

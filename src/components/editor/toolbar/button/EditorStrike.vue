<template>
  <TooltipIconButton icon="editor-icon-strike" tooltip-class="editor-tooltip__popper editor-tooltip-strike"
                     :tooltip-content="$t('strike')" type="default" class="icon-button"
                     label="S" :class="getActiveClass" @click="handleClick">
    <IconBase width="15.5px" height="15.5px" view-box="0 0 30 30"><EditorStrikeIcon/></IconBase>
  </TooltipIconButton>
</template>

<script setup lang="ts">

import TooltipIconButton from '@/components/common-button/TooltipIconButton.vue'
import { defineProps } from 'vue'
import { Editor } from '@tiptap/vue-3'
import EditorStrikeIcon from '@/components/editor/toolbar/icon/EditorStrikeIcon.vue'
import IconBase from '@/components/common-icon/IconBase.vue'

const props = defineProps({
  editor: {
    type: Editor,
    required: true
  }
})

const getActiveClass = () => {
  return { 'is-active': props.editor?.isActive('strike') }
}

const handleClick = () => {
  props.editor?.chain().focus().toggleStrike().run()
}

</script>

<style scoped>

</style>

<template>
  <TooltipIconButton icon="editor-icon-bold" tooltip-class="editor-tooltip__popper editor-tooltip-bold"
                     :tooltip-content="$t('bold')" size="normal" type="default" class="icon-button"
                     :class="getActiveClass()" @click="handleClick">
    <IconBase view-box="0 0 30 30" height="15.5px" width="15.5px"><EditorBoldIcon/></IconBase>
  </TooltipIconButton>
</template>

<script setup lang="ts">
import TooltipIconButton from '@/components/common-button/TooltipIconButton.vue'
import { Editor } from '@tiptap/vue-3'
import { defineProps } from 'vue'
import EditorBoldIcon from '@/components/editor/toolbar/icon/EditorBoldIcon.vue'
import IconBase from '@/components/common-icon/IconBase.vue'

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

<style scoped lang="sass">

</style>

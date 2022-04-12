<template>
  <TooltipIconButton icon="editor-icon-strike" tooltip-class="editor-tooltip__popper editor-tooltip-strike"
                     :tooltip-content="$t('strike')" size="normal" type="default" class="icon-button"
                     label="S" :class="getActiveClass" @click="handleClick"/>
</template>

<script setup lang="ts">

import TooltipIconButton from '@/components/common-button/TooltipIconButton.vue'
import { defineProps } from 'vue'
import { Editor } from '@tiptap/vue-3'

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

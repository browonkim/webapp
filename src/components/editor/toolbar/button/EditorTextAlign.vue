<template>
  <TooltipIconButton icon="editor-icon-align-left" tooltip-class="editor-tooltip__popper editor-tooltip-leftAlign"
                     :tooltip-content="getTooltipContent()" :label="getLabel()"
                     size="normal" type="default" class="icon-button" :class="getActiveClass()" @click="handleClick"/>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { Editor } from '@tiptap/vue-3'
import TooltipIconButton from '@/components/common-button/TooltipIconButton.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({
  editor: { type: Editor, default: null },
  direction: { type: String, required: true }
})

function getActiveClass () {
  return { 'is-active': props.editor?.isActive({ textAlign: props.direction }) }
}

function getTooltipContent () {
  if (props.direction as string === 'left') {
    return t('left-align')
  }
  if (props.direction as string === 'right') {
    return t('right-align')
  }
  return t('center-align')
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

const handleClick = () => {
  props.editor?.chain().focus().setTextAlign(props.direction as string).run()
}
</script>

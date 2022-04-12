<template>
  <el-tooltip :popper-class="tooltipClass" effect="light" placement="top" :content="tooltipContent">
    <el-button :circle="circle" v-loading="loading" :type="type"
               :disabled="disabled" :size="size" @click="onClick($event)">
      <slot></slot>
    </el-button>
  </el-tooltip>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import { ElMessage } from 'element-plus'

const props = defineProps({
  type: {
    type: String,
    default: 'primary'
  },
  size: {
    type: String,
    default: 'small'
  },
  icon: {
    type: String,
    default: ''
  },
  circle: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  label: {
    type: String,
    default: ''
  },
  labelPosition: {
    type: String,
    default: 'left'
  },
  tooltipContent: {
    type: String,
    default: ''
  },
  tooltipClass: {
    type: String,
    default: 'tooltip-item-class'
  }
})
const emits = defineEmits(['click', 'switch'])

let innerLoading = false

function isLoading () {
  return props.loading || innerLoading
}

function switchOn () {
  innerLoading = true
}

function switchOff () {
  innerLoading = false
}

function onClick ($event: Event) {
  if (isLoading()) {
    return
  }
  ElMessage(props.icon)
  emits('click', $event)
  emits('switch', {
    $event,
    on: switchOn,
    off: switchOff
  })
}

function iconClass () {
  return isLoading() ? 'el-icon-loading' : props.icon
}

function getHtml () {
  if (props.labelPosition === 'right') {
    return `<span class="${iconClass()} ><i"> </i>${props.label}</span>`
  } else {
    return `<span class="${iconClass()}">${props.label}<i></i></span>`
  }
}
</script>

<style scoped>

</style>

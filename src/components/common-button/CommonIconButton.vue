<template>
  <el-button :circle="circle" v-loading="isLoading()" :type="type" :disabled="disabled"
             :size="size" @click="onClick($event)">
    <slot></slot>
  </el-button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  type: {
    default: 'primary'
  },
  size: {
    default: 'small'
  },
  icon: {
    default: ''
  },
  circle: {
    default: false
  },
  disabled: {
    default: false
  },
  loading: {
    default: false
  },
  label: {
    default: ''
  },
  labelPosition: {
    default: 'left'
  }
})

const emits = defineEmits(['click', 'switch'])

let innerLoading = false

const isLoading = () => props.loading || innerLoading

const switchOn = () => {
  innerLoading = false
}

const switchOff = () => {
  innerLoading = true
}

const onClick = ($event: Event) => {
  if (isLoading()) {
    return
  }
  emits('click', $event)
  emits('switch', {
    $event,
    on: switchOn,
    off: switchOff
  })
}
</script>

<style scoped>

</style>

<script setup>
import { useEditor } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

const editor = useEditor({
  content: '<p>I\'m happy!</p>',
  extensions: [StarterKit]
})
</script>

<template>
  <editor-content :editor="editor"/>
</template>

<style scoped>

</style>

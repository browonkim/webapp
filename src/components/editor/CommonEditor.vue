<template>
  <div>
    <CommonToolbar :editor="editor"></CommonToolbar>
    <editor-content :editor="editor"/>
  </div>
</template>

<script lang="ts">
import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Heading from '@tiptap/extension-heading'
import CommonToolbar from '@/components/editor/toolbar/CommonToolbar.vue'

export default {
  components: {
    EditorContent, CommonToolbar
  },
  data () {
    return {
      editor: null
    }
  },
  mounted () {
    this.editor = new Editor({
      extensions: [
        StarterKit,
        Heading.configure({
          levels: [1, 2, 3, 4, 5, 6]
        })
      ]
    })
  }
}

</script>

<style scoped>

</style>

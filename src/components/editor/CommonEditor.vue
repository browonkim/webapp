<template>
  <div v-if="editor">
    <CommonToolbar :editor="editor"></CommonToolbar>
    <editor-content :editor="editor" class="editor-content"></editor-content>
  </div>
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-3'
import CommonToolbar from '@/components/editor/toolbar/CommonToolbar.vue'
import { TextAlign } from '@tiptap/extension-text-align'
import { Highlight } from '@tiptap/extension-highlight'
import { Color } from '@tiptap/extension-color'
import { TextStyle } from '@tiptap/extension-text-style'
import StarterKit from '@tiptap/starter-kit'

export default {
  components: {
    CommonToolbar, EditorContent
  },
  data () {
    return {
      editor: null,
      content: ''
    }
  },
  mounted () {
    this.editor = new Editor({
      content: '',
      editorProps: {
        attributes: {
          class: ''
        }
      },
      extensions: [
        StarterKit,
        TextStyle,
        TextAlign.configure({
          alignments: ['left', 'center', 'right'],
          types: ['heading', 'paragraph']
        }),
        Highlight.configure({
          multicolor: true
        }),
        Color.configure({
          types: ['textStyle']
        })
      ],
      autofocus: true
    })
  },
  beforeUnmount () {
    this.editor.destroy()
  }
}

</script>

<style scoped lang="sass">

</style>

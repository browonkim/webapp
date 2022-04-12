<template>
  <div>
    <CommonToolbar :editor="editor"></CommonToolbar>
    <EditorContent :editor="editor" class="editor-content">
    </EditorContent>
  </div>
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import { Heading } from '@tiptap/extension-heading'
import CommonToolbar from '@/components/editor/toolbar/CommonToolbar.vue'
import { TextAlign } from '@tiptap/extension-text-align'
import { Highlight } from '@tiptap/extension-highlight'

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
      editorProps: {
        attributes: {
          class: ''
        }
      },
      extensions: [
        StarterKit,
        Heading.configure({
          levels: [1, 2, 3, 4, 5, 6]
        }),
        TextAlign.configure({
          alignments: ['left', 'center', 'right'],
          types: ['heading', 'paragraph']
        }),
        Highlight.configure({
          multicolor: true
        })
      ],
      autofocus: true
    })
  }
}

</script>

<style scoped lang="sass">

</style>

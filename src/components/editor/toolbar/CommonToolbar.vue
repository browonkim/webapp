<template>
  <div>
    <EditorHeading :editor="editor" id="heading" class="heading"></EditorHeading>
    <EditorParagraph :editor="editor" id="paragraph"></EditorParagraph>
    <EditorBold :editor="editor" id="bold"></EditorBold>
    <EditorItalic :editor="editor" id="italic"></EditorItalic>
    <EditorStrike :editor="editor" id="strike"></EditorStrike>
    <EditorHighlight :editor="editor" id="highlight"></EditorHighlight>
    <EditorFontColor :editor="editor" id="fontColor"></EditorFontColor>
    <span class="line"></span>
    <EditorTextAlign :editor="editor" id="textAlignLeft" direction="left"></EditorTextAlign>
    <EditorTextAlign :editor="editor" id="textAlignCenter" direction="center"></EditorTextAlign>
    <EditorTextAlign :editor="editor" id="textAlignRight" direction="right"></EditorTextAlign>
<!--    <span class="line"></span>-->
<!--    <EditorBulletList :editor="editor" id="bulletList"></EditorBulletList>-->
<!--    <EditorOrderedList :editor="editor" id="orderedList"></EditorOrderedList>-->
<!--    <EditorTaskList :editor="editor" id="taskList"></EditorTaskList>-->
<!--    <span class="line"></span>-->
<!--    <EditorHyperLink :editor="editor" id="hyperLink"></EditorHyperLink>-->
<!--    <EditorHorizontalRule :editor="editor" id="horizontalRule"></EditorHorizontalRule>-->
<!--    <EditorCodeLine :editor="editor" id="codeLine"></EditorCodeLine>-->
<!--    <EditorCodeBlock :editor="editor" id="codeBlock"></EditorCodeBlock>-->
  </div>
</template>

<script setup lang='ts'>
import EditorHeading from '@/components/editor/toolbar/button/EditorHeading.vue'
import EditorParagraph from '@/components/editor/toolbar/button/EditorParagraph.vue'
import EditorBold from '@/components/editor/toolbar/button/EditorBold.vue'
import EditorItalic from '@/components/editor/toolbar/button/EditorItalic.vue'
import EditorStrike from '@/components/editor/toolbar/button/EditorStrike.vue'
import EditorHighlight from '@/components/editor/toolbar/button/EditorHighlight.vue'
import EditorFontColor from '@/components/editor/toolbar/button/EditorFontColor.vue'
import EditorTextAlign from '@/components/editor/toolbar/button/EditorTextAlign.vue'
// import EditorBulletList from '@/components/editor/toolbar/button/EditorBulletList.vue'
// import EditorOrderedList from '@/components/editor/toolbar/button/EditorOrderedList.vue'
// import EditorTaskList from '@/components/editor/toolbar/button/EditorTaskList.vue'
// import EditorHyperLink from '@/components/editor/toolbar/button/EditorHyperLink.vue'
// import EditorHorizontalRule from '@/components/editor/toolbar/button/EditorHorizontalRule.vue'
// import EditorCodeLine from '@/components/editor/toolbar/button/EditorCodeLine.vue'
// import EditorCodeBlock from '@/components/editor/toolbar/button/EditorCodeBlock.vue'
import { defineProps } from 'vue'
import { Editor } from '@tiptap/vue-3'

const props = defineProps({
  editor: {
    type: Editor,
    required: true
  }
})
</script>

<style scoped>

</style>

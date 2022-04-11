<template>
  <div class="test">
  <router-view></router-view>
  <div class="element">
    <CommonEditor/>
  </div>
  </div>
</template>

<style lang="sass">

</style>

<script setup>
import CommonEditor from '@/components/editor/CommonEditor'
</script>

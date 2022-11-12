<template>
  <div class="index-page">
    <TagList />
  </div>
</template>

<script>
import TagList from '@/components/TagList/TagList'

export default {
  components: {
    TagList
  },

  name: 'Home'
}
</script>

<style lang="scss">
@import './HomePage';
</style>

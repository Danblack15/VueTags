<template>
  <section class="tag-list d-flex flex-column">
    <TagItem 
      v-for="tag in tags" 
      :key="tag.id" 
      :tag="tag"
      class="tag-list__item py-4"
    />
  </section>
</template>

<script>
import tagsList from '@/data/data.json'

export default {
  data() {
    return {
      tags: tagsList
    }
  },


  name: 'TagList'
}
</script>

<style lang="scss">
@import './TagList';
</style>
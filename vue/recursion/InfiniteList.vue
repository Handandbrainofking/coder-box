<template>
  <div class="list">
    <list-item v-for="(v, i) in items" :key="i" :item="v" />
  </div>
</template>
<script>
import ListItem from './ListItem'
export default {
  components: { ListItem },
  props: {
    items: {
      type: Array,
    },
  },
}
</script>
<style scoped></style>

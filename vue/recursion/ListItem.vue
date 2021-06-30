<template>
  <ul>
    <li>
      {{ item.name }}
      <list-item v-for="(v, i) in item.children" :item="v" :key="i"></list-item>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'list-item',
  props: ['item'],
}
</script>

<template>
  <div>
    <infinite-list :items="items"></infinite-list>
  </div>
</template>
<script>
export default {
  data: () => ({
    items: [
      {
        name: 'China',
        children: [
          {
            name: '广东',
            children: [
              {
                name: '广州',
              },
              {
                name: '深圳',
              },
              {
                name: '珠海',
              },
            ],
          },
          {
            name: '江苏',
            children: [
              {
                name: '南京',
              },
              {
                name: '苏州',
              },
              {
                name: '连云港',
              },
            ],
          },
        ],
      },
    ],
  }),
}
</script>
<style scoped></style>

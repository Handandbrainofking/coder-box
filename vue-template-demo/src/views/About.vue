<template>
  <div class="about">
    <h1>This is an about page</h1>
    <input type="text" v-model="message">
  </div>
</template>
<script>
export default {
    computed: {
        // 带有 setter 的双向绑定计算属性
        message: {
            get() {
                return this.$store.state.obj.message
            },
            set(value) {
                return this.$store.commit('updateMessage', value)
            }
        }
    }
}
</script>

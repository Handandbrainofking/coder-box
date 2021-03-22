import Vue from 'vue'

Vue.component('renderless-component-example', {
    render() {
        return this.$scopedSlots.default({
            exampleProp: 'universe'
        })
    }
})
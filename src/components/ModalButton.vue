<template>
    <button @click="open">Click me</button>
</template>


<script>
export default {
  name: 'ModalButton',
  props: ['modalId'],
  methods: {
    open () {
        document.getElementById(this.modalId).style.display = 'block'
    }
  }
}

</script>

<style lang="scss">
</style>    
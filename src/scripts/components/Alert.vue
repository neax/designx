<template lang="html">
  <div class="alert" :class="colorClass">
    <div class="alert-close" v-if="close"><i class="fas fa-times"></i></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'alert',
  computed: {
    colorClass: function() {
      const colorMap = {
        success: 'green',
        error: 'red',
        warning: 'orange',
        info: 'yellow',
        debug: 'purple',
      }

      if(this.color in colorMap) {
        return colorMap[this.color]
      }
      return this.color
    }
  },
  props: {
    color: {},
    close: {
      type: Boolean,
      default: false
    }
  }
}
</script>
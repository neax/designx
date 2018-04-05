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

<style scoped>
@import '../styles/base/_variables.css';
@import '../styles/designx.css';

.alert {
    padding: calc(var(--spacing) / 1.5);
    border-radius: var(--base-border-radius);
    color: var(--white);
    font-weight: var(--font-semi-bold);
    margin-bottom: calc(var(--spacing) / 2);
    text-align: center;
    width: 100%;
    z-index: 99;  

    &.fixed {
      position: fixed;
      top: null;
      right: 0;
      bottom: 0;
      left: 0;

      border-radius: 0;
    }
    /* Alerts colors */

    background: var(--blue);
}

.alert-close {
  cursor: pointer;
  float: right;
  line-height: var(--base-line-height);
  margin-right: --spacing / 2;
  
  /* Alert colors close icon */
  color: var(--yellow);
}


</style>
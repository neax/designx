<template lang="html">
  <div class="alert" :class="colorClass" v-if="display">
    <div class="alert-close" v-if="close" v-on:click="display = false"><i class="fas fa-times"></i></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'alert',
  data() {
    return { display: true }
  },
  computed: {
    colorClass: function() {
      const colorMap = {
        success: 'green',
        error: 'red',
        warning: 'orange',
        info: 'yellow',
        debug: 'purple'
      }

      if (this.color in colorMap) {
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

<style>
@import '../styles/variables.css';

.alert {
  padding: calc(var(--small-spacing) / 1.5);
  border-radius: var(--base-border-radius);
  color: var(--white);
  font-weight: var(--font-semi-bold);
  margin-bottom: var(--spacing);
  text-align: center;
  width: 100%;
  z-index: 99;

  @apply --primary-theme;

  background-color: var(--primary);
  color: var(--secondary);

  &.fixed {
    position: fixed;
    top: null;
    right: 0;
    bottom: 0;
    left: 0;

    border-radius: 0;
  }

  /* Colors */
  &.blue {
    @apply --blue-theme;
  }
  &.green {
    @apply --green-theme;
  }
  &.red {
    @apply --red-theme;
  }
  &.orange {
    @apply --orange-theme;
  }
  &.purple {
    @apply --purple-theme;
  }
  &.sky-blue {
    @apply --sky-blue-theme;
  }
  &.yellow {
    @apply --yellow-theme;
  }
  &.brown {
    @apply --brown-theme;
  }
  &.white {
    @apply --white-theme;
  }
  &.black {
    @apply --black-theme;
  }
  &.dark-gray {
    @apply --dark-gray-theme;
  }
  &.medium-gray {
    @apply --medium-gray-theme;
  }
  &.light-gray {
    @apply --light-gray-theme;
  }
}

.alert-close {
  cursor: pointer;
  float: right;
  line-height: var(--base-line-height);
  margin-right: calc(var(--spacing) / 2);
}
</style>

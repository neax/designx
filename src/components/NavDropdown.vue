<template lang="html">
  <div class="nav-dropdown">
    <a href="javascript:void(0)">
      {{ title }}
      <i class="fas fa-angle-down nav-dropdown-icon" v-if="icon"></i>
    </a>
    <div class="nav-dropdown-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navDropdown',
  props: ['icon', 'title']
}
</script>

<style>
@import '../styles/base/_variables.css';
@import '../styles/designx.css';

.nav-dropdown {
  display: inline-block;
  position: relative;

  &:hover {
    & .nav-dropdown-button {
      background-color: color(var(--action-color) darken 5);
    }

    & .nav-dropdown-content {
      display: block;
    }
  }
}

.nav-dropdown-content {
  position: absolute;
  top: null;
  right: 0;
  bottom: null;
  left: null;

  background-color: var(--action-color);
  display: none;
  min-width: 120px;
  width: 100%;
  z-index: 999999;

  & a {
    display: block;
    text-align: right;
  }
}

.nav-dropdown-icon { 
  margin-left: calc(var(--base-spacing) / 8);
}

</style>

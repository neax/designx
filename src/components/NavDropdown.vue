<template lang="html">
  <div class="nav-dropdown">
    <a href="javascript:void(0)" class="nav-dropdown-button">
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
@import '../styles/variables.css';

.nav-dropdown {
  display: inline-block;
  position: relative;
  @apply --primary-theme;

  &:hover {
    & .nav-dropdown-button {
      background-color: var(--primary-550);
    }

    & .nav-dropdown-content {
      display: block;
    }
  }
}

.nav-dropdown-content {
  position: absolute;
  right: 0;

  background-color: var(--primary);
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

.nav-responsive {
  & .nav-dropdown-content {
  }
}
</style>

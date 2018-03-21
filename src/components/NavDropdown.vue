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

<style lang="scss">
.nav-dropdown {
  display: inline-block;
  position: relative;

  &:hover {
    .nav-dropdown-button {
      background-color: darken($action-color, 5);
    }

    .nav-dropdown-content {
      display: block;
    }
  }
}

.nav-dropdown-content {
  @include position(absolute, null 0 null null);

  background-color: $action-color;
  display: none;
  min-width: 120px;
  width: 100%;
  z-index: 999999;

  a {
    display: block !important;
    text-align: right;
  }
}

.nav-dropdown-icon {
  margin-left: $base-spacing / 8;
}
</style>

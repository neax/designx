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
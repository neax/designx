<template lang="html">
  <nav>
    <a class="nav-logo" href="#">
      <i :class="icon"></i> {{ title }}
    </a>

    <slot name="left"></slot>

    <div class="nav-right" v-if="$slots.right">
      <slot name="right"></slot>
      <a href="#" id="button-nav-responsive"><i class="fas fa-bars"></i></a>
    </div>
  </nav>
</template>

<script>
export default {
  props: ['title', 'icon']
}
</script>

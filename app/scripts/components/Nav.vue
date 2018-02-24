<template lang="html">
  <nav class="nav">
    <a class="nav-logo" href="#">
      <i class="fas fa-cube"></i> {{ title }}
    </a>
    <div class="nav-right">
      <a href="#"><i class="fas fa-clock"></i></a>
      <a href="#" id="button-nav-responsive"><i class="fas fa-bars"></i></a>
    </div>
  </nav>
</template>

<script>
export default {
  props: ['title']
}
</script>

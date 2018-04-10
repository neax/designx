<template lang="html">
  <div>
    <nav>
      <span class="nav-logo">
        <slot name="logo"></slot>
      </span>
      <a v-on:click="responsive = !responsive" class="nav-responsive-button" id="navResponsiveButton"><i class="fas fa-bars"></i></a>

      <div class="nav-left" :class="{ 'nav-responsive' : responsive }">
        <slot name="left"></slot>
      </div>


      <div class="nav-right" v-if="$slots.right" :class="{ 'nav-responsive' : responsive }">
        <slot name="right"></slot>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  props: ['title', 'icon'],
  data: function() {
    return {
      responsive: false
    }
  }
}
</script>

<style>
@import '../styles/variables.css';

nav {
  padding: 0 calc(var(--spacing) / 2);
  clearfix: both;
  box-sizing: border-box;
  position: relative;
  text-align: center;
  width: 100%;

  @apply --primary-theme;
  background-color: var(--primary);

  @media (--medium-screen-up) {
    text-align: inherit;
  }

  & a {
    padding: 0 calc(var(--spacing) / 2);

    color: var(--secondary);
    display: inline-block;
    line-height: var(--navbar-height);

    &:hover {
      background-color: var(--primary-550);
      color: var(--secondary);
      text-decoration: none;
    }

    &.active {
      background-color: var(--primary-550);
    }
  }

  &.fixed {
    position: fixed;
    z-index: 99;
  }

  &.badge {
    padding: calc(var(--small-spacing) / 4.5) calc(var(--small-spacing) / 2);

    font-size: 0.7rem;
    line-height: var(--base-line-height);
    margin-left: calc(var(--small-spacing) / 2);
    vertical-align: middle;
  }
}

.nav-right,
.nav-left {
  text-align: center;
  display: none;

  & a {
    display: inline-block;
  }

  &.nav-responsive {
    @media (--medium-screen-down) {
      display: block;
    }
  }
}

.nav-right {
  @media (--medium-screen-up) {
    display: flex;
    flex-direction: row;
    float: right;
  }
}

.nav-left {
  @media (--medium-screen-up) {
    display: inline-block;
  }
}

.nav-responsive-button {
  float: right;
  display: inline-block;

  @media (--medium-screen-up) {
    display: none;
  }
}

.nav-logo {
  font-size: var(--big-font-size);
  font-weight: var(--font-semi-bold);

  & a {
    &:hover {
      background-color: inherit;
    }
    &:active {
      background-color: transparent;
    }
  }

  & i,
  & svg {
    margin-right: calc(var(--small-spacing) / 4);
  }
}

.nav-avatar {
  display: inline-block;
  line-height: 0;
  margin-right: calc(var(--small-spacing) / 3);
  vertical-align: middle;

  & img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
}

.nav-notification {
  position: relative;

  &::after {
    position: absolute;
    top: 10px;
    right: 5px;

    background-color: var(--red);
    border-radius: var(--base-border-radius);
    content: attr(data-notification);
    font-size: var(--small-font-size);
    line-height: var(--base-line-height);
    padding: 0 calc(var(--small-spacing) / 3);
    text-align: center;
  }
}
</style>

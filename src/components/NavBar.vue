<template lang="html">
  <nav>
    <span class="nav-logo">
      <slot name="logo"></slot>
    </span>

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

<style>
@import '../styles/base/_variables.css';
@import '../styles/designx.css';

nav {
  padding: 0 calc(var(--small-spacing) / 2);
  clearfix: both;

  background-color: var(--action-color);
  position: relative;
  text-align: center;
  width: 100%;

  @media only screen and (min-width: 720px) {
    text-align: inherit;
  }
  
  & a {
    padding: 0 var(--small-spacing);

    color: var(--white);
    display: inline-block;
    line-height: var(--navbar-height);

    &:hover {
      background-color: color(var(--action-color) darken 5%);
      color: var(--white);
      text-decoration: none;
    }

    &:active {
      background-color: color(var(--action-color) darken 5%);
    }
  }

  &.fixed {
    position: fixed;
    z-index: 99;
  }

  .badge {
    padding: calc(var(--small-spacing) / 4.5 ) calc(var(--small-spacing) / 2);

    font-size: 0.7rem;
    line-height: var(--base-line-height);
    margin-left: calc(var(--small-spacing) / 2);
    vertical-align: middle;
  }
}

.nav-right {
  display: flex;
  flex-direction: row;

  float: right;

  & a{
    padding: 0 calc(var(--base-spacing) / 2);

    @nest a:not(:nth-last-child(1)) {
      display: none;
    }

    @nest a:last-child {
      display: inline-block;
    }

    @media only screen and (min-width: 850px) {
      not(:nth-last-child(1)) {
        display: inline-block;
      }

      last-child {
        display: none;
      }
    }
  }
}

.nav-logo{
  font-size: var(--big-font-size);
  font-weight: var(--font-semi-bold);

  & a:hover {
    background-color: inherit;
  }

  & a:active {
    background-color: transparent;
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
    size: 30px;
    border-radius: 50%;
  }
}

.nav-notification {
  position: relative;

  &::after {
    position: absolute;
    top: 10px;
    right: 5px;
    bottom: null;
    left: null;

    background-color: var(--red);
    border-radius: var(--base-border-radius);
    content: attr(data-notification);
    font-size: var(--small-font-size);
    line-height: var(--base-line-height);
    padding: 0 calc(var(--small-spacing) / 3);
    text-align: center;
  }
}

.nav-responsive {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: null;

  background-color: color(var(--dark-grey) lighten(5%));
  color: var(--white);
  display: none;
  height: 100vh;
  margin-top: var(--navbar-height);
  overflow: scroll;
  padding-bottom: var(--vavbar-height);
  text-align: right;
  width: 160px;
  z-index: 99;

  & a {
    padding: var(--small-spacing) var(--base-spacing);
    color: var(--white);
  
    display: block;
    font-weight: var(--font-bold);

    &:hover {
      color: var(--white);
      background-color: var(--dark-gray);
    }

    &:sub-option {
      padding: calc(var(--small-spacing) / 2) var(--base-spacing);
      color: rgba(255,255,255,0.7);
      font-weight: var(--font-regular);

      &.active {
        color: rgba($white, 0.9);
        background-color: color(var(--dark-grey) lighten 2%);
      }
    }
  }
}

</style>
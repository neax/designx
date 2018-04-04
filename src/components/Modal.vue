<template lang="html">
  <transition>
    <div :id="id" class="modal-mask" @click="close" @keyup.esc="onEsc">

      <div class="modal" @click.stop>
        <h2>
          <slot name="header">{{ title }}</slot>
        </h2>

        <a class="modal-close" v-if="closeIcon" @click="close">
          <i class="fa fa-times"></i>
        </a>

        <div class="modal-content">
          <slot> </slot>
        </div>

        <slot name="footer">
        </slot>
      </div>

    </div>
  </transition>
</template>

<script>
export default {
  name: 'modal',
  props: {
    id: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: 'Modal title'
    },
    closeIcon: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },

  created: function() {
    document.addEventListener('keyup', this.onEsc)
  },

  methods: {
    safeId(suffix = '') {
      const id = this.id || this.localId_
      if (!id) {
        return null
      }
      suffix = String(suffix).replace(/\s+/g, '_')
      return suffix ? id + '_' + suffix : id
    },
    close() {
      document.getElementById(this.safeId()).style.display = 'none'
    },
    onEsc: function(evt) {
      // 27 is ASCII Code for Key 'ESC'
      if (evt.keyCode === 27) {
        document.getElementById(this.safeId()).style.display = 'none'
      }
    }
  }
}
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
  display: none;
}

.modal {
  margin: calc(var(--base-spacing) * 2) auto;
  padding: calc(var(--small-spacing) * 3);
  transition: all 5s ease-in-out;

  background-color: $white;
  border-radius: $base-border-radius;
  max-height: 100%;
  overflow: auto;
  position: relative;
  width: 90%;
}

.modal-close {
  /* @include position(absolute, $base-spacing / 1.5 $base-spacing / 1.5 null null); */
  transition: all 200ms ease-in-out;
  top: 50px;
  right: 50px;

  color: $medium-gray;
  cursor: pointer;
  font-size: 1.125rem;
  line-height: 1;
}
</style>

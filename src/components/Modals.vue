<template>

<div class="ui-preview">
<!-- <div id="modals-vue" class="modal-mask" @click="close" v-show=show> -->
<div :id="modalId" class="modal-mask" @click="close">  
<div class="overlay-modal" >
  
        <div class="modal-container" @click.stop>
            <div id="modal-1" class="overlay-modal">
                <div class="modal-header">
                <slot name="header">{{ title }}</slot>
                <a class="modal-close" onclick="document.getElementById('modals-vue').style.display='none'">
                  Exit
                  <i class="fa fa-times">...</i>
                </a>
            </div>
          

            <div class="modal-content">            
                <slot> </slot> 

                <div class="modal-buttons">
                  <button class="button outline" @click="close">Close</button>
                  <button class="button" @click="close">Save Modal</button>
                </div>
            </div>
        </div>
        </div>      

</div>    
</div>

</div>


</template>


<script>
export default {
  name: 'modals',
  props: ['title', 'modalId'],
  data () {
    return {
    }
  },
  methods: {
    close () {
      document.getElementById(this.modalId).style.display = 'none'
      this.$emit('close')
    }
  }

}

</script>

<style lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  // display: table;
  transition: opacity .3s ease;
  display: none
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
  width: 600px;
  margin: 100px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
.modal-header h2 {
  margin-top: 0;
  color: #42b111;
}
.modal-body {
  margin: 20px 0;
}
.modal-default-button {
  float: right;
}

.modal {
  display: block;
}

</style>
<template>
<transition>
<div :id="id" class="modal-mask" @click="close">
<div class="overlay-modal" >
        <div class="modal-container" @click.stop>
            <div id="modal-1" class="overlay-modal">
                <div class="modal-header">
                  <h4>
                    <slot name="header">{{ title }}</slot>
                    <a v-if="closeIcon==='Yes' " class="modal-close" @click="close">
                    <i class="fa fa-times"> X </i>
                </a>
                  </h4>
               </div>
        
            <div class="modal-body">  
                <slot></slot> 
            </div>

            <div class="modal-buttons"> 
                  <!-- Button Default -->
                  <!-- <button class="button outline" @click="close">Close</button> -->
                  <a v-if="nameButton">                     
                    <button class= "button" @click="close">{{ nameButton }} </button>
                  </a>
                  <a @click="close">
                    <slot name='m-button'>{ nameb }</slot>
                  </a>
            </div>
            </div>
        </div>
</div>      
</div>      
</transition>
</template>

<script>
export default {
  name: 'modals',
  props: ['id','title', 'nameButton', 'closeIcon'],
  data () {
    return {
    }
  },
  methods: {
    close () {
      var pacrueba = document.getElementById(this.id).style.display = 'none';
    }
  },
  mounted: function() {
    document.addEventListener("keydown", (e) => {
      if(e.keyCode == 27) {
        document.getElementById(this.id).style.display = 'none'
      }
    })
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
  display: table;
  transition: opacity .3s ease;
  display: none
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
  width: 700px;
  margin: 100px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
.modal-header h4 {
  margin-top: 0;
  color: #11a2ea;
}
.modal-body {
  margin: 20px 0;
}
.modal-default-button {
  float: right;
}


</style>
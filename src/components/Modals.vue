<template>
<div class="ui-preview">
<div id="principal" class="modal-mask" @click="close" v-show=show>
<div class="overlay-modal" >
  
        <div class="modal-container" @click.stop>
            <div id="modal-1" class="overlay-modal">
                <div class="modal-header">
                <slot name="header">Modal title</slot>
                <a class="modal-close" onclick="document.getElementById('principal').style.display='none'">
                  Exit
                  <i class="fa fa-times">...</i>
                </a>
            </div>
          

            <div class="modal-content">
                <slot name="body"> 
                  <p> Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. </p>
                  <p> Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ut aliquip ex ea 
                  commodo. </p>
                </slot> 

                <div class="modal-buttons">
                  <button class="button outline" onclick="document.getElementById('principal').style.display='none'">Close</button>
                  <button class="button" onclick="document.getElementById('principal').style.display='none'">Save Modal</button>
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
  name: 'modals'
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
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 100px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h2 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

</style>    
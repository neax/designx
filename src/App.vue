<template>
  <div id="app">
    
    <Nav title="DesignX" icon="fas fa-cube" >
      <template slot="right">
        <a href="#">Icon 1</a>
      </template>
    </Nav>

    <main>
      <h1 class="page-title">Cheasheet</h1>
      <div class="grid">
        <div class="grid-3">
          <div class="sidebar">
            <h3>Modules</h3>
            <router-link :to="{ name: 'module', params: { moduleId: module.id }}" v-for="module in modules">
              {{ module.title }}
            </router-link>
          </div>
        </div>
        <div class="grid-9">
          <router-view></router-view>
        </div>
      </div>

      <button class='button' v-modal:prueba2> Go! </button> 
      <modals id='prueba2' title="Module Title" >
        Modals content example ...        
          <button slot="m-button" class="button">
            EXIT2
          </button>
      </modals>

    </main>

    <footer>
      &copy; Neax
    </footer>

  </div>
</template>

<script>
import Nav from './components/Nav'
import Alert from './components/Alert'
import Module from './custom/Module'
import Modals from './components/Modals'

export default {
  name: 'app',
  data: function() {
    return {
      modules: require('../src/data/ModulesData').modules
    }
  },

  components: {
    Nav,
    Module,
    Alert,
    'modals': Modals
  }
}
</script>

<style lang="scss">

</style>
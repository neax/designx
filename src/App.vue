<template>
  <div id="app">

    <NavBar>
      <template slot="logo">
        <a href="#"><i class="fas fa-cube"></i> DesignX</a>
      </template>
      <template slot="right">
        <a href="#">Icon 1</a>

        <NavDropdown title="Example of dropdown" icon=true>
          <a href="#">First link</a>
        </NavDropdown>
      </template>
    </NavBar>

    <main>
      <h1 class="page-title">Cheasheet</h1>
      <div class="grid">
        <div class="grid-3">
          <div class="sidebar">
            <h3>Modules</h3>
            <router-link :to="{ name: 'module', params: { moduleId: module.id }}" v-for="module in modules" :key="module.id">
              {{ module.title }}
            </router-link>
          </div>
        </div>
        <div class="grid-9">
          <router-view></router-view>
        </div>
      </div>
    </main>

    <alert color="green" close>
      This is an alert!
    </alert>

    <footer>
      &copy; Neax
    </footer>

  </div>
</template>

<script>
import NavBar from './components/NavBar'
import Alert from './components/Alert'
import Module from './custom/Module'
import Modal from './components/Modal'
import NavDropdown from './components/NavDropdown'
import { modal } from './directives/Modal'

export default {
  name: 'app',
  data: function() {
    return {
      modules: require('./data/ModulesData').modules
    }
  },
  components: {
    NavBar,
    Module,
    Alert,
    Modal,
    NavDropdown
  },
  directives: {
    modal
  }
}
</script>

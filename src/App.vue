<template>
  <div id="app">

    <Navbar>
      <template slot="logo">
        <a href="#"><i class="fas fa-cube"></i> DesignX</a>
      </template>
      <template slot="right">
        <a href="#">Icon 1</a>

        <NavDropdown title="Example of dropdown" icon=true>
          <a href="#">First link</a>
        </NavDropdown>
      </template>
    </Navbar>

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

    
    
    <footer>
      &copy; Neax
    </footer>

    <form>
      <label for="name">Name</label>
      <input type="text" placeholder="A color placeholder text..">
      <label for="email">Email address</label>
      <input type="email">
      <label>
        <input type="checkbox"> Checkbox
      </label>
      <label>
        <input type="radio" name="" checked> Herp
      </label>
      <label>
        <input type="radio" name=""> Derp
      </label>
      <button type="submit" class="button">Submit</button>
      <button type="button" class="button">Button</button>
      <button type="reset" class="button">Reset</button>
    </form>

  </div>
</template>

<script>
import Navbar from './components/Navbar'
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
    Navbar,
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

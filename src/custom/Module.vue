<template>
  <div>
    <h2>{{ module.title }}</h2>

    <table class="striped">
    <tbody>
      <tr>
        <td>Module tag / class</td>
        <td v-if="module.module">
          <span v-for="(tagClass, index) in module.module" :key="tagClass">
            <code>{{ tagClass }}</code>
            <template v-if="index + 1 < module.module.length"><br></template>
          </span>
        </td>
        <td v-else>-</td>
      </tr>
      <tr>
        <td>Components</td>
        <td v-if="module.components">
          <span v-for="(component, index) in module.components" :key="component">
            <code>{{ component }}</code>
            <template v-if="index + 1 < module.components.length"><br></template>
          </span>
        </td>
        <td v-else>-</td>
      </tr>
      <tr>
        <td>States</td>
        <td v-if="module.states">
          <span v-for="(component, index) in module.states" :key="component">
            <code>{{ component }}</code>
            <template v-if="index + 1 < module.states.length"><br></template>
          </span>
        </td>
        <td v-else>-</td>
      </tr>
      <tr>
        <td>Modifiers</td>
        <td v-if="module.modifiers">
          <span v-for="(component, index) in module.modifiers" :key="component">
            <code>{{ component }}</code>
            <template v-if="index + 1 < module.modifiers.length"><br></template>
          </span>
        </td>
        <td v-else>-</td>
      </tr>
    </tbody>
    </table>

    <h3>Example</h3>

    <pre v-for="example in module.examples" :key="example.id">{{ example.code }}</pre>
  </div>
</template>

<script>
import ModulesData from '../data/ModulesData'

export default {
  name: 'module',
  computed: {
    module() {
      const moduleId = this.$route.params.moduleId || 'nav'
      return ModulesData.modules.find(obj => obj.id === moduleId)
    }
  }
}
</script>

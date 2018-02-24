<template>
  <div>
    <h2>{{ module.title }}</h2>

    <table class="striped">
    <tbody>
      <tr>
        <td>Module tag / class</td>
        <td v-if="module.module">
          <template v-for="(tagClass, index) in module.module">
            <code>{{ tagClass }}</code>
            <template v-if="index + 1 < module.module.length"><br></template>
          </template>
        </td>
        <td v-else>-</td>
      </tr>
      <tr>
        <td>Components</td>
        <td v-if="module.components">
          <template v-for="(component, index) in module.components">
            <code>{{ component }}</code>
            <template v-if="index + 1 < module.components.length"><br></template>
          </template>
        </td>
        <td v-else>-</td>
      </tr>
      <tr>
        <td>States</td>
        <td v-if="module.states">
          <template v-for="(component, index) in module.states">
            <code>{{ component }}</code>
            <template v-if="index + 1 < module.states.length"><br></template>
          </template>
        </td>
        <td v-else>-</td>
      </tr>
      <tr>
        <td>Modifiers</td>
        <td v-if="module.modifiers">
          <template v-for="(component, index) in module.modifiers">
            <code>{{ component }}</code>
            <template v-if="index + 1 < module.modifiers.length"><br></template>
          </template>
        </td>
        <td v-else>-</td>
      </tr>
    </tbody>
    </table>

    <h3>Example</h3>

    <pre v-for="example in module.examples">{{ example.code }}</pre>
  </div>
</template>

<script>

import ModulesData from '../data/ModulesData'

export default {
  name: 'module',
  computed: {
    module () {
      const moduleId = this.$route.params.moduleId || 'nav'
      return ModulesData.modules.find(obj => obj.id === moduleId)
    }
  }
}
</script>

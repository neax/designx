module.exports = {
  modules: [
    {
      id: 'nav',
      title: 'Nav',
      module: ['nav'],
      components: ['.nav-logo', '.nav-right'],
      examples: [
        {
          code: `
<nav class="nav">
  <a class="nav-logo" href="#">
    <i class="fas fa-cube"></i> DesignX
  </a>
  <div class="nav-right">
    <a href="#"><i class="fas fa-clock"></i></a>
    <a href="#" id="button-nav-responsive"><i class="fas fa-bars"></i></a>
  </div>
</nav>
            `
        }
      ]
    },
    {
      id: 'footer',
      title: 'Footer',
      module: ['footer'],
      examples: [
        {
          code: `
<footer>
  &copy; Neax
</footer>
            `
        }
      ]
    },
    {
      id: 'alert',
      title: 'Alert',
      module: ['.alert'],
      modifiers: [
        '.blue',
        '.green',
        '.red',
        '.orange',
        '.purple',
        '.sky-blue',
        '.yellow',
        '.brown',
        '.gray',
        '.dark-gray',
        '.medium-gray',
        '.light-gray'
      ],
      examples: [
        {
          code: `
<div class="alert alert-green">
  <div class="alert-close"><i class="fas fa-times"></i></div>
  This is my text
</div>
            `
        },
        {
          code: `
<alert color="success" close=True>This is my text</alert>
            `
        }
      ]
    },
    // 
    {
      id: 'modal',
      title: 'Modal',
      module: ['modal'],
      examples: [
        {
          code: `
<button v-modal:Modal1> Button demo modal </button>
<modal id="Modal1" title="My Title">
  Hello from modal!
</modal>
          `
        },
        {
          code: `
<a v-modal:Modal2> Text demo modal </a>
<modal id="Modal2" title="My Title" openMyIcon>
  Hello from modal!
  <slot name="MyComponents"> 
    <!-- My Component(s) -->
  </slot>
</modal>
          `
        }
      ]

    }
    // 
  ]
}

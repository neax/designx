module.exports = {
  modules: [
    {
      id: 'nav',
      title: 'Nav',
      module: ['nav'],
      components: ['.nav-logo', '.nav-right'],
      examples: [
        {
          id: 1,
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
          id: 1,
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
          id: 1,
          code: `
<div class="alert alert-green">
  <div class="alert-close"><i class="fas fa-times"></i></div>
  This is my text
</div>
            `
        },
        {
          id: 2,
          code: `
<alert color="success" close=True>This is my text</alert>
            `
        }
      ]
    },
    {
      id: 'modal',
      title: 'Modal',
      module: ['modal'],
      examples: [
        {
          id: 1,
          code: `
<button v-modal:Modal1> Button demo modal </button>
<modal id="Modal1" title="My Title">
  Hello from modal!
</modal> `
        },
        {
          id: 2,
          code: `
<a v-modal:Modal2> Text demo modal </a>
<modal id="Modal2" title="My Title" closeIcon>
  Hello from modal!
  <slot name="footer">
    <!-- My footer -->
  </slot>
</modal>
          `
        }
      ]
    }
  ]
}

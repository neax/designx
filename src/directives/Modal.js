export const modal = {
  bind(el, binding) {
    el.addEventListener('click', () => {
      if (binding.value) {
        // input is v-modal="'name_input'"
        document.getElementById(binding.value).style.display = 'block'
      } else {
        // input is v-modal:name_input
        document.getElementById(binding.arg).style.display = 'block'
      }
    })
  }
}

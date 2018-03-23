import Vue from 'vue';

export const modal={
    bind(el,binding,vnode){
        el.addEventListener('click', () => {
            document.getElementById(binding.arg).style.display = 'block'
        })
    }
}
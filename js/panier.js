const bouton = document.querySelector('.cta-button')
const confirma = document.querySelector('.remerciement')
const wrapper = document.querySelector('.small-container')

bouton.addEventListener('click', confirmation);

function confirmation(){
    wrapper.classList.add('confirmed')
    confirma.classList.add('actif')
}

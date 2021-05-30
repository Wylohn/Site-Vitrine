
const bouton = document.querySelector('.cta-button')
console.log(bouton);
const confirma = document.querySelector('.remerciement')
const wrapper = document.querySelector('.small-container')

bouton.addEventListener('click', confirmation);

function confirmation(){
    wrapper.classList.add('confirmed')
    confirma.classList.add('actif')
}





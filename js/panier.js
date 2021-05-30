const bouton = document.querySelector('.cta-button')
console.log(bouton);
const confirma = document.querySelector('.remerciement')
const wrapper = document.querySelector('.small-container')

bouton.addEventListener('click', confirmation);

function confirmation(){
    wrapper.classList.add('confirmed')
    confirma.classList.add('actif')
}

var removeButtons = document.querySelectorAll('.danger')

removeButtons.forEach(removeButton => {
    removeButton.addEventListener('click', function(event){
        event.preventDefault()
        removeButton.closest('tr').remove()
    })
})
const bouton = document.querySelector('.cta-button')
const confirma = document.querySelector('.remerciement')
const wrapper = document.querySelector('.small-container')

bouton.addEventListener('click', confirmation);

function confirmation(){
    wrapper.classList.add('confirmed')
    confirma.classList.add('actif')
}

var removeButtons = document.querySelectorAll('.danger')

removeButtons.forEach(removeButton => {
    removeButton.addEventListener('click', function(event){
        event.preventDefault()
        removeButton.closest('tr').remove()
    })
})
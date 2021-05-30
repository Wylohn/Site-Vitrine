
const bouton = document.querySelector('.cta-button')
console.log(bouton);
const confirma = document.querySelector('.remerciement')
const wrapper = document.querySelector('.small-container')



bouton.addEventListener('click', confirmation);

function confirmation(){
    wrapper.classList.add('confirmed')
    confirma.classList.add('actif')
}

var removeBtn = document.querySelectorAll('.danger')
console.log(removeBtn);

for (var i = 0 < removeBtn.length; i++){
    var button = removeBtn[i]
    button.addEventListener('click', function(event){
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
    })
}

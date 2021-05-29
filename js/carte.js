import '../json/element.json';

var plus = document.getElementsByClassName('plus')
var moins = document.getElementsByClassName('moins')
var nombre = document.getElementsByClassName('number')
var quantite = 0

plus.addElementListener(click,ajoutElement)
moins.addElementListener(click,supprElement)


function ajoutElement() {
    quantite += 1
    nombre.textContent = quantite
}

function supprElement() {
    quantite -+ 1
    nombre.textContent = quantite
}
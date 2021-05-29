// import '../json/element.json';

iteration = 0

const lesPlus = [plus0,plus1,plus2,plus3,plus4,plus5,plus6,plus7,plus8,plus9,plus10,plus11,plus12,plus13,plus14,plus15,plus16,plus17,plus18,plus19,plus20,plus21,plus22,plus23]
const lesMoins = [moins0,moins1,moins2,moins3,moins4,moins5,moins6,moins7,moins8,moins9,moins10,moins11,moins12,moins13,moins14,moins15,moins16,moins17,moins18,moins19,moins20,moins21,moins22,moins23]
const lesNombres = [nombre0,nombre1,nombre2,nombre3,nombre4,nombre5,nombre6,nombre7,nombre8,nombre9,nombre10,nombre11,nombre12,nombre13,nombre14,nombre15,nombre16,nombre17,nombre18,nombre19,nombre20,nombre21,nombre22,nombre23]

while (iteration < 23) {
    lesPlus[iteration] = document.getElementsByClassName('plus')[iteration]
    lesMoins[iteration] = document.getElementsByClassName('moins')[iteration]
    lesNombres[iteration] = document.getElementsByClassName('number')[iteration]

    lesPlus[iteration].addEventListener('click',ajoutElement(lesPlus[iteration]))
    lesMoins[iteration].addEventListener('click',supprElement(lesMoins[iteration]))
    iteration++
}

var quantite = 0



function ajoutElement(leNombre) {
    quantite++;
    leNombre.textContent = quantite;
};

function supprElement(leNombre) {
    if (quantite > 0){
        quantite--;
        leNombre.textContent = quantite;
    }
}
// import '../json/element.json';

var quantite = 0

const plusSC = document.getElementsByClassName('plus')[0]
const plusSD = document.getElementsByClassName('plus')[1]
const plusSM = document.getElementsByClassName('plus')[2]
const plusSOS = document.getElementsByClassName('plus')[3]
const plusSSA = document.getElementsByClassName('plus')[4]
const plusSS = document.getElementsByClassName('plus')[5]
const plusST = document.getElementsByClassName('plus')[6]
const plusCC = document.getElementsByClassName('plus')[7]
const plusCS = document.getElementsByClassName('plus')[8]
const plusCTCM = document.getElementsByClassName('plus')[9]
const plusMC = document.getElementsByClassName('plus')[10]
const plusMPSA = document.getElementsByClassName('plus')[11]
const plusMPSuA = document.getElementsByClassName('plus')[12]
const plusMPTA = document.getElementsByClassName('plus')[13]
const plusMSA = document.getElementsByClassName('plus')[14]
const plusMS = document.getElementsByClassName('plus')[15]
const plusMT = document.getElementsByClassName('plus')[16]
const plusSaD = document.getElementsByClassName('plus')[17]
const plusSaS = document.getElementsByClassName('plus')[18]
const plusSaT = document.getElementsByClassName('plus')[19]
const plusSRCA = document.getElementsByClassName('plus')[20]
const plusSRCC = document.getElementsByClassName('plus')[21]
const plusSRC = document.getElementsByClassName('plus')[22]


const moinsSC = document.getElementsByClassName('moins')[0]
const moinsSD = document.getElementsByClassName('moins')[1]
const moinsSM = document.getElementsByClassName('moins')[2]
const moinsSOS = document.getElementsByClassName('moins')[3]
const moinsSSA = document.getElementsByClassName('moins')[4]
const moinsSS = document.getElementsByClassName('moins')[5]
const moinsST = document.getElementsByClassName('moins')[6]
const moinsCC = document.getElementsByClassName('moins')[7]
const moinsCS = document.getElementsByClassName('moins')[8]
const moinsCTCM = document.getElementsByClassName('moins')[9]
const moinsMC = document.getElementsByClassName('moins')[10]
const moinsMPSA = document.getElementsByClassName('moins')[11]
const moinsMPSuA = document.getElementsByClassName('moins')[12]
const moinsMPTA = document.getElementsByClassName('moins')[13]
const moinsMSA = document.getElementsByClassName('moins')[14]
const moinsMS = document.getElementsByClassName('moins')[15]
const moinsMT = document.getElementsByClassName('moins')[16]
const moinsSaD = document.getElementsByClassName('moins')[17]
const moinsSaS = document.getElementsByClassName('moins')[18]
const moinsSaT = document.getElementsByClassName('moins')[19]
const moinsSRCA = document.getElementsByClassName('moins')[20]
const moinsSRCC = document.getElementsByClassName('moins')[21]
const moinsSRC = document.getElementsByClassName('moins')[22]


const numberSC = document.getElementsByClassName('number')[0]
const numberSD = document.getElementsByClassName('number')[1]
const numberSM = document.getElementsByClassName('number')[2]
const numberSOS = document.getElementsByClassName('number')[3]
const numberSSA = document.getElementsByClassName('number')[4]
const numberSS = document.getElementsByClassName('number')[5]
const numberST = document.getElementsByClassName('number')[6]
const numberCC = document.getElementsByClassName('number')[7]
const numberCS = document.getElementsByClassName('number')[8]
const numberCTCM = document.getElementsByClassName('number')[9]
const numberMC = document.getElementsByClassName('number')[10]
const numberMPSA = document.getElementsByClassName('number')[11]
const numberMPSuA = document.getElementsByClassName('number')[12]
const numberMPTA = document.getElementsByClassName('number')[13]
const numberMSA = document.getElementsByClassName('number')[14]
const numberMS = document.getElementsByClassName('number')[15]
const numberMT = document.getElementsByClassName('number')[16]
const numberSaD = document.getElementsByClassName('number')[17]
const numberSaS = document.getElementsByClassName('number')[18]
const numberSaT = document.getElementsByClassName('number')[19]
const numberSRCA = document.getElementsByClassName('number')[20]
const numberSRCC = document.getElementsByClassName('number')[21]
const numberSRC = document.getElementsByClassName('number')[22]


plusSC.addEventListener('click',ajoutElement(numberSC))
plusSD.addEventListener('click',ajoutElement(numberSD))
plusSM.addEventListener('click',ajoutElement(numberSM))
plusSOS.addEventListener('click',ajoutElement(numberSOS))
plusSSA.addEventListener('click',ajoutElement(numberSSA))
plusSS.addEventListener('click',ajoutElement(numberSS))
plusST.addEventListener('click',ajoutElement(numberST))
plusCC.addEventListener('click',ajoutElement(numberCC))
plusCS.addEventListener('click',ajoutElement(numberCS))
plusCTCM.addEventListener('click',ajoutElement(numberCTCM))
plusMC.addEventListener('click',ajoutElement(numberMC))
plusMPSA.addEventListener('click',ajoutElement(numberMPSA))
plusMPSuA.addEventListener('click',ajoutElement(numberMPSuA))
plusMPTA.addEventListener('click',ajoutElement(numberMPTA))
plusMSA.addEventListener('click',ajoutElement(numberMSA))
plusMS.addEventListener('click',ajoutElement(numberMS))
plusMT.addEventListener('click',ajoutElement(numberMT))
plusSaD.addEventListener('click',ajoutElement(numberSaD))
plusSaS.addEventListener('click',ajoutElement(numberSaS))
plusSaT.addEventListener('click',ajoutElement(numberSaT))
plusSRCA.addEventListener('click',ajoutElement(numberSRCA))
plusSRCC.addEventListener('click',ajoutElement(numberSRCC))
plusSRC.addEventListener('click',ajoutElement(numberSRC))

moinsSC.addEventListener('click',supprElement(numberSC))
moinsSD.addEventListener('click',supprElement(numberSD))
moinsSM.addEventListener('click',supprElement(numberSM))
moinsSOS.addEventListener('click',supprElement(numberSOS))
moinsSSA.addEventListener('click',supprElement(numberSSA))
moinsSS.addEventListener('click',supprElement(numberSS))
moinsST.addEventListener('click',supprElement(numberST))
moinsCC.addEventListener('click',supprElement(numberCC))
moinsCS.addEventListener('click',supprElement(numberCS))
moinsCTCM.addEventListener('click',supprElement(numberCTCM))
moinsMC.addEventListener('click',supprElement(numberMC))
moinsMPSA.addEventListener('click',supprElement(numberMPSA))
moinsMPSuA.addEventListener('click',supprElement(numberMPSuA))
moinsMPTA.addEventListener('click',supprElement(numberMPTA))
moinsMSA.addEventListener('click',supprElement(numberMSA))
moinsMS.addEventListener('click',supprElement(numberMS))
moinsMT.addEventListener('click',supprElement(numberMT))
moinsSaD.addEventListener('click',supprElement(numberSaD))
moinsSaS.addEventListener('click',supprElement(numberSaS))
moinsSaT.addEventListener('click',supprElement(numberSaT))
moinsSRCA.addEventListener('click',supprElement(numberSRCA))
moinsSRCC.addEventListener('click',supprElement(numberSRCC))
moinsSRC.addEventListener('click',supprElement(numberSRC))



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
const form = document.querySelector('.contact-form')
const inputs = document.querySelectorAll('.contact-form input, .contact-form select, .contact-form textarea');
const bouton = document.querySelector('.wrapper')
const confirma = document.querySelector('.remerciement')

form.addEventListener('submit', handleSubmit);
bouton.addEventListener('submit', confirmation);

function handleSubmit(e) {
  e.preventDefault();
  console.log(getFormValues(e));
}

function getFormValues(form) {
  const inputs = Object.values(form.srcElement);
  const values = {};
  
  inputs.forEach(input => {
    values[input.name] = input.value;
  });
  
  return values;
}

function confirmation(){
    bouton.classList.add('confirmed')
    confirma.classList.add('actif')
}

console.log(inputs);

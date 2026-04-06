// Ejercicio 1: Seleccionar y leer
const titulo = document.getElementById('titulo');
console.log(titulo.textContent);

const parrafo = document.getElementsByClassName('descripcion');
console.log(parrafo.textContent);

const filas = document.querySelectorAll('.item');
filas.forEach(f =>console.log("N° Filas: "+filas.length));

const primeraFila = document.querySelector('.item');
console.log(primeraFila.textContent);

const secondFila = document.querySelectorAll('.item');  //NodeList
secondFila.forEach(f=>console.log(secondFila[1].textContent));

// Ejercicio 2: Modificar contenido y clases
const cambioTitulo = document.getElementById('saludo');
cambioTitulo.textContent="Hola, JavaScript";

const cambioHTML = document.getElementById('estado');
cambioHTML.innerHTML="Estado: <strong>activo</strong>";

const addCaja = document.getElementById('caja');
addCaja.setAttribute('class','activo');

console.log(addCaja.classList.contains('activo'));

addCaja.classList.toggle('oculto');

// Ejercicio 3: Recorrer y modificar lista dinamica
const allLi = document.querySelectorAll('#productos li');
let sum = 0;

// allLi.forEach(f=>console.log(f.getAttribute('data-precio')));

allLi.forEach(f=>sum+=Number(f.getAttribute('data-precio')));
// console.log(sum);
const total = document.getElementById('total');
total.innerHTML = `<h4>Total: $${sum}</h4>`;
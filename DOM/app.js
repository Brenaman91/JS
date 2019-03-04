//window.onload=function(){} SE UTLIZA PARA LA ETIQUETA SCRIPT EN LA CABECERA
let h1=document.querySelector('h1');
console.log(h1);

let list=document.getElementsByClassName("mascota");// Lista de elementos
console.log(list[0]);

let list2= document.querySelector("li");// obtener el primer elemento de la lista
console.log(list2);

function cambiarTitulo(nuevoTitulo){
    let h2=document.querySelector("h1");
    console.log(h2);
    h2.textContent=nuevoTitulo;
}
function guardarMascota(){
    let inputNuevaMascota=document.getElementById("input-mascota");
    console.dir(inputNuevaMascota);
    console.log(inputNuevaMascota.value);

}

let ul=document.querySelector("ul");

// añadir elemento
let nodoLi=document.createElement("li");
let textoLi=document.createTextNode("Cerdo");
nodoLi.setAttribute("id","cerdo");
nodoLi.appendChild(textoLi);
ul.insertBefore(nodoLi,ul.children[2]);
//ul.appendChild(nodoLi);

//otra forma de añadir elemento

ul.innerHTML+="<li>Pez</li>"//FORMA AMS OPTIMIZADA


//Ejerciociko

let list5=document.querySelectorAll(".currency-name-container.link-secondary");

let nombreMonedas=[];
for(let item of list5){
    nombreMonedas.push(item.textContent)
}
console.log(nombreMonedas.sort());

//AÑADIR EVENTOS    
function addEventListenertoListItems(){
    let l=document.getElementsByTagName("li");
    for(let i of l){
        /*i.onclick=function(event){
            console.log(event);
            let elementLI=event.target;
            cambiarTitulo(elementLI.textContent);
        }*/
        i.addEventListener("click",function(event){
            console.log(event);
            let elementLI=event.target;
            cambiarTitulo(elementLI.textContent);
        })
        i.addEventListener("click",function(event){

            let elementLI=event.target;
            console.log(elementLI.textContent);
        })
    }
}
//EJERCICIO
/*
function añadirMasc(){
    let inputMascota=document.getElementsByTagName("li");
    let boton=document.getElementById("btn-guardar");
    inputMascota.addEventListener("click",function(event){
        let Mascota=event.target;
        ul.innerHTML+=Mascota;

    })
}*/
/*SOLICION PROFESOR */
let boton=document.getElementById("btn-guardar");
boton.addEventListener("click",aniadirMasc);
function aniadirMasc(event){
    let input=document.getElementById("input-mascota");
    let nuevaMascota=input.value;
    ul.innerHTML+=`<li>${nuevaMascota}</li>`
}
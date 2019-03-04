/*console.log("HOLA A TODOS !!!!");
num=4;
num='un nu8m';
console.log(num);
var texto='hasta los huevos'
let otroTexto='pasando por el escroto'
const unTexto=' Julian maricon'
console.log(texto,otroTexto,unTexto);
// DIFERENCIA ENTRE VAR Y LET
var n=1;
let m=1;
let j;
console.log(j)
if(true){
    var n=2;
    let m=2
    console.log('Dentro: '+n);
    console.log('Dentro: '+m)
}
console.log('Fuera: '+n)
console.log('Fuera: '+m)

let colores=["Blanco","Gris","Negro"];

console.log(colores[1]);
// aniadir elemento

colores.push("Naranja")
console.log(colores)
// Cambiar elemento
    //ES SOBRE ESCRIBIR EN LA POSICION  
// aniadir(otra frma)
colores[4]="Caqui";
console.log(colores)

//Conocer el tipo de la variable
    // con typeof: variable
console.table(colores)
//devolver la etiqueta4
//console.dir(document.querySelector('h1'))
console.info('info')

//Ejercicio 3
let nombre = prompt("nombre:");
let tenis = confirm("Te gusta el tenis");
console.log('A '+ nombre +" "+(tenis?'Si':'No')+' le gusta el tenis');

//Ejercicio4
let numero = prompt("Introduce un numero:");
let resultado="";
if(numero%3==0){
    resultado+='Fizz';
}if(numero%5==0){
    resultado+='Buzz';
}
console.log(numero+' '+resultado);

//BUCLES

    //bucle for con arrais
let colores=["Blanco","Gris","Negro"];
for(let i=0;i<colores.length;i++){
    console.log(colores[i])
}

for(let i in colores){
    console.log(colores[i])
}
for(let i of colores){
    console.log(i)
}
    //bucle con objetos
let persona={
    nombre:"jhon",
    apellido:"Snow"
}
for(let i in persona){
    console.log(persona[i])
}
for(let i of Object.values(persona)){
    console.log(i)
}

// EJERCIOSIO 10
function jugar() {
    var acierto=false, i=0;
    let rand = Math.floor(Math.random()*51);
    do{
        let num = prompt("Introduce el numero que crees: ");
        if(num<rand){
            console.log("El numero es mayor");
            i++;
        }if(num>rand){
            console.log("El numero es menor");
            i++;
        }
        if(num==rand){
            console.log("Has acertado al intento "+i);
            acierto=true;
        }
    }while(!acierto);
}
jugar();
let si=confirm("Jugar otra vez?");
if(si){
    jugar();
}


const nume= [1,2,3,4];
console.log(nume);

const trans= nume.map(function(nume){
    siten="Item";
    i=num;
    return siten+i;
});
console.log(trans)

const difer=trans.filter(function(trans){
    return trans!="Item3";
});
console.log(difer)

// Resuelto por angel
const num= [1,2,3,4];
const m=trans.filter(function(num){
    return m!=3;
}).map(function(num){
    return "Item"+num;
});
console.log(r);


///   FUNCIONES AUTOCOMPLETABLES

(function(algo){
    console.log("Función autoejecutable"+algo);
}('algo'));

(function(){
    console.log("Función autoejecutable");
})();
!!(function(){
    console.log("Función autoejecutable");
}());

// OBJETOS

const coche = {
    marca:"BMW",
    modelo:"RAS",
    color:"Negro"
};

console.log(coche.marca);

//let prop="año";// cuando quieres añadir al objeto un atributo inicializado en una variable
//console.log(coche[año]);

coche.color="Blanco";// modificar un valor

delete coche.modelo ; // eliminar un atributo

coche.modelo="" // añadir atributo

coche.pitar=(function(){ /// añadir una funcion a un atributo
    console.log("piiiiiii");
});

//const coche1= new object(); crear un objeto

// FUNCION CONSTRUCTORA PARA CREAR OBJETOS

function Coche(marca, modelo, sonido, color){
    this.marca=marca;
    this.modelo=modelo;
    this.sonido=sonido;
    this.color=color;
}
Coche.prototype.pitar =function(){
    console.log(this.sonido)
}

let Seat= new Coche("Seat","Ibiza","pipiiii","verde");

let Tesla= new Coche("Tesla","tes","pipii","Negro");

// EJERCICIO 13
function Serie(titulo,episodiosTotales,episodiosVistos,finalizada){
    this.titulo=titulo;
    this.episodiosTotales=episodiosTotales;
    this.episodiosVistos=episodiosVistos;
    this.finalizada=finalizada
}
Serie.prototype.reto=function(){
    return this.episodiosTotales-this.episodiosVistos;
}


/// PROFESOR
function serieSinFinalizar(Series){
    return Series.filter(function(Serie){
        return !Serie.finalizada;
    })
}
const misSeries=[
    new Serie("breaking bad", 300,250,false),
    new Serie("GOT", 300,150,false),
    new Serie("HIMYM",500,500,true)
]
console.log(serieSinFinalizar(misSeries));

//ejercicio 14
const array=[1,2,3,4,5,6];
console.log(array.map(function(num){
    return num%2==0 ? 'PAR' :num;
}));
console.log(array);

//OBJETOS INTRINSECOS
// EJERCICIO 15

texto="Paco viene a las rebajas";
te1= texto.replace(/a/g,"*");*
//EJERCICIO 15
function palindromo(texto){
    var x = texto.length;
    var cadenaInvertida = "";
    while (x>=0) {
    cadenaInvertida = cadenaInvertida + texto.charAt(x);
    x--;
    }
    for(var i=0;i<texto.length;i++){
        if(cadenaInvertida.charAt(i)!=texto.charAt(i)){
            console.log("NO es un palíndromo");
            break;
          }
    }
    console.log("SI es un palíndromo");
}
palindromo("OLA");

// PROFESOR

function palindrom(texto){
    texto=texto.replace(/\s/g,"").toLowerCase();
    //console.log(texto);

    let ar1=texto.split("");
    let ar2=texto.split("").reverse();
    //console.log(ar1);
    //console.log(ar2);
    
    console.log( ar1.join("")===ar2.join(""));
}
palindrom("hol a loh");
 
// EJERCICIO 16  se soluciona con toLowerCase o toUpperCase

// EJERCICIO 18 

function esPar(n){
    return n % 2 == 0
}
/*function mifilter(array, fn){
    let ar1=[];
   for(var i=0;i<array.lentgh;i++){
        if(fn(array.values(i))){
            ar1.push(array.values(i))
        }
    } 
    console.log(ar1) ;
}
mifilter([1,2,3,4],esPar())
//PROFESOR
function mifilter(array, fn=(n)){
    var ar=[];
    array.forEach(function(i){
        if(fn(array.values(i))){
            ar.push(array.values(i));
        }
    }) 
    return ar;
}
console.log(mifilter([1,2,3,4],esPar()));


//FUNCION FLECHA

a=function(){
    console.log('a');
}
b=()=>{
    console.log('b');
}
c=num=>{
    console.log('c');
}
d=(num,pos)=>{
    console.log('d');
}
e=(n1,n2)=>{
    return n1+n2;
}
*/

        // CLASES

class Coche{
    constructor(marca,modelo,sonido,color,duenio){
        this.marca=marca; // metodo publco
        this.nmodelo=modelo;
        this.sonido=sonido;
        this.color=color;
        var _duenio=duenio;// con var la propiedad es privada
        this.getDuenio=()=>{
            return duenio;
        }
        this.setDuenio=(duenio)=>{
            _duenio=duenio;
        }
    }
    //Metodo estático: todos los coches van a tener el mismo num de ruedas(hay que hacerlo con el nombre de l a clase)

    static getNumRuedas(){
        return 4;
    }


    pitar(){
        console.log(this.sonido);
        }
}
const audi=new Coche("Audi","A4","pipi","azul","PEPE");
audi.pitar();
console.log(Coche.getNumRuedas());
console.log(audi.getDuenio());
audi.setDuenio("JUAN");
console.log(audi.getDuenio());

// HERENCIA
class Rectangulo{
    constructor(lado,altura){
        this.lado=lado;
        this.altura=altura;
    }
    getArea(){
        return this.lado*this.altura;
    }
}

class Cuadrado extends Rectangulo{
    constructor(lado){
        super(lado,lado);
    }
}

const C1=new Cuadrado(3);
console.log(C1.getArea());

// llamada al modulo
//import{Mascota} from "./mascota"; HAY QUE CAMBIAR LA EXTESION DE JS A MJS
const mod1=require("./mascota");
const perro=new mod1.Mascota("Toby","perro");
const gato=new mod1.Mascota("Black","gato");
console.log(perro);
console.log(gato);
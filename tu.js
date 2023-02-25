var nombre = "Maria"
var mi_nombre = 'Claudia'

var saludo
var numero = 65.4

//console.log('saludo')




//strings -> "hola", "Manuel", "Josue", "0"
//number -> 1, 3, 3.5, 7
//booleans -> true, false -> es un valor lógico
//underfind -> no esta definida una variable
//null -> designada como vacia

//Si al verificar se rompe puede ser por 2 razones:
// la primera por que repito datos y la segunda los datos estan incompletos

// función clase pseudo-clasica -> empieza con mayuscula
//ejemplo

// manera 1 de solución de clase

//function Gato(nombre) {
  //  this.nombre = nombre;
  //  this.maullar = function(){
  //      return 'Mi nombre es ' + this.nombre + '... Meow';
  //  }
//}

//instancia: siempre que tenga que intanciar lo hago de la misma manera

//var lola = new Gato('Lola')
//var mar = new Gato('Mar')

//console.log(lola)

//Expreción o estructura de clase

// manera 2 de solución de clase

//class Gato{
  //  constructor(nombre){
  //      this.nombre = nombre
    //}
  //  maullar(){
  //      return 'Mi nombre es ' + this.nombre + '... Meow'
  //  }
//}

// var lola = new Gato('Lola')
// var mar = new Gato('Mar')

//Verificación (solo para mi)

//console.log(mar.maullar())

//Prototipo -> es una propiedad que tienen todas las clases
// da la herencia pero no hereda de nadie. se define como prototype y se puede usar para crear método a una clase

class Usuario {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
    presentacion() {
        return 'Mi nombre es ' + this.nombre + ', mi email es ' + this.email;
    }
}


var juan = new Usuario('Juan', 'juan@ejemplo.com')

//console.log(juan.presentacion())

//Object.create -> dos formas de uso
//forma 1 -> sencilla

// var obj = {}
// var obj = Object.create({})


// forma 2 -> proceso completo

var competencia = {
    nombre: 'Formula 1'
}

var poloto = Object.create( {nombre:{value:"Juan Pablo"}})
// //console.log(poloto.nombre)

var obj = {}
Object.assign(obj,{nombre:'Nike', apellido:'Lauda'})
//console.log(obj)

//Herencia clasica -> una clase hija obtiene las propiedades y metodios de una 
//clase padre, debe existir una relación entre ellas

Array.prototype.mayorQueTres = function(){
    var arreglo = [];
    for(var i = 0 ; i < this.length ; i++){
        if(this[i] > 3){
            arreglo.push(this[i])
        }
    }
    return arreglo;
}

var arr = [1,2,3,4,7,9];
var nuevoArreglo = arr.mayorQueTres();

// Ejemplo clase hencia clasica

class Carro {
    constructor(){
        this.carro = []
    }
}

Carro.prototype.agregarCarro = function(carro){
    this.carro.push(carro)
}

var carro = new Carro()

carro.agregarCarro('Audi')
//console.log(carro.carro)

//Herencia -> cuando una clase hereda propiedades y metodos de otra clase
// ejemplo

class Persona {
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }
    saludar(){
    return 'Hola mi nombre es ' + this.nombre + ' y mi edas es ' + this.edad + ' años'
}
}

class Desarrolladora extends Persona{
    constructor(nombre, edad, tecnologia){
        super(nombre, edad)
        this.tecnologia = tecnologia
    }
    mirar(){
        return 'Soy ' + this.nombre + ', tengo ' + this.edad + ' años y estudio ' + this.tecnologia
    }
}
var mariana = new Persona ('Mariana', 25)
//console.log(mariana.saludar())

var laura = new Desarrolladora ('Laura', 28, 'fotografia')
//console.log(laura.mirar())

//Una función callback es aquella que es pasada como argumento a otra función para ser llamada mas adelante

function decirHola(usuario){
    return 'Hola ' + usuario
}

function decirAdios(usuario){
    return 'Adiós ' + usuario
}

function crearSaludo(usuario, cb){
    return cb(usuario)
}

//console.log(crearSaludo('Joel', decirHola))
//console.log(crearSaludo('Joel', decirAdios))

/* metodo split separa los caracteres combirtiendolos en un array
metodo join junta los caracteres
charAt recorre los caracteres
toUpperCase -> pone las letras de un string mayusculas
slice -> crea un nuevo string
forEach -> itera cada valor y por cada iteración ejecuta una función
map -> crea un nuevo array con los resultados de la llamada a la función indicada aplicada a cada uno de los elementos
 */
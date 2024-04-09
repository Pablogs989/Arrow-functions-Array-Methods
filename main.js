//1

// function saludar() {
//     return "Hola";
//   }

const saludar = () => "Hola";

console.log(saludar());

//   function division(a,b) {
//     return a / b;
//   }

const division = (a, b) => a / b;

console.log(division(10, 2));

// function miNombre(nombre) {
//     return `Mi nombre es ${nombre}`;
//   }

const miNombre = (nombre) => `Mi nombre es ${nombre}`;

console.log(miNombre("Pablo"));

//   function test2() {
//     console.log("Función test 2 ejecutada.");
//   }
//   function test1(callback) {
//     callback();
//   }	

const test2 = () => console.log("Función test 2 ejecutada.");

const test1 = (callback) => callback();


//2

let gente = [
    {
        nombre: "Jamiro",
        edad: 45,
    },
    {
        nombre: "Juan",
        edad: 35,
    },
    {
        nombre: "Paco",
        edad: 34,
    },
    {
        nombre: "Pepe",
        edad: 14,
    },
    {
        nombre: "Pilar",
        edad: 24,
    },
    {
        nombre: "Laura",
        edad: 24,
    },
    {
        nombre: "Jenny",
        edad: 10,
    },
];

let genteMayor25 = [];
let genteJ = [];
gente.forEach(persona => {
    if (persona.edad > 25) {
        genteMayor25.push(persona);
    }
    if (persona.nombre.startsWith("J")) {
        genteJ.push(persona);
    }
});
console.log(genteMayor25);
console.log(genteJ);


//3

const mayor25 = gente.map((persona) => {
    if (persona.edad > 25) {
        return persona;
    }
})

console.log(mayor25);

const empiezaJ = gente.map((persona) => {
    if (persona.nombre.startsWith("J")) {
        return persona;
    }
})

console.log(empiezaJ);

const numbers = [4, 5, 6, 7, 8, 9, 10];
// Resultado esperado
// [256, 3125, 46656, 823543, 16777216, 387420489, 10000000000]

const elevados = numbers.map((numero) => {
    return numero ** numero;
})

console.log(elevados);


//4

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosImpares = numbers2.filter(numero => numero % 2 === 0);

console.log(numerosImpares);

const foodList = [
    { name: 'Tempeh', isVeggie: true },
    { name: 'Cheesbacon burguer', isVeggie: false },
    { name: 'Tofu burguer', isVeggie: true },
    { name: 'Entrecot', isVeggie: false }
];
/* [
    'Que rico Tempeh me voy a comer!',
    'Que rica Tofu burguer me voy a comer!'
   ]
*/

const vegana = foodList.filter(comida => comida.isVeggie === true);
console.log(vegana);


//5

const numeros = [39, 2, 4, 25, 62];
// Salida--> 483600

const multiplicacion = numeros.reduce(function callback(valorAnterior, valorActual) {
    return valorAnterior * valorActual;
});

console.log(multiplicacion);
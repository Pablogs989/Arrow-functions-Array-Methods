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
const veganaFrase = vegana.map((comida) => {
    return `Que rico ${comida.name} me voy a comer!`
})
console.log(veganaFrase);

//5

const numeros = [39, 2, 4, 25, 62];
// Salida--> 483600

const multiplicacion = numeros.reduce(function callback(valorAnterior, valorActual) {
    return valorAnterior * valorActual;
});

console.log(multiplicacion);


//Extras

const staff = [
    {
        name: "Pepe",
        role: "The Boss",
        hobbies: ["leer", "ver pelis"],
    },
    {
        name: "Ana",
        role: "becaria",
        hobbies: ["nadar", "bailar"],
    },
    {
        name: "Luis",
        role: "programador",
        hobbies: ["dormir", "comprar"],
    },
    {
        name: "Carlos",
        role: "secretario",
        hobbies: ["futbol", "queso"],
    },
];


// Resultado esperado
/*
    [
      'Pepe es TheBoss y le gusta leer y ver pelis',
      'Ana es becaria y le gusta nadar y bailar',
      'Luis es programador y le gusta dormir y comprar',
      'Ana es becaria y le gusta nadar y bailar',
      'Carlos es secretario y le gusta fútbol y queso'
    ]
 */


const staffFrases = staff.map((persona) => {
    return `${persona.name} es ${persona.role} y le gusta ${persona.hobbies[0]} y ${persona.hobbies[1]}`
})

console.log(staffFrases);

const foodList2 = ["Pizza", "Ramen", "Paella", "Entrecot"];
//Resultado esperado
/* [
    'Como soy de Italia, amo comer Pizza',
    'Como soy de Japón, amo comer Ramen',
    'Como soy de Valencia, amo comer Paella',
    'Aunque no como carne, el Entrecot es sabroso'
   ]
*/

const comidaFrases = foodList2.map((comida) => {
    switch (comida) {
        case "Pizza":
            return 'Como soy de Italia, amo comer Pizza'
        case "Ramen":
            return 'Como soy de Japón, amo comer Ramen'
        case "Paella":
            return 'Como soy de Valencia, amo comer Paella'
        case "Entrecot":
            return 'Aunque no como carne, el Entrecot es sabroso'
        default:
            break;
    }
})

console.log(comidaFrases);


const inventory = [
    {
      name: 'Mobile phone',
      price: 199
    },
    {
      name: 'TV Samsung',
      price: 459
    },
    {
      name: 'Viaje a cancún',
      price: 600
    },
    {
      name: 'Mascarilla',
      price: 1
    }
  ];
  /*
    [
      'TV Samsung,',
      'Viaje a Cancún'
    ]
  */

const masDe300 = inventory.filter(objeto => objeto.price > 300);
console.log(masDe300);


const sentenceElements = [
    'Me',
    'llamo',
    'Pablo',
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
    ];
   
// Resultado--> 'Me llamo XX y quiero sentir la fuerza con javascript'

const frase = sentenceElements.reduce(function callback(a, b) {
    return a + " " + b
});

console.log(frase);
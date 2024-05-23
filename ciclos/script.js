// Find The Bug

// Actividad 01:

/* 
let cantidad = prompt('INGRESE CANTIDAD DE REPETICIONES');
let texto = prompt('INGRESE TEXTO A REPETIR');
for (let i = 0;  i< cantidad; i++) {
console.log(texto);
}
*/

/* 
¿Qué tiene que hacer este código?

Repetir el texto la cantidad de veces que le ingresen por el prompt

¿Por qué no cumple con su función?

No cumplía con su función debido a que no se iba incrementando.
*/

// Actividad 02:

let lados =  parseInt(prompt('INGRESE CANTIDAD DE LADOS', 10));
if (!isNaN(lados) && lados > 0) {
    for (let i = 0; i < lados; i++){
        alert ("Lado " + (i+ 1) )
    }
} else {
    alert (" Por favor introducir un numero valido")
}


/*
¿Qué tiene que hacer este código?
¿Por qué no cumple con su función?
¿Qué propuesta podrías hacer para que tenga sentido su uso?
*/

// Actividad 01 complementaria:

/*
Crea un algoritmo que le pida al usuario que ingrese un número y luego evalúe si ese
número es par o impar.
*/
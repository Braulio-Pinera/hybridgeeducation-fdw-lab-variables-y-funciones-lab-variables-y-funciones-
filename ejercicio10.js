// Ejercicio 10: Inversión de una Cadena
// Declara una función llamada "invertirCadena" que acepte un parámetro "cadena" y retorne la cadena invertida

function invertirCadena(cadena) {
    return cadena.split('').reverse().join('');
}

// Exporta la función para que pueda ser utilizada en las pruebas
module.exports = {
    invertirCadena
};
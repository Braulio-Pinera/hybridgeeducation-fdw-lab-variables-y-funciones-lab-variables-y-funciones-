// Ejercicio 4: Función que Saluda
// Declara una función llamada "saludar" que acepte un parámetro "nombre" y retorne un mensaje de saludo con la estructura "Hola, nombre!".

function saludar(nombre) {
    return `Hola, ${nombre}!`;
}

// Exporta la función para que pueda ser utilizada en las pruebas
module.exports = {
    saludar
};
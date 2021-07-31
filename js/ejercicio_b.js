// B) Realice un programa que convierta el primer carácter de una oración en
// mayúscula, además del primer carácter, convertir los demás caracteres si están en
// mayúsculas a minúsculas. Ejemplos:
// Valor de entrada: gMAIL
// Resultado: Gmail
// Valor de Entrada: RutAdeEvacuacion
// Resultado Esperado: Rutadeevacuacion
let frase = prompt("Ingresa una frase");
 
function primerMayuscula(frase) {
    return frase.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

// console.log(primerMayuscula(frase));
document.write(`Resultado Obtenido: ` + primerMayuscula(frase));



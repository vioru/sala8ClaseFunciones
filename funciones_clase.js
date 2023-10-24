//#1. Crear una función que convierta pulgadas en centímetros.
// Recibe por parámetro pulgadas y retorna su equivalente en centímetros.

const convertToInches = (number) => number * 2.54

let inches = convertToInches(50)

console.log(convertToInches(30))

console.log("el resultado es " + inches)

// #2 .Crear una función que recibe un string y lo convierte en una URL.
// Ej: “pepito” es devuelto como “http://www.pepito.com”

const convertInUrl = (text) => "http://www." + text + ".com"
let name = convertInUrl("luisa")
console.log(name)

// # 3 .Crear una función que recibe un string y devuelve la misma frase pero con
// admiración.

const agreeSign = (text) => "¡" + text + "!"
let phrase = agreeSign("Ay Caramba")
console.log(phrase)

// #4.Crear una función que calcule la edad de los perros, considerando que 1 año
// para nosotros son 7 de ellos.

const dogAge = (age) => age * 7

let Age = dogAge(5)
console.log(`la edad de tu perro es en años de humano es : ${Age}`)

//#7. Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu
// sueldo mensual como parámetro.
// considerá que tu mes de trabajo tiene 40 horas.

const workHour = (salary) => salary / 40
let salaryHour = workHour(2000000)
console.log(`Una hora de tu salario equivale a: $${salaryHour}`)

// #6.Crear la función calculadorIMC() que reciba la altura en metros y el peso en
// kilogramos y calcule el IMC de una persona. Luego, ejecutar la función
// probando diferentes valores.

const Imc = (weight, height) => weight/(height*height)
let myIMC = Imc(75, 1.60)
console.log(`Tu indice de masa corporal (IMC) es: ${myIMC}`)
console.log(`Tu indice de masa corporal (IMC) es: ${Imc(80,1.90)}`)
console.log(`Tu indice de masa corporal (IMC) es: ${Imc(95,1.70)}`)
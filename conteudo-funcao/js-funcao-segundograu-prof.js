
function funcaoSegundoGrau(a, b, c){

    const delta = b ** 2 - 4 * a * c /* calculo de delta */
    const raizDelta = Math.sqrt(delta) /* sqrt faz a raiz quadrada do número, no caso, de delta */

    const x1 = (-b + raizDelta) / (2 * a)
    const x2 = (-b - raizDelta) / (2 * a)

    return {x1: x1, x2: x2} /* fez dessa maneira para retornar os dois valores juntos, criou-se um objeto  */

}

let a = parseFloat(prompt('Informo o valor de "A": '))
let b = parseFloat(prompt('Informo o valor de "B": '))
let c = parseFloat(prompt('Informe o valor de "C": '))

const resultado = funcaoSegundoGrau(a, b, c)

alert(`X1 = ${resultado.x1}; X2 = ${resultado.x2}`)
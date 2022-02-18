function soma(n1, n2){
    console.log(n1 + n2)
}

soma(6.5, 10)

function subtracao(n1, n2){
    console.log(n1 - n2)
}

subtracao(9, 5)

function multi(n, n2){
    console.log(n * n2)
}

multi(10, 5)

function div(n1, n2){
    console.log(n1 / n2)
}
div(10, 2)

function quatroOperacoes(){
    let numero1 = parseFloat(prompt('Informo o primeiro valor: '))
    let numero2 = parseFloat(prompt('Informe o segundo valor: '))

    let soma = numero1 + numero2
    let sub = numero1 - numero2
    let multi = numero1 * numero2
    let div = numero1 / 2

    let n1pow = numero1 ** 2 /* dois asterisco juntos, significa potenciação */
    let n2pow = numero2 **2

    alert(`Soma = ${soma}; Subtração = ${sub}; Multiplicação = ${multi}; Divisão: ${div}`)
    alert(`${numero1} ao quadrado = ${n1pow} e ${numero2} ao quadrado = ${n2pow}`)

}
/* quatroOperacoes() */

function soma(n1, n2){
    return n1 + n2 /* Diz que quando uma função for executada, ela precisa nos retornar algum valor */

    console.log(n1 + n2) /* Não executa nada abaixo do return */

}

document.write(`Soma = ${soma(10,80)}`)

function soma2(numero1, numero2){
    let soma = n1 + n2
}
( function() {
    console.log(`Estou utilizando uma função com a sintaxe padrão`)
    alert(`Isto é um alert executado dentro de uma função com a sintaxe padrão`)
}) (),


(() => {  /* arrow function, são funções anônimas, não dá para inserir nomes, por exemplo */

    console.log(`Estou utilizando uma arrow funcion`)
    alert(`Isto é um alert executado dentro de uma arrow function`)
})()




let soma = (n1, n2) => { /* arrow function */
    return n1 + n2

}

let soma2 = (n1, n2) => n1 + n2 /* arrow function */


function soma3(n1, n2){ 
    return n1 + n2
}

let soma4 = function (n1, n2) { /* mais verboso */
    return n1 + n2
}

console.log(soma(5, 7))
console.log(soma2(10, 5))
console.log(soma3(10, 9))
console.log(soma4(10, 10))
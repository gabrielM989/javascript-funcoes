/* Funções são blocos de códigos, para diluir o programa em "parte" */

function mostrarMensagem(msg, numero) { /* método e função são a mesma coisa */
    /* qualquer código */
    console.log(msg, numero)

    alert(numero, msg) /* não importa a ordem que você deseja exibir os parâmetros */

}

mostrarMensagem( 5, `Cachorros são fofos`)/* Os valores dos parâmetros chamamos de "argumentos" */
mostrarMensagem("Olá, tudo bem com vocês ?", 10)
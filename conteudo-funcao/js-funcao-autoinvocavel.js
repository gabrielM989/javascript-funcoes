( function() {
    alert('Função auto invocável executada! ') /* É executada apenas uma vez e será perdida, boas para utilizar na primeira execução de nosso código */

    let seuNome = prompt('Qual é o seu nome ?')

    alert(`Olá, ${seuNome}! Que belo nome você tem!`)

    let gostandoSite =  confirm(`Você está gostando do meu site? `)

    console.log(gostandoSite)

    if (gostandoSite) {
        alert(`Que bom que você está gostando do meu site, ${seuNome}!`)
    } else {
        alert(`ENTÃO SAIA DO MEU SITE, SEU BOBÃO`)
        window.close()
    }
}) ()


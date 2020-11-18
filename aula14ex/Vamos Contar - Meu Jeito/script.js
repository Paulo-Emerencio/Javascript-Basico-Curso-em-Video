function contando() {
    var inicio = document.getElementById('inicio').value
    var fim = document.getElementById('fim').value
    var passo = document.querySelector('input#passo').value
    var contagem = document.querySelector('div#contagem')

    if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
        contagem.innerHTML = 'Impossível contar!'
    } else {
        var i = Number(inicio)
        var f = Number(fim)
        var p = Number(passo)
        if (p <= 0) {
            alert('[ERRO] Número de passo inválido! Substituindo por passo 1')
            p = 1
        }
        contagem.innerHTML = 'Contando: <br>'
        if (i < f) {
            while (i <= f) {
                contagem.innerHTML += `${i}, `
                i += p
            }
        } else {
            while (i >= f) {
                contagem.innerHTML += `${i}, `
                i -= p
            }
        }
        contagem.innerHTML += 'FIM!'
    }
}
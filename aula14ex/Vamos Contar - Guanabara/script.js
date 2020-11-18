function contando() {
    let inicio = document.getElementById('inicio').value
    let fim = document.getElementById('fim').value
    let passo = document.getElementById('passo').value
    let res = document.getElementById('res')
    
    if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
        res.innerHTML = "Impossível contar!"
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio)
        let f = Number(fim)
        let p = Number(passo)
        if (p <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            //Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} &#128073`
            }
        } else {
            //Contagem regressiva
            for (let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} &#128073`
            }
        }
        res.innerHTML += `&#x1F3C1`
    }
}
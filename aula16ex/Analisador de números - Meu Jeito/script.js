var vetor = []

function adicionar() {
    let numero = document.getElementById('numero')
    let n = Number(numero.value)
    if (n>100 || n<1 || vetor.indexOf(n) != -1) {
        alert("Valor invalido ou já adicionado na lista!")
    } else {
        let opt = document.createElement('option')
        let slc = document.getElementById('numerosEscolhidos')
        opt.text = `Valor ${n} adicionado.`
        slc.appendChild(opt)

        vetor.push(n)
        function ordenarDireito(a, b) {
            return a - b
        }
        vetor.sort(ordenarDireito)

        let res = document.getElementById('resultado')
        res.innerHTML = ''
    }
    numero.value = ''
    numero.focus()
}

function finalizar() {
    if (vetor.length == 0) {
        alert("Adicione valores antes de finalizar")
    } else {
        let res = document.getElementById('resultado')
        res.innerHTML = `<p>Ao todo, temos ${vetor.length} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${vetor[vetor.length -1]}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${vetor[0]}.</p>`

        let soma = 0
        for (let pos in vetor) {
            soma += vetor[pos]
        }
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`

        let media = soma / vetor.length
        res.innerHTML += `<p>A média dos valores digitados é ${media.toFixed(2)}.</p>`
    }
}
function geraTabuada() {
    let num = document.getElementById('numero').value

    if (num.length == 0) {
        alert('[ERRO] Digite um número, por favor!')
    } else {
        let tab = document.getElementById('tabuada')
        tab.innerText = ''
        for (let c = 1; c <= 10; c++) {
            let paragrafo = document.createElement('p')
            paragrafo.innerText = `${num} x ${c} = ${Number(num)*c}`
            tab.appendChild(paragrafo)
        }
    }
}
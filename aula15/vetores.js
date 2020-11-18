let num = [9,5,7,3,4,6] // Isso é um vetor
num[6] = 2 // Escolhendo uma posição para adicionar um valor no vetor
num.push(8) // .push(valor) adiciona um valor no última posição do vetor
num.sort() // .sort() coloca os valores do vetor em ordem crescente
num.indexOf(9) // .indexOf(valor) mostra a posição do valor no vetor
// Quando o valor não é encontrado, o javascript retorna o valor -1

console.log(`nosso vetor é ${num}`)
console.log(`o vetor tem ${num.length} valores`)
// .length mostra quantas posições tem no vetor
console.log(`o valor da posição dois é: ${num[2]}`)
console.log(`o valor da posição zero é: ${num[0]}`)
console.log(`a posição do valor 9 no vetor é: ${num.indexOf(9)}`)

for (let pos = 0; pos < num.length; pos++) {
    console.log(`Posição [${pos}] -> ${num[pos]}`)
}
// Forma simplificada de mostrar os valores de um vetor usando o FOR
for (let posicao in num) {
    console.log(`Forma simplificada, posição [${posicao}]: ${num[posicao]}`)
}

let p = num.indexOf(1)
if (p == -1) { // Se o valor não é encontrado pelo .indexOf, o retorno é -1
    console.log('O valor 1 não foi encontrado no vetor')
} else {
    console.log(`O valor 1 está na posição ${p}`)
}
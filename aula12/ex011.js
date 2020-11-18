var idade = 58
console.log(`Você tem ${idade} anos, então...`)

if (idade < 16) {
    console.log('você não vota!')
} else if (idade < 18 || idade >= 67) {
    console.log('o voto é opcional')
} else {
    console.log('o voto é obrigatório')
}
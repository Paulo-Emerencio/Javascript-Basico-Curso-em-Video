let amigo = {
    nome: 'João',
    sexo: 'M',
    peso: 85.5,
    engordar(p){
        console.log(`${amigo.nome} engordou! Semana passada ele pesava ${amigo.peso}Kg.`)
        this.peso += p
    }
}

amigo.engordar(2.3)
console.log(`Mas agora o ${amigo.nome} está pesando ${amigo.peso}Kg`)

/*
Em uma variável do tipo objeto, você pode colocar todo tipo de dados, até uma função dentro dela.
E você pode nomear os índices da maneira que desejar, ex.: nome:, sexo:, peso:
*/
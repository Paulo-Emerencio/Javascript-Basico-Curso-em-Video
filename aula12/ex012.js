var hora = new Date().getHours()
var minutos = new Date().getMinutes()

if (hora < 5) {
    console.log(`O que você tá fazendo acordado de madrugada? agora são exatamente ${hora}:${minutos}h`)
} else if (hora <= 12) {
    console.log(`Bom dia! Agora são exatamente ${hora}:${minutos}h`)
} else if (hora <= 18) {
    console.log(`Boa tarde! Agora são exatamente ${hora}:${minutos}h`)
} else {
    console.log(`Boa noite! Agora são exatamente ${hora}:${minutos}h`)
}


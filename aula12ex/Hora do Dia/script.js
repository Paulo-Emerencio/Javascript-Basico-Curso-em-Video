function carregar() {
    var hora = new Date().getHours()
    var minutos = new Date().getMinutes()
    var horaExata = document.getElementById('titulo')
    var ilustra = document.getElementById('imagem')

    if (hora < 5) {
        horaExata.innerHTML = `<p>Agora são ${hora} e ${minutos} da madrugada.</p>`
        ilustra.style.backgroundImage = "url('img/night.jpg')"
        document.body.style.backgroundColor = '#28384f'
    } else if (hora < 12) {
        horaExata.innerHTML = `<p>Agora são ${hora} e ${minutos} da manhã.</p>`
        ilustra.style.backgroundImage = "url('img/morning.jpg')"
        document.body.style.backgroundColor = '#43e4ff'
    } else if (hora < 19) {
        horaExata.innerHTML = `<p>Agora são ${hora} e ${minutos} da tarde.</p>`
        ilustra.style.backgroundImage = "url('img/afternoon.jpg')"
        document.body.style.backgroundColor = '#f1ca01'
    } else {
        horaExata.innerHTML = `<p>Agora são ${hora} e ${minutos} da noite.</p>`
        ilustra.style.backgroundImage = "url('img/night.jpg')"
        document.body.style.backgroundColor = '#28384f'
    }
}
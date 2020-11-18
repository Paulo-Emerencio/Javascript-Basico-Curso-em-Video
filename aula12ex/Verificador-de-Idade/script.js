function verifica() {
    var ano = new Date().getFullYear()
    var nascimento = Number(document.querySelector("input#stringAno").value)
    var idade = ano - nascimento
    var sexo
    if (document.getElementById('masc').checked) {
        sexo = 'masculino'
    } else {
        sexo = 'feminino'
    }
    var result = document.getElementById("resultado")

    if (sexo == 'masculino') {
        if (idade < 0) {
            result.innerHTML = `O ano de ${nascimento} não chegou ainda.<br> Para de zoar seu bobão!
                                <img src="img/bobao.jpg" alt="Bobão" id="fotos">`
        }else if (idade == 1) { //Só para deixar 1 ano no singular.
            result.innerHTML = `Detectamos um bebê de ${idade} aninho. <img src="img/babyboy.jpg" alt="Bebezinho" id="fotos">`
        }else if (idade < 4) {
            result.innerHTML = `Detectamos um bebê de ${idade} aninhos. <img src="img/babyboy.jpg" alt="Bebezinho" id="fotos">`
        }else if (idade < 13) {
            result.innerHTML = `Detectamos um menino de ${idade} anos. <img src="img/boy.jpg" alt="Menino" id="fotos">`
        } else if (idade < 20) {
            result.innerHTML = `Detectamos um adolescente de ${idade} anos. <img src="img/teenboy.jpg" alt="Adolescente" id="fotos">`
        } else if (idade < 40) {
            result.innerHTML = `Detectamos um homem de ${idade} anos. <img src="img/youngman.jpg" alt="Homem jovem" id="fotos">`
        } else if (idade < 60) {
            result.innerHTML = `Detectamos um homem de ${idade} anos. <img src="img/middleageman.jpg" alt="Homem de meia idade" id="fotos">`
        } else if (idade <= 120) {
            result.innerHTML = `Detectamos um senhor de ${idade} anos. <img src="img/oldman.jpg" alt="Senhor" id="fotos">`
        } else {
            result.innerHTML = `Detectamos uma múmia de ${idade} anos. <img src="img/mummy.jpg" alt="Múmia" id="fotos">`
        }
    } else {
        if (idade < 0) {
            result.innerHTML = `O ano de ${nascimento} não chegou ainda.<br> Para de zoar sua boboca!
                                <img src="img/boboca.jpg" alt="Boboca" id="fotos">`
        }else if (idade == 1) { //Só para deixar 1 ano no singular.
            result.innerHTML = `Detectamos uma bebê de ${idade} aninho. <img src="img/babygirl.jpg" alt="Bebezinha" id="fotos">`
        }else if (idade < 4) {
            result.innerHTML = `Detectamos uma bebê de ${idade} aninhos. <img src="img/babygirl.jpg" alt="Bebezinha" id="fotos">`
        } else if (idade < 13) {
            result.innerHTML = `Detectamos uma menina de ${idade} anos. <img src="img/girl.jpg" alt="Menina" id="fotos">`
        } else if (idade < 20) {
            result.innerHTML = `Detectamos uma adolescente de ${idade} anos. <img src="img/teengirl.jpg" alt="Adolescente" id="fotos">`
        } else if (idade < 40) {
            result.innerHTML = `Detectamos uma mulher de ${idade} anos. <img src="img/youngwoman.jpg" alt="Mulher jovem" id="fotos">`
        } else if (idade < 60) {
            result.innerHTML = `Detectamos uma mulher de ${idade} anos. <img src="img/middleagewoman.jpg" alt="Mulher de meia idade" id="fotos">`
        } else if (idade <= 120) {
            result.innerHTML = `Detectamos uma senhora de ${idade} anos. <img src="img/oldwoman.jpg" alt="Senhora" id="fotos">`
        } else {
            result.innerHTML = `Detectamos uma múmia de ${idade} anos. <img src="img/mummy.jpg" alt="Múmia" id="fotos">`
        }
    }
}



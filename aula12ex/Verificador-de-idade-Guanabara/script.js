function verificar(){
    var ano = new Date().getFullYear()
    var nasc = Number(document.querySelector('input#txtano').value)
    
    if (nasc == 0 || nasc > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var sexo = document.getElementsByName('radsex')
        var idade = ano - nasc
        var genero = ""
        var imagem = document.createElement('img')
        imagem.setAttribute('id', 'foto')
        imagem.style.width = '250px'
        imagem.style.borderRadius = '50%'
        if (sexo[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 4) {
                //Bebê
                imagem.setAttribute('src', 'img/babyboy.jpg')
            } else if (idade < 12) {
                //Criança
                imagem.setAttribute('src', 'img/boy.jpg')
            } else if (idade < 19) {
                //Adolescente
                imagem.setAttribute('src', 'img/teenboy.jpg')
            } else if (idade < 40) {
                //Jovem
                imagem.setAttribute('src', 'img/youngman.jpg')
            }else if (idade < 60) {
                //Meia idade
                imagem.setAttribute('src', 'img/middleageman.jpg')
            }else if (idade <= 120) {
                //Idoso
                imagem.setAttribute('src', 'img/oldman.jpg')
            } else {
                //Múmia
                imagem.setAttribute('src', 'img/mummy.jpg')
            }
        } else {
            genero = "Mulher"
            if (idade >= 0 && idade < 4) {
                //Bebê
                imagem.setAttribute('src', 'img/babygirl.jpg')
            } else if (idade < 12) {
                //Criança
                imagem.setAttribute('src', 'img/girl.jpg')
            } else if (idade < 19) {
                //Adolescente
                imagem.setAttribute('src', 'img/teengirl.jpg')
            } else if (idade < 40) {
                //Jovem
                imagem.setAttribute('src', 'img/youngwoman.jpg')
            }else if (idade < 60) {
                //Meia idade
                imagem.setAttribute('src', 'img/middleagewoman.jpg')
            }else if (idade <= 120) {
                //Idosa
                imagem.setAttribute('src', 'img/oldwoman.jpg')
            } else {
                //Múmia
                imagem.setAttribute('src', 'img/mummy.jpg')
            }
        }
        var res = document.getElementById('resultado')
        res.style.textAlign = 'center'
        if (idade == 1) {
            //Colocando 1 ano no singular
            res.innerHTML = `Detectamos ${genero} com ${idade} ano`
            res.appendChild(imagem)    
        } else {
            res.innerHTML = `Detectamos ${genero} com ${idade} anos`
            res.appendChild(imagem)
        }
    }
}



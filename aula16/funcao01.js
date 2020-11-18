/*
    Funções são caracterizadas por 4 partes:
    1- Chamada.
    2- Parâmetros.
    3- Ação.
    4- Retorno.
*/

function parimpar(n) { //Parâmetro(dentro do parênteses)
    if (n%2 == 0) {
        return 'Par!'//Retorno
    } else { //Ação é tudo dentro do bloco da função
        return 'Impar!'//Retorno
    }
}

let res = parimpar(12)//Chamada
console.log(res)
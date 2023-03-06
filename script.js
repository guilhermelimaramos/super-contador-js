function contar() {
    var inicio = document.querySelector('#txtinicio')
    var i = Number(inicio.value)
    var fim = document.querySelector('#txtfim')
    var f = Number(fim.value)
    var passo = document.querySelector('#txtpasso')
    var p = Number(passo.value)
    var res = document.querySelector('#res')
    res.innerHTML = ''

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = "Tente Novamente..."
        alert("[ERRO] Dados Inválidos")
    } else {
        if (p <= 0) {
            alert('Número Inválido, considerando Passo 1')
            p = 1
        }
        if (i < f) {
            //Contagem crescente
            res.innerHTML = 'Contando:'
            for (var c = i; c <= f; c += p) {

                res.innerHTML += `👉 ${c} `
            }
            res.innerHTML += '\u{1F3C1}'
        } else {
            //Contagem decrescente
            res.innerHTML = 'Contando:'
            for (var c = i; c >= f; c -= p) {

                res.innerHTML += `👉 ${c} `
            }
            res.innerHTML += '\u{1F3C1}'
        }
    }


}
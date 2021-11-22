add.addEventListener('click', adicionar)
finish.addEventListener('click', finalizar)
limp.addEventListener('click', limpar)

let addValor = window.document.querySelector('select#valorAdicionado')
let numtxt = window.document.querySelector('input#txtnum')
let res = window.document.querySelector('div#res')

let valor = []

function isNumero(n) { //validar se na caixa tem número e se está entre 1 e 100

    return Number(n) >= 1 && Number(n) <= 100 ? true : false

}

function inList(n, l) { //validar se o número já está na lista

    return l.indexOf(Number(n)) != -1 ? true : false

}

function adicionar() { //adicionar o número na lista e array[] valor

    let num = Number(numtxt.value)

    if(isNumero(num) && !inList(num, valor)) {
        valor.push(num)

        let item = window.document.createElement('option')

        item.text = `Valor ${num} adicionado`
        item.value = `${valor.length}`
        addValor.appendChild(item)

        res.innerHTML = ''
    } else {

        window.alert('[ERRO] número informado é inválido ou já inserido')

    }
    numtxt.value = ''
    numtxt.focus()
}

function finalizar() { //fazer todos os calculos

    let num = Number(numtxt.value)

    if(valor.length != 0) { //validar se tem valor na array/lista

        let tamanhoValor = valor.length
        let maiorValor = Math.max(...valor)
        let menorValor = Math.min(...valor)
        let somaValor = 0
        for(let i in valor) {
            somaValor += valor[i]
        }
        let mediaValor = somaValor / tamanhoValor

        res.innerHTML = ''
        res.innerHTML = `<p> Ao todo, temos ${tamanhoValor} números cadastrados </p>`
        res.innerHTML += `<p> O maior valor informado foi ${maiorValor} </p>`
        res.innerHTML += `<p> O menor valor informado foi ${menorValor} </p>`
        res.innerHTML += `<p> Somando todos os valores temos, ${somaValor}`
        res.innerHTML += `<p> A média dos valores digitados é ${mediaValor}`

    } else {
        alert('[ERRO] nenhum valor informado')
    }
}

function limpar() { //botao limpar tudo
    numtxt.value = ''
    numtxt.focus()
    addValor.innerHTML = ''
    res.innerHTML = ''
    valor = []
}
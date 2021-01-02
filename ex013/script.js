let tabelaV = []

function adicionar(){
    result.innerHTML = ' '
    let num = window.document.getElementById('numero')
    let n = Number(num.value)
    let item = document.createElement('option')
    let tabela = document.getElementById('tabela')
    
    if(num.value.length == 0){
        window.alert('Campo Vazio')
    }else if(n<1 || n>100){
        window.alert('Número inválido')
    }else if(tabelaV.indexOf(n) >= 0){
        window.alert('Número já existe')
        console.log(tabelaV.length)
    }else{
        tabelaV.push(n)            
        item.text = `Valor ${n} foi adicionado`
        tabela.appendChild(item)
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    let result = window.document.getElementById('result')
    result.innerHTML = ' '
    result.innerHTML += `Ao todo temos ${tabelaV.length} números cadastrados <br>`
    tabelaV.sort()
    let soma = 0
    for(let c in tabelaV){
        soma += tabelaV[c]
        if(c == tabelaV.length-1){
            result.innerHTML += `O maior valor informado foi ${tabelaV[c]} <br>`
        }else if(c==0){
            result.innerHTML += `O menor valor informado foi ${tabelaV[c]} <br>`
        }
    }
    result.innerHTML+=`A soma dos valores foi ${soma} <br>`
    result.innerHTML+=`A média dos valores digitador foi ${soma/tabelaV.length}<br>`
}

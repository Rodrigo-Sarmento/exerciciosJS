function calcular(){
    let num = window.document.getElementById('numero')
    let table = window.document.getElementById('seltab')
    let n = Number(num.value)

    if(num.value.length==0){
        window.alert('Campo em branco')
    }else{
        table.innerHTML = ''     
        for(let c = 0; c<=10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            table.appendChild(item)
        }       
    }
}


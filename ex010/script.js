var result = window.document.getElementById('result')
var sex = window.document.getElementsByName('radio')
function verificar(){
    var tano = window.document.getElementById('ano')
    var ano = Number(tano.value)
    var img = window.document.getElementById('img')
    var sec = window.document.getElementById('section')
    var idade = 2020 - ano
  
    sec.style.height = '500px'
    
    if(ano <= 1960 && sex[0].checked){      
        img.src = "./images/velho-m250x.jpg"
        result.innerText = `Detectamos uma pessoa de ${idade} anos`
    }else if (ano <= 1960 && sex[1].checked){
        img.src = "./images/velha-f250x.jpg"
        result.innerText = `Detectamos uma pessoa de ${idade} anos`
    }else if (ano <= 1990 && sex[0].checked){
        img.src = "./images/adulto-m250x.jpg"
        result.innerText = `Detectamos uma pessoa de ${idade} anos`
    }else if (ano <= 1990 && sex[1].checked){
        img.src = "./images/adulto-f250x.jpg"
        result.innerText = `Detectamos uma pessoa de ${idade} anos`
    }else if (ano <= 2004 && sex[0].checked){
        img.src = "./images/adolescente-m250x.jpg"
        result.innerText = `Detectamos uma pessoa de ${idade} anos`
    }else if(ano <= 2004 && sex[1].checked){
        img.src = "./images/adolescente-f250x.jpg"
        result.innerText = `Detectamos uma pessoa de ${idade} anos`
    }else if(ano <= 2016 && sex[0].checked){
        img.src = "./images/crianca-m250x.jpg"
        result.innerText = `Detectamos uma pessoa de ${idade} anos`
    }else if(ano <= 2016 && sex[1].checked){
        img.src = "./images/crianca-f250x.jpg"
        result.innerText = `Detectamos uma pessoa de ${idade} anos`
    }else if(ano <= 2020 && sex[0].checked){
        img.src = "./images/bebe-m250x.jpg"
        result.innerText = `Detectamos uma pessoa de ${idade} anos`
    }else if(ano<=2020 && sex[1].checked){
        img.src = "./images/bebe-f250x.jpg"
        result.innerText = `Detectamos uma pessoa de ${idade} anos`
    }
}

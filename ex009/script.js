function carregar(){
    var agora = new Date()
    var hora = agora.getHours()
    var img = window.document.getElementById('img')
    var phora = window.document.getElementById('hora')

    phora.innerHTML = `Agora são ${hora} horas`
    
    if(hora >= 5 && hora < 12){
        img.src = './imagens/manha225x.png'
        document.body.style.background = '#e2cd9f'
    }else if(hora >=12 && hora<18){
        img.src = './imagens/tarde225x.jpg'
        document.body.style.background = '#b9846f'
    }else{
        img.src = './imagens/noite225x.jpg'
        document.body.style.background = '#515154'
    }
 }
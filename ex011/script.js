function contar(){
    var inicio = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('passo')
    var result = window.document.getElementById('result')

    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    var t = ''

    if(i==0){
        window.alert('[ERRO] o inicio não pode ser zero')
    }else if(p==0){
        window.alert('[OBS] O passo não pode ser zero então consideramos ele como 1')
        p = 1
    
        for(i; i <= f; i+=p){
            t+=i+' &#x1F449 '
        } 
        result.innerHTML = t+' &#x1F3C1 '

    }else if(i>f){
        for(i; i >= f; i-=p){
            t+=' &#x1F449 '+i
        }
        result.innerHTML = t+' &#x1F3C1 '
    }else{
        for(i; i <= f; i+=p){
            t+=i+' &#x1F449 '
        } 
        result.innerHTML = t+' &#x1F3C1 '
    }
    
}
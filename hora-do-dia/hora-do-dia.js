function carregar() {
    var msg = window.document.getElementById('msg')
    img = window.document.getElementById('imagen')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = (`são ${hora} horas`)
    
    if (hora >= 0 && hora < 12) {
        msg.innerHTML = (`Bom Dia! são ${hora} horas`)
        document.body.style.backgroundColor = "#FEFD03"
    }
    else if (hora >= 12  && hora < 18 ){
        msg.innerHTML = (`Boa Tarde! são ${hora} horas`)
        document.body.style.backgroundColor  = "#BE834E"
    } else  {
        msg.innerHTML = (`Boa Noite Guerreiro, são ${hora} horas`)
    document.body.style.backgroundColor = "#202124"
    }
    }
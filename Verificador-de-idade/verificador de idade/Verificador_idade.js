function verificar(){
    let data = new Date()//aqui é pra podermos pegar  informações de data
    let ano  = data.getFullYear()// aqui salvamos o ano atual dentro dessa variavel
    let fano = document.getElementById("txtano")// aqui pegamos o ano informado no formulario, nota que pegamos pelo id
    let res  = document.getElementById("res")//aqui pegamos a resposta pelo id, é aquela fase no final do quadro branco
    if (fano.value.length == 0 || Number(fano.value) > ano)  {// dai criamos uma estrutura que se tiver um erro na data a gente vai dar um alerta, note que pra     gente  pegar o ano do formulario o "fano" a gente tem que converter pra number pq do formulario ele vem como string. e olha a gente usando a variavel do ano atual ali
        window.alert("Verifique os Dados e tente Novamente")
    } else{// Pronto caso não tenha nada errado com o ano informado a gente já cai pra essa parte de processamento dos dados pra dar um resultado
        let fsex   = document.getElementsByName("radsex")// estamds pegando o sexo do formulario(o rad é pe o tipo de input pra essa opção é o "radio") note que a gente tá pegando por Nome não Id, ou seja pra selecionarmos qual sexo se é masc ou fem vamo usar o[] é como se fossemos selecionar elementos de uma array
        let idade  = ano - Number(fano.value)// aqui pegamos o ano da pessoa já fazendo o calculo, olha a gente convertendo pra Number dnv, e ainda tem o value que é pra pegar o valor
        let genero = ""// criamos o gênero mas por enquanto vamo deixar nulo
        let img    = document.createElement("img")// por questão de aprendizado estamos criando a imagen aqui no js invês de ser no html 
        img.setAttribute("id","foto")// aqui a gente á adicionando uma id nessa imagen vê qu bacana a sintax primeiro o atributo, dps o nome do atributo
    if( fsex[0].checked) {// vericando se for homen olha o [] sendo usado ai e veja o por que deixamos o gênero nulo anteriormente
        genero = " um Homem"
        
    } else {
        genero = "uma Mulher"
        
    }
    }
} 
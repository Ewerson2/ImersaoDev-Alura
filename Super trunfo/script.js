var cartaPaulo = {
    nome:"Homem de ferro", 
    atributos:{
       
        ataque:70,
        defesa:80,
        magia:65
    }
    }

var cartaRafa = {
    nome:"Justiceiro",
    atributos: {
        
        ataque:60,
        defesa:40,
        magia:62
    }
   
}

var cartaGui = {
    nome:"Magneto",
    atributos:{
    
    ataque:90,
    defesa:65,
    magia:60
    }
    
}

var cartaMaquina
var cartaJogador

//colocando as catas em uma variavel só
var cartas = [cartaPaulo, cartaRafa, cartaGui]

function sortearCarta(){
    //sorteia um número entre 0 e 2
    var numeroCartaMaquina = parseInt(Math.random() * 3)
    cartaMaquina = cartas[numeroCartaMaquina]

    var numeroCartaJogador = parseInt(Math.random()* 3)
    while(numeroCartaJogador == numeroCartaMaquina){
      numeroCartaJogador = parseInt(Math.random()* 3)
    }
    cartaJogador = cartas[numeroCartaJogador]
    console.log(cartaJogador)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
    exibirOpcoes()
}

function exibirOpcoes() {
    var opcoes = document.getElementById('opcoes')
    var opcoesTexto = ""
    for(var atributo in cartaJogador.atributos){
        opcoesTexto += "<input type = 'radio' name = 'atributo' value ='" + atributo + "'>" + atributo
    }
    opcoes.innerHTML = opcoesTexto
}

function obtemAtributoSelecionado() {
    var radioAtibuto = document.getElementsByName('atributo')
    for(i = 0; i < radioAtibuto.length; i++){
        if(radioAtibuto[i].checked){
            return radioAtibuto[i].value
        }
    }
}

function jogar() {
   var atributoSelecionado = obtemAtributoSelecionado()
   if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
   alert('Venceu')
} else if(cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){
    alert('Perdeu !')
} else{
    alert('Empate')
}
console.log(cartaMaquina)

}


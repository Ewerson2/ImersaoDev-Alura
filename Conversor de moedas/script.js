var valorEmDolarTexto = prompt("Qual  valor em dolar que você quer converter?")

var valorEmDolarNumero = parseInt(valorEmDolarTexto)


var valorEmReal = valorEmDolarNumero * 5.76
var valorEmRealFixado = valorEmReal.toFixed(2)


alert(valorEmReal)

//Revisao
//Variaveis var int - float - string
//alert - parseInt - parseFloat - prompt
//operações
var numeroSecreto = parseInt(Math.random() * 10)
var tentativas = 3

while (tentativas > 0) {
    var chute = parseInt(prompt("Digite um número entre 0 e 10"))

    if (numeroSecreto == chute) {
       alert(`Acertou, você ganhou ${tentativas} pontos`)
       document.write(`<h2>Pontos: ${tentativas}</h2>`)
       break
    } else if (chute > numeroSecreto) {
        alert("O número secreto é menor")
        tentativas--
    } else if (chute < numeroSecreto) {
        alert("O número secreto é maior")
        tentativas--
    }
}

if (chute != numeroSecreto) {
    alert(`Suas tentativas acabaram. O número secreto era ${numeroSecreto}`)
    document.write(`<h2>Pontos: ${tentativas}</h2>`)
}


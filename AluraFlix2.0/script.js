// Criando função que ativa quando preciona o botão -> <button onclick="adicionarFilme()">Adicionar Filme</button>
function adicionarFilme() {
    var nomeFilme = document.querySelector('#nomeFilme').value // Variavel que seleciona no HTML o input com id nomeFilme
    var imgFilme = document.querySelector('#imgFilme').value //  Variavel que seleciona no HTML o input com id imgFilme
    var trailerFilme = document.querySelector('#trailerFilme').value //  Variavel que seleciona no HTML o input com id trailerFilme

    validaFilme(nomeFilme, imgFilme, trailerFilme) // Chama a função validafilme com Nome, Imagem e Trailer e escreve na tela
    nomeFilme = document.querySelector('#nomeFilme').value = ""
    imgFilme = document.querySelector('#imgFilme').value = ""
    trailerFilme = document.querySelector('#trailerFilme').value = ""
}

// Função para verificar se os campos estão preenchidos
function validaFilme(nomeFilme, linkImagem, linkTrailer) {
    if (nomeFilme != '' && linkImagem != '' && linkTrailer != '' && linkImagem.endsWith('.jpg')) {
        listarFilmesNaTela(nomeFilme, linkImagem, linkTrailer) // chama função de listar na tela se os campos estiverem preenchidos
        alert(`${nomeFilme} Adicionado`)
    } else {
        alert("Verifique os dados")
    }
}

// Função que Adiciona Nome, Imagem, Trailer do filme na tela
function listarFilmesNaTela(filme, imagem, trailer) {
    var listaFilmes = document.querySelector('#listaFilmes') // Variavel que busca no HTML a div com id listaFilme para depois adicionar as variaveis juntas da linha 24
    var elementoFilme = `<div class="itens"><a href="${trailer}" target="_blank"><img src ="${imagem}"></a><h2>${filme}</h2></div>` // Escreve na tela
    listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme // Junção da variavel listaFilmes.innerHTML + elementoFilme
}
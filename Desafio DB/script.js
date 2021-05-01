//enviar é o ID do botão
function enviar() {
  
    //dbz é a div do input text
    var nome = document.getElementById("dbz").value
   
   nome = nome.toUpperCase()

   if(nome == 'VEGETA') {
       alert('acertou')
   }else {
       alert('errou')
   }
}
console.log("Iniciando o Exercício 11");

function verificar() {
    var txt = document.getElementById("Nacionalidade");
    var res = document.getElementById("res");
    var pais = txt.value;
}

var now = new Date();
var hora = now.getHours();
var dia = now.getDay();

switch (dia) {
    case 0:
        console.log("Hoje é Domingo");
        break;
    case 1:
        console.log("Hoje é Segunda-feira");
        break;
    case 2:
        console.log("Hoje é Terça-feira");
        break;
    case 3:
        console.log("Hoje é Quarta-feira");
        break;
    case 4:
        console.log("Hoje é Quinta-feira");
        break;
    case 5:
        console.log("Hoje é Sexta-feira");
        break;
    case 6:
        console.log("Hoje é Sábado");
        break;
}

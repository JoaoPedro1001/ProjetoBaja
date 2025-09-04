var velocidade = 81;

console.log(`A velocidade do seu carro é ${velocidade}km/h`);

if (velocidade > 80) {
    console.log(`Você ultrapassou a velocidade permitida. MULTADO!`);
} else {
    console.log(`Você está dentro da velocidade permitida. Tenha um bom dia!`);
}

var país = "EUA";

console.log(`Você está no país ${país}`);

if (país == "Brasil") {
    console.log(`Você é brasileiro!`);
} else {
    console.log(`Você é estrangeiro!`);
}

function calcular() {
    var txtv = window.document.getElementById("velocidade");
    var res = window.document.getElementById("resultado");
    var velocity = Number(txtv.value);

    res.innerHTML = `Sua velocidade é <strong>${velocity}km/h</strong><br>`;
    if (velocity > 80) {
        res.innerHTML += `Você ultrapassou a velocidade permitida. <strong>MULTADO!</strong>`;
    } else {
        res.innerHTML += `Você está dentro da velocidade permitida. Tenha um bom dia!`;
    }
}

async function digita(elemento, texto) {
    for (var j = 0; j < texto.length; j++) {
        elemento.innerHTML += texto.charAt(j);
        await new Promise((resolve) => setTimeout(resolve, 50 * Math.random()));
    }
}

function carregar() {
    var textoHorario = window.document.getElementById("texto-hora");
    var textoHorario2 = window.document.getElementById("texto-hora-2");
    var img = window.document.getElementById("img-principal");
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();
    textoHorario.innerHTML = `Agora são ${hora}:${minutos} horas.`;

    if (hora >= 0 && hora < 12) {
        // Bom dia!
        digita(textoHorario2, `Vamo tomar um café regional vamo safado 😋!`);
        img.src =
            "/acervos imagens/depositphotos_421331142-stock-photo-amazonas-theatre-at-sunset-perspective.jpg";
        document.body.style.background = "#e2cd9f";
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde!
        digita(textoHorario2, `Pourrãn ta quente ne, vá tomar um açái!`);
        img.src = "/acervos imagens/por-do-sol-manaus.webp";
        document.body.style.background = "#b9846f";
    } else {
        // Boa noite!
        digita(
            textoHorario2,
            `Ta tarde ja maninho, vá se deitar! lava esse pé preto!`
        );
        img.src = "/acervos imagens/Noite_no_Teatro_Amazonas.jpg";
        document.body.style.background = "#515154";
    }
    document.querySelector(".principal").style.opacity = "1";
}
document.addEventListener("DOMContentLoaded", carregar);

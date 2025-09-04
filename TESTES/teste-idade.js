function autismo(autismo) {
    var wallpaper = window.document.getElementById("wallpaper");
    var idade = Number(window.document.getElementById("idade").value);
    var genero = document.querySelector('input[name="genero"]:checked').value;
    var imagem = window.document.getElementById("imagem-autista");
    var descricao = window.document.getElementById("descricao-autista");

    let faixadeidade;
    if (idade <= 13) {
        faixadeidade = "criança";
    } else if (idade > 13 && idade < 45) {
        faixadeidade = "adulto";
    } else {
        faixadeidade = "idoso";
    }

    switch (genero) {
        case "masculino":
            switch (faixadeidade) {
                case "criança":
                    wallpaper.style.backgroundImage =
                        "url('/acervos imagens/e7A2gI.jpg')";
                    imagem.src = "/acervos imagens/channels4_profile.jpg";
                    imagem.style.display = "block";
                    descricao.innerHTML = `Parabéns, voce é um menino autista sonicker de ${idade} anos!!`;
                    break;
                case "adulto":
                    wallpaper.style.backgroundImage =
                        "url('/acervos imagens/i-tried-to-recreate-one-of-the-classic-minecraft-wallpaper-v0-mfhdfwieyp9a1.jpg')";
                    imagem.src =
                        "/acervos imagens/bcbe81a9731c37d270fc7e374ad885c3.jpg";
                    imagem.style.display = "block";
                    descricao.innerHTML =
                        "Parabéns, Voce é um homem autista muito foda!!";
                    break;
                case "idoso":
                    wallpaper.style.backgroundImage =
                        "url('/acervos imagens/capa.jpg')";

                    imagem.src =
                        "/acervos imagens/TAWYDO4W6NJ2ZISO5WEXHUDY2Q.avif";
                    imagem.style.display = "block";
                    descricao.innerHTML = "Parabéns, Voce é um senhor fusca!!";
                    break;
            }
            break;

        case "feminino":
            switch (faixadeidade) {
                case "criança":
                    wallpaper.style.backgroundImage =
                        "url('/acervos imagens/5226924_6b1f553605b8196.jpg')";

                    imagem.src = "/acervos imagens/Gq18LlgWoAADltT.jpg";
                    imagem.style.display = "block";
                    descricao.innerHTML =
                        "Parabéns, Voce é as filhas da Virginia no moedor de carne!!";
                    break;
                case "adulto":
                    wallpaper.style.backgroundImage =
                        "url('/acervos imagens/500316354_9993931047370315_6971607821005275228_n.jpg')";

                    imagem.src =
                        "/acervos imagens/503376995_10029467113816708_3310370364957255365_n.jpg";
                    imagem.style.display = "block";
                    descricao.innerHTML =
                        "Parabéns, voce é a EMILLY FARIAS COSTA";
                    break;
                case "idoso":
                    wallpaper.style.backgroundImage =
                        "url('/acervos imagens/jogo_de_banheiro_em_croche_azul_1995_1_20240226132406.webp')";

                    imagem.src =
                        "/acervos imagens/vopatiatelier_326132559_686848606467615_7402782663403840662_n-819x1024.jpg";
                    imagem.style.display = "block";
                    descricao.innerHTML =
                        "Parabéns, Voce é uma idosa pertubada autista!!";
                    break;
            }

            break;
    }
}

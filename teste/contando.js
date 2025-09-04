var processando = false;
var cancelando = false;

async function Contar() {
  if (processando) {
    alert(`Contagem em progresso!`);
    return;
  }

  var inicio = Number(document.getElementById("inicio").value);
  var fim = Number(document.getElementById("fim").value);
  var passo = Number(document.getElementById("passo").value);
  var res = document.getElementById("res");

  res.innerHTML = "";

  if (inicio == 0 && fim == 0 && passo == 0) {
    res.innerHTML = `<div class="alerta">Valores não informados.</div>`;
    return;
  } else if (inicio > fim || inicio == fim) {
    res.innerHTML = `<div class="alerta">O Inicio deve ser maior que o Fim!.</div>`;
    return;
  } else if (passo <= 0) {
    res.innerHTML = `<div class="alerta">O Passo deve ser maior que 0</div>`;
    return;
  }

  processando = true;

  for (var resultado = inicio; resultado <= fim; resultado += passo) {
    if (cancelando) {
      res.innerHTML = `<div class="alerta">Operação Cancelada!</div>`;
      cancelando = false;
      break;
    }

    let div = document.createElement("div");
    div.innerHTML = `<div class="numero_container">
    <div class="numero">${resultado < 10 ? "0" : ""}${resultado}</div>
    <span class="seta"></span>
  </div>`;
    res.appendChild(div.firstElementChild);

    await new Promise((resolve) => setTimeout(resolve, 150));
  }

  processando = false;
}

function Cancelar() {
  if (processando) {
    cancelando = true;
  }
}

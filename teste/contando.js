function Contar() {
  var inicio = Number(document.getElementById("inicio").value);
  var fim = Number(document.getElementById("fim").value);
  var passo = Number(document.getElementById("passo").value);
  var res = document.getElementById("res");

  res.innerHTML = "";

  for (var resultado = inicio; resultado <= fim; resultado += passo) {
    if (resultado + passo > fim) {
      res.innerHTML += ` ${resultado}`;
    } else {
      res.innerHTML += ` ${resultado} ➔`;
    }
  }
}

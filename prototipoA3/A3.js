var txt = "!Projeto Baja!";
var speed = 50;
var titulo = document.getElementById("titulo_baja");

for (let i = 0; i < txt.length; i++) {
  setTimeout(function () {
    titulo.innerHTML += txt.charAt(i);
  }, i * speed);
}

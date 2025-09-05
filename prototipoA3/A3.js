var txt = "!PROJETO BAJA!";
var speed = 100;
var titulo = document.getElementById("titulo_baja");

for (let i = 0; i < txt.length; i++) {
  setTimeout(function () {
    document.getElementById("titulo_baja").innerHTML += txt.charAt(i);
  }, i * speed);
}

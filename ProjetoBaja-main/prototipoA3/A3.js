const escreveTexto = async (elemento, txt, speed) => {
  for (const char of txt.split("")) {
    await new Promise((resolve) => setTimeout(resolve, speed * Math.random()));
    elemento.textContent += char;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const titulo = document.getElementById("titulo_baja");
    escreveTexto(titulo, "Projeto Baja!", 100);
  }, 400);
});

const escreveTexto2 = async (elemento, txt, speed) => {
  for (const char of txt.split("")) {
    await new Promise((resolve) => setTimeout(resolve, speed * Math.random()));
    elemento.textContent += char;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const titulo = document.getElementById("h1Trajetoria");
    escreveTexto(titulo, "Nossa Trajetória", 100);
  }, 400);
});

document.addEventListener("scroll", function () {
  document.querySelectorAll(".boxtop").forEach(function (item) {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      item.classList.add("active");
    }
  });
});

window.addEventListener("DOMContentLoaded", () => {
  document.dispatchEvent(new Event("scroll"));
});

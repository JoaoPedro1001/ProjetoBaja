let fatias = [
  "primeira",
  "segunda",
  "terceira",
  "quarta",
  "quinta",
  "sexta",
  "sétima",
  "oitava",
];

let i = 0;

for (i = 0; i < fatias.length; i++) {
  console.log(`Meu deus que pizza gostosa, já to na ${fatias[i]} fatia!`);
}

while (i < fatias.length) {
  console.log(`Meu deus que pizza gostosa, já to na ${fatias[i]} fatia!`);
  i++;
}

fatias.forEach((f) => {
  console.log(`comi ja ${f} fatias`);
});

console.log("Acabou a pizza :(");

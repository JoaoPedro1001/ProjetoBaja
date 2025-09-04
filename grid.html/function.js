for (var pizza = 12; pizza >= 0; pizza -= 2) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  if (pizza > 0) {
    console.log("Eu tenho " + pizza + " pedaços de pizza sobrando");
  } else {
    console.log("Acabou a pizza :(");
  }
}

console.log("dom js");

const user = "mike";

console.log("user ===", user);

//h2 subtitle

window.subtitleEl = document.body.children[1];

//nudazom pries tai esancio el spalva

subtitleEl.previousElementSibling.style.color = "tomato";

//padidinti font size po subtitleEl esancio elemento antram vaikiniam el

subtitleEl.nextElementSibling.children[1].style.fontSize = "50px";

//nudazyti zaliai elementa ant kurio paspaudem

document.body.addEventListener("click", (event) => {
  console.log("paspaudei");
  //visas ivykio/evento objektas
  //elementas ant kurio buvo paspausta
  const paspaustasEl = event.target;
  console.log(`event.target===`, event.target);
  //keiciam is juodos i zalia ir atgal
  if (paspaustasEl.style.color === "green") {
    paspaustasEl.style.color = "black";
    const dabartinisTextas = paspaustasEl.textContent;
    paspaustasEl.textContent = dabartinisTextas.replace("--zalia", "");
  } else {
    paspaustasEl.style.color = "green";
    paspaustasEl.textContent += "--zalia";
  }
});

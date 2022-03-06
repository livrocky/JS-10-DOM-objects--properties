//paspaudus ant mygtuko ASC keiciasi i DESC ir atvirksciai

const BtnEl = document.getElementById("sort-btn");
const orderEl = BtnEl.firstElementChild;
console.log("orderEl===", orderEl);

BtnEl.addEventListener("click", (event) => {
  console.log("paspaudei");
  const paspaustasEl = event.target;
  console.log("paspaustas target===>", paspaustasEl);
  if (paspaustasEl.textContent === "Sort ASC") {
    paspaustasEl.textContent = "Sort DESC";
  } else {
    paspaustasEl.textContent = "Sort ASC";
  }
});

//jei dabartine reiksme desc tai norime pakeisti i asc, kitu atveju paliekam desc.

//PASIZIUREK I DOM JS IR I PRAEITOS PASKAITOS DOM SU SPALVOM. ANALOGISKAS SPRENDIMAS.

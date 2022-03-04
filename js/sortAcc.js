//paspaudus ant mygtuko ASC keiciasi i DESC ir atvirksciai

// const btnEl = document.body.children[1];
// btnEl.addEventListener("click", (event) => {
//   const btnEl = event.target;
//   if ((btnEl.textContent = "ASC")) {
//     btnEl.textContent = "DESC";
//     const dabartinisBtn = btnEl.textContent;
//   } else if ((dabartinisBtn.textContent = "DESC")) {
//     dabartinisBtn.textContent = "ASC";
//   }
// });

// const btnEl = document.body.children[1];
// btnEl.addEventListener("click", (event) => {
//   btnEl.textContent = "DESC";
// });

const BtnEl = document.getElementById("sort-btn");
const orderEl = BtnEl.firstElementChild;
console.log("oderEl===", orderEl);

BtnEl.addEventListener("click", () => {
  orderEl.textContent = "DESC";
  if ((orderEl.textContent = "DESC")) {
    orderEl.textContent = "ASC";
  }
});

// paspaudus ant mygtuko ASC keicias i DESC ir atvirksciai

//2. kai paspaudiam ant Question 1 parodom po juo esanti elementa,
// dar karta paspaudus paslepiam (classList.toggle())

// 3. padarom kad paspaudus ant bet kurio Question el butu parodomas po juo esantis el

// 4. padarom kad kai paspaudziam ant elemento, jei yra atsidares kazkuris kitas, tai uzdarom atsidariusius ir paliekam atidaryta tik ta kuri paspaudem.

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

//2. kai paspaudiam ant Question 1 parodom po juo esanti elementa,
// dar karta paspaudus paslepiam (classList.toggle())

// const titleEl = document.querySelector(".acc__title");
// const textEl = document.querySelector(".acc__text");
// console.log(`titleEl===`, titleEl);
// titleEl.addEventListener("click", () => {
//   textEl.classList.toggle("acc__text");
// });

// 3. padarom kad paspaudus ant bet kurio Question el butu parodomas po juo esantis el

const accordionEl = document.querySelector(".accordion");
const textEl = document.querySelector(".acc__text");
const titleEl = document.querySelector(".acc__title");
const textEl2 = document.body.children[2].children[3];
const textEl3 = document.body.children[2].children[5];

accordionEl.addEventListener("click", (event) => {
  console.log(event);

  const clickedTitle = event.target;
  console.log("clickedTitle===>", clickedTitle);
  if (clickedTitle.textContent === "Question 1") {
    textEl.classList.toggle("acc__text");
  } else if (clickedTitle.textContent === "Question 2") {
    textEl2.classList.toggle("acc__text");
  } else if (clickedTitle.textContent === "Question 3") {
    textEl3.classList.toggle("acc__text");
  }
});

//__________PAMOKOS METU_____________//

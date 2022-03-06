//1. Susikuriame objektą "car". Duodame jam tris properties: "doors", "color", "brand". Reikšmes įrašykite patys, tik atminkite - doors bus skaičius, o color ir brand - string'ai. Pasiconsole'inkite ir patikrinkite ar matosi car objektas, ar galite atskirai pasiimti vieną iš jo parametrų (pvz. car.doors).

// const car = {
//   doors: 4,
//   colors: "red",
//   brands: "BMW",
// };

// if (car.doors === 5) {
//   // alert("car has 5 doors");
// } else if (car.doors === 4) {
//   // alert("car has 4 doors");
// } else {
//   // alert("turi neiprasta sk duru");
// }

// console.log(car.colors);

//2. Sukuriame formą su dviem input - name ir surname. Pateikus formą, JS turi pasiimti vardą ir pavardę ir sukurti objektą pavadinimu 'person'. Šis objektas turės du parametrus - name ir surname. Kai tik objektas susikuria (t.y. dar addEventListener funkcijoje) - atsispausdink objektą ir pažiūrėk ar viskas gerai veikia. Hint: už funkcijos ribų negali atspausdinti objekto, nes const person = {} yra limituotas konkrečiame bloke (šiuo atveju - funkcijoje). Už jos ribų jis neegzistuoja.

// const fullName = document.querySelector("form");
// fullName.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const Name = document.getElementById("name").value;
//   const Lname = document.getElementById("lname").value;
//   console.log(`Name===>`, Name, `Lname===>`, Lname);

//   const person = {
//     name: Name,
//     lname: Lname,
//   };
//   console.log(person);
// });

//3. Sukurk formą, kurioje vartotojas įrašo vardą ir įveda amžių. Pateikus duomenis, turi susikurti objektas, kuriame du properties - name ir isLegalAge. Name - string, o isLegalAge - boolean.

const fullName = document.querySelector("form");
fullName.addEventListener("submit", (event) => {
  event.preventDefault();
  // console.log(event);
  const name = event.target[0].value;
  const age = event.target[1].value;
  const isLegalAge = age >= 18 ? true : false;
  console.log(name, `is legal age?`, isLegalAge);
});

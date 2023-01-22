// let zmienna = 12;

// console.log(
//   `postdekrementacja warość zmiennej przed wykonaniem działania to ${zmienna}`
// );

// let wynik = zmienna++ + 18;

// console.log(`wynik to ${wynik}`);
// console.log(
//   `postdekrementacja warość zmiennej po wykonaniu działania działania to ${zmienna}`
// );

// let zmienna2 = 12;

// console.log(
//   `predekrementacja warość zmiennej przed wykonaniem działania to ${zmienna}`
// );

// let wynik2 = ++zmienna2 + 18;

// console.log(`wynik to ${wynik2}`);
// console.log(
//   `predekrementacja warość zmiennej po wykonaniu działania działania to ${zmienna2}`
// );

// let valueFromUser = prompt("Podaj wiek");

// if (valueFromUser >= 18) {
//   console.log(`Zapraszam na stronę, jesteś pełnoletni`);
// } else {
//   console.log(`Opuść stronę masz ${valueFromUser} lat`);
// }

// let number = 5;
// while (number <= 10) {
//   console.log(number);
//   number++;
// }

// for (let i = 0; i <= 200; i++) {
//   console.log(i / 2);
// }

// for (let i = 5; i <= 50; i++) {
//   console.log(i / 2);
// }

// for (let i = 0; i <= 100; i++) {
//   if (i % 8 === 0) {
//     console.log(i);
//   }
// }

// while (prompt("Podaj liczbę") % 2 != 0) {
//   alert("nie podzilne");
// }
// alert("podzielne");

// const add = (a, b, c) => {
//   return a + b + c;
// };

// function add(a, b, c) {
//   return a + b + c;
// }

// function showSumNextNumbers(startNumber) {
//   let sum = 0;

//   for (let i = startNumber; i < startNumber + 11; i++) {
//     sum += i;
//   }
//   return sum;
// }

// let startMNumber = parseInt(prompt("podaj liczbe startowa"));
// let result = showSumNextNumbers(startMNumber);
// console.log(`suma kolejnych 10 liczb od ${startMNumber} to ${result}`);

// function showTree(levelsCount) {
//   for (let level = 1; level < levelsCount; level++) {
//     let row = "";
//     //odstep
//     for (let space = 1; space < levelsCount; space++) {
//       row += " ";
//     }

//     //part of the tree
//     for (let tree = 1; tree < 2 * level - 1; tree++) {
//       row += "*";
//     }
//     console.log(row);
//   }
// }
// showTree(10);
// let a = prompt("podaj liczbę");

// function czyParzysta(a) {
//   if (a % 2 === 0) {
//     console.log(`liczba ${a} jest parzysta`);
//   } else {
//     console.log(`liczba ${a} nie jest parzysta`);
//   }
// }

// czyParzysta();

function count(priceNet, vat) {
  let countGross = priceNet * (1 + vat);
  return countGross;
}

console.log(count(2000, 0.23));

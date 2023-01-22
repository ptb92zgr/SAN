function poprzedniePrzyklady() {
  //alert("Witaj świecie");
  //alert(szuflada1);
  // alert(szuflada2);

  {
    var zmienna1 = "test";
    let zmienna2 = "test2";
  }

  // typy proste
  var szuflada1 = "Witaj świecie 1";
  let szuflada2 = "Witaj świecie 2";
  const szuflada_$3 = "Witaj Świecie";
  const kluczDoApi = "dasda";

  szuflada1 = "Witaj świecie 3";
  // szuflada_$3 = "Błąd";
  let zmiennaTekstowa = "ciag znaków";
  let zmiennaTekstowa2 = `Ciag znaków`;

  let zmiennLiczbowa = 12;
  let zmiennLiczbowa2 = 124;
  let zmiennLiczbowa3 = 124 + 45;

  let zmiennaBoolowska = true;
  let zmiennaBoolowskaFalse = false;

  var zmiennaPusta = undefined;
  zmiennaTekstowa = undefined;
  zmiennaNull = null;

  // typy złozone
  var zmiennaObiektowa = {}; // obiekt
  var zmiennaTablicowa = []; // tablica

  const nowaZmiennaTekstowa = szuflada1 + szuflada2;
  console.log(nowaZmiennaTekstowa);

  console.log(1 + "2");
  console.log(1 - "kotek");

  console.log("Reszta z dzielenia 20 na 3 to " + (20 % 3));

  zmiennLiczbowa = zmiennLiczbowa + 5;
  // skrócony zapis
  zmiennLiczbowa += 5;
  console.log("zmiennLiczbowa += 5", zmiennLiczbowa);

  zmiennLiczbowa -= 23 * 4;
  console.log("zmiennLiczbowa -= 23 * 4", zmiennLiczbowa);

  let wynikPorownania = 1 == "1";
  console.log("wynikPorownania = 1 == '1'", wynikPorownania);

  wynikPorownania = 1 === "1";
  console.log("wynikPorownania = 1 === '1'", wynikPorownania);

  wynikPorownania = [] == 0;
  console.log("wynikPorownania = [] == 0", wynikPorownania);

  wynikPorownania = [] === 0;
  console.log("wynikPorownania = [] === 0", wynikPorownania);

  let wynikDziałaniaOperacjiBoolowskiej =
    zmiennaBoolowska && zmiennaBoolowskaFalse;
  console.log(
    "wynikDziałaniaOperacjiBoolowskiej = zmiennaBoolowska && zmiennaBoolowskaFalse",
    wynikDziałaniaOperacjiBoolowskiej
  );
  let wynikDziałaniaOperacjiBoolowskiej2 =
    zmiennaBoolowska || zmiennaBoolowskaFalse;
  console.log(
    "wynikDziałaniaOperacjiBoolowskiej2 = zmiennaBoolowska || zmiennaBoolowskaFalse",
    wynikDziałaniaOperacjiBoolowskiej2
  );

  ///////
  let wynikDziałaniaJakiesFnc = undefined;

  let zmiennaDoPrzetworzenia = wynikDziałaniaJakiesFnc || 12;
  console.log("wynikDziałaniaJakiesFnc || 12", zmiennaDoPrzetworzenia);

  wynikDziałaniaJakiesFnc = "mam wynik";
  zmiennaDoPrzetworzenia = wynikDziałaniaJakiesFnc || 12;
  console.log("wynikDziałaniaJakiesFnc || 12", zmiennaDoPrzetworzenia);

  //// Inkr dekr
  zmiennLiczbowa = zmiennLiczbowa + 1;
  zmiennLiczbowa += 1;
  zmiennLiczbowa++;

  zmiennLiczbowa = zmiennLiczbowa - 1;
  zmiennLiczbowa -= 1;
  zmiennLiczbowa--;

  zmienna1 = 12;

  let wynikDzialanie = zmienna1++ + 18; // 30
  ///////// zamienione na:
  // wynikDzialanie = zmienna1 + 18;
  // zmienna1 = zmienna1 + 1;
  ///////////////////////
  console.log("wynikDzialanie = (zmienna1++) + 18", wynikDzialanie);

  zmienna1 = 12;
  wynikDzialanie = ++zmienna1 + 18; // 31
  console.log("wynikDzialanie = (++zmienna1) + 18", wynikDzialanie);

  zmienna1 = 12;
  wynikDzialanie = zmienna1-- + 18; // 30

  /////////zamienione na:
  // wynikDzialanie = zmienna1 + 18; // 30
  // zmiennLiczbowa = zmiennLiczbowa - 1;
  ////////////////
  console.log("wynikDzialanie = (zmienna1--) + 18", wynikDzialanie);

  zmienna1 = 12;
  wynikDzialanie = --zmienna1 + 18;
  /////////zamienione na:
  // zmiennLiczbowa = zmiennLiczbowa - 1;
  // wynikDzialanie = zmienna1 + 18; // 29
  //////////
  console.log("wynikDzialanie = (--zmienna1) + 18", wynikDzialanie);

  /////////////// IF ///////////////////////
  let wartoscDoIf = 12;

  ///  połączony kod spowoduje brak wypisania drugiego warunku który tez jest prawdziwy
  if (wartoscDoIf == "12") {
    console.log("wartość równa 12");
  } else if (wartoscDoIf > 6) {
    console.log("wartość większa od 6");
  }

  //// Powysze odpowiada takiemu kodu
  // if (wartoscDoIf == '12') {
  //     console.log('wartość równa 12');
  // } else {
  //     if (wartoscDoIf > 6) {
  //         console.log('wartość większa od 6');
  //     }
  // }

  /// Rozbijamy na coś takiego
  if (wartoscDoIf == "12") {
    console.log("wartość równa 12");
  }

  if (wartoscDoIf > 6) {
    console.log("wartość większa od 6");
  }

  let zmienna4 = "";
  let zamiennaDoWarunku = 16;

  if (zamiennaDoWarunku > 18) {
    zmienna4 = "Jesteś pełnoletni";
  } else {
    zmienna4 = "Opuśc stronę";
  }

  /// Mozna skrócić
  zmienna4 = zamiennaDoWarunku > 18 ? "Jesteś pełnoletni" : "Opuśc stronę";

  // SWITCH

  let wiek = 18;
  switch (wiek) {
    case 18:
      console.log("Witaj w dorosłości");
      break;
    default:
      console.log("Dizekuje za podanie wieku.");
  }

  // brak break wyświetli oba komunikaty
  switch (wiek) {
    case 18:
      console.log("Witaj w dorosłości");
    default:
      console.log("Dizekuje za podanie wieku.");
  }

  switch (true) {
    case wiek >= 18:
      console.log("Jesteś dorosły");
      break;
    default:
      console.log("Dizekuje za podanie wieku.");
  }

  // let wiekUzytkownika = prompt("Podaj swój wiek");

  // console.log(wiekUzytkownika >= 18 ?
  //             "Witaj ta strona jest dla Ciebie!" :
  //             "Przykro mi ale musisz opuścić tę stronę!");

  for (let i = 0; i <= 10; i++) {
    if (i < 2) {
      console.log("Omijanie działania obecnej iteracji", i);
      // continue przerywa działanie obecnej iteracji i przechodzi do następnej
      continue;
    }

    console.log(i);

    if (2 * i === 8) {
      console.log(2 * i);
      console.log("Przerywam");
      // break przerywa działanie pętli niezalenie od warunku
      break;
    }

    console.log("Dopiero po mnie i jest zwiększane o 1");
  }

  let number = 15;

  while (number <= 10) {
    console.log("Pętla While");
    console.log(number);
    number++; // usunięcie powoduje petle nieskończoną
  }

  do {
    console.log("Pętla Do-While");
    number++;
  } while (number < 10);

  /// Zadanie 1 Wypisz liczby od 1 do 100 z krokiem co 0.5

  for (let i = 0; i <= 100; i += 0.5) {
    console.log("moja liczba z zadania 1: ", i);
  }

  // inne rozwiązanie
  for (let i = 0; i <= 200; i++) {
    console.log("moja liczba z zadania 1a: ", i / 2);
  }

  let index = 0;
  while (index <= 100) {
    console.log("moja liczba z zadania 1b: ", index);
    index += 0.5;
  }

  index = 0;
  do {
    console.log("moja liczba z zadania 1c: ", index);
    index += 0.5;
  } while (index <= 100);

  // Wypisz liczby od 5 do 50 z krokiem co 3
  for (let i = 5; i <= 50; i += 3) {
    console.log("Zadanie 2", i);
  }
  // Wypisz liczby podzielne przez 8 bez reszty w zakresie od 1 do 100
  for (let i = 1; i <= 100; i++) {
    if (i % 8 == 0) {
      console.log("Zadanie 3 - liczba podzielna przez 8", i);
    }
  }

  for (let i = 8; i <= 100; i += 8) {
    // if (i % 8 == 0) {
    console.log("Zadanie 3 - liczba podzielna przez 8", i);
    // }
  }
  // Stwórz pętlę, w której użytkownik będzie podawał liczbę (wykorzystaj metodę prompt) do momentu, gdy użytkownik poda liczbę podzielną przez 2 bez reszty ad. 4

  // let userInput;

  // do {
  //     userInput = prompt("Podaj liczbę");
  // } while (userInput % 2 != 0);
}

//// FUNKCJE
dodawanie();

function dodawanie() {
  console.log("wynik dodawanania", 2 + 2);
}

dodawanie();

/// Nie mo emy iyc przed bo nie to zachowuje się jak zwykła zmienna.
// odejmowanie();
let zmiennaGlobalna = "test2";

const odejmowanie = function (a, b) {
  if (zmiennaGlobalna == "test") {
    return;
  }

  var zmiennaLokalna = "jakaś wartasc";
  console.log("wynik odejmowania", a - b);

  return a - b;
};

let wynikiOdejmowania = odejmowanie(4, 2);

console.log("Wynik działa funkcji", odejmowanie(4, 2));

function suma3Argumentow(a, b, c = 10) {
  return a + b + c;
}

console.log("Wynik działa funkcji suma3Argumentow", suma3Argumentow(4, 2, 3));
console.log("Wynik działa funkcji suma3Argumentow", suma3Argumentow(4, 2));

/// Napisać funkcje sumującą 10 kolejnych liczb i zwracających te sumę
/// Jako argument ma przyjąć liczbę startową od której liczyć
/// Liczbę podaje uytkownik za pomocą prompt

function podajSumeKolejnych10Liczb(liczbaStartowa) {
  let suma = 0;

  for (let i = liczbaStartowa; i < liczbaStartowa + 11; i++) {
    suma += i;
  }

  return suma;
}

// Dla liczb całkowitych parseInt a dla zmienno przecinkowych parseFloat
let liczbaStartowa = parseInt(prompt("Podaj liczbę startową"));

let wynikSumowania = podajSumeKolejnych10Liczb(liczbaStartowa);
console.log(
  "Suma kolejnych 10 liczb od " + liczbaStartowa + " to " + wynikSumowania
);

//  *
// ***
//*****

function rysujChoinke(liczbaPoziomow) {
  for (let poziom = 1; poziom <= liczbaPoziomow; poziom++) {
    let wiersz = "";

    // Odstęp
    for (let odstep = 1; odstep <= liczbaPoziomow - poziom; odstep++) {
      wiersz += " ";
    }

    // Część choinki
    for (let choinka = 1; choinka <= 2 * poziom - 1; choinka++) {
      wiersz += "*";
    }

    console.log(wiersz);
  }
}

rysujChoinke(4);

import React from "react";
import ReactDOM from "react-dom";
import Chart from "./components/Chart";
import KotComponent from "./components/KotComponent";

//Zadanie 2
const zadanie2 = `const myList = [1, 2, 3];
for (let i = 0; i < myList.length; i++) {
  console.log(myList[i]);
}`;

//Zadanie 4
const zadanie4 = `Closure sprawia, że możemy traktować funkcje w sposób przypominający to, jak działają obiekty. Tworzymy funkcje, które zwracają wewnętrze funkcje. Dzięki temu możemy stworzyć kilka 'instancji funkcji', które posiadają to samo ciało, ale mogą mieć inne konteksty dzięki różnym parametrom przekazywanym do funkcji zewnętrznej. Dzięki closures możemy też imitować funkcje (i zmienne) prywatne w JavaScripcie, poprzez dostęp do funkcji publicznych, wewnątrz których wywoływane są funkcje, które nie mają być bezpośrednio dostępne.`;

ReactDOM.render(
  <div>
    <h3>Zadanie 1</h3>
    <div id="pie-chart">
      <Chart />
    </div>
    <h3>Zadanie 2</h3>
    <pre>{zadanie2}</pre>
    <h3>Zadanie 4</h3>
    <div>{zadanie4}</div>
    <h3>Zadanie 5</h3>
    <KotComponent />
    <h3>Zadanie 7</h3>
    <table>
      <tr>
        <td>Wiem czym się różni EcmaScript 6 od ES5</td>
        <td>T</td>
      </tr>
      <tr>
        <td>Wiem co nowego jest w ES7 lub ES8</td>
        <td>N</td>
      </tr>
      <tr>
        <td>
          Potrafię pisać testy automatyczne zachowania stron internetowych przy pomocy narzędzi (np. Selenium, CasperJS,
          TestComplete Web, TestCafe)
        </td>
        <td>N</td>
      </tr>
      <tr>
        <td>Potrafię pisać szablony typu Mako, Jinja lub inne</td>
        <td>N</td>
      </tr>
      <tr>
        <td>Bez problemu czytam dokumentację w języku angielskim</td>
        <td>T</td>
      </tr>
      <tr>
        <td>Potrafię pisać dokumentację w języku angielskim</td>
        <td>T</td>
      </tr>
      <tr>
        <td>Potrafię pracować na systemie Linux (np. Ubuntu)</td>
        <td>T</td>
      </tr>
      <tr>
        <td>Potrafię pracować na systemie OS X</td>
        <td>Raczej T</td>
      </tr>
      <tr>
        <td>Potrafię obsługiwać systemy CMS typu Wordpress, Joomla, Drupal lub podobne</td>
        <td>T</td>
      </tr>
      <tr>
        <td>
          Potrafię postawić systemy CMS typu Wordpress, Joomla, Drupal lub podobne na serwerze na którym mam tylko
          dostęp przez SSH
        </td>
        <td>T (z Google)</td>
      </tr>
      <tr>
        <td>Potrafię zmodyfikować istniejący szablon jakiegoś CMSa</td>
        <td>T</td>
      </tr>
      <tr>
        <td>Potrafię napisać od zera nowy szablon jakiegoś CMSa</td>
        <td>Pewnie T, ale nie próbowałam</td>
      </tr>
      <tr>
        <td>Potrafię poruszać się w konsoli linuksowej / konsoli OSX</td>
        <td>T</td>
      </tr>
      <tr>
        <td>Wiem do czego służą polecenia chmod, grep, cat, ls, cp, rm, mv</td>
        <td>chmod, grep, cat, ls, cp, rm, mv</td>
      </tr>
      <tr>
        <td>Potrafię korzystać z narzędzia Chrome Inspector lub Firefox Dev Tools</td>
        <td>T</td>
      </tr>
      <tr>
        <td>Rozumiem czym są statusy HTTP i potrafię powiedzieć co oznaczają kody: 200, 302, 404, 500</td>
        <td>T</td>
      </tr>
      <tr>
        <td>Wiem co to SQLInjection, CSRF, Cookies, certyfikat HTTPS</td>
        <td>SQLInjection, Cookies, certyfikat HTTPS</td>
      </tr>
      <tr>
        <td>Wiem co to CORS</td>
        <td>N</td>
      </tr>
      <tr>
        <td>Potrafię zrozumieć pliki konfiguracyjne Nginxa lub Apache’a</td>
        <td>Nie wiem, nie widziałam ich</td>
      </tr>
      <tr>
        <td>Wiem co to Ansible lub Chef lub Puppet</td>
        <td>N</td>
      </tr>
    </table>
  </div>,
  document.getElementById("root")
);

//Zadanie 3
function isAPalindrome(sentence) {
  sentence = sentence.toLowerCase().replace(/\s+/g, "");
  let reversedSentence = "";

  for (let i = sentence.length - 1; i >= 0; i--) {
    reversedSentence += sentence[i];
  }

  return sentence === reversedSentence;
}

const sentence = "Może   jutro ta\t dama da tortu jeżom";
console.log(sentence, "is a palindrome?", isAPalindrome(sentence));

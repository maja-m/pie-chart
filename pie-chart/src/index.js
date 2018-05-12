import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

//Zadanie 2
const zadanie2 = `
Zadanie 2:
const myList = [1, 2, 3];
for (let i = 0; i < myList.length; i++) {
  console.log(myList[i]);
}`;

ReactDOM.render(
  <div>
    <div id="pie-chart">
      <App />
    </div>
    <pre>{zadanie2}</pre>
    <div>{odp}</div>
  </div>,
  document.getElementById("root")
);

//Zadanie 3
function isAPalindrome(word) {
  word = word
    .toLowerCase()
    .split(" ")
    .join("");

  let wordTemp = "";

  for (let i = word.length - 1; i >= 0; i--) {
    wordTemp += word[i];
  }

  return word == wordTemp;
}

console.log(isAPalindrome("Może jutro ta dama da tortu jeżom"));

//Zadanie 4
const odp = "";

import React, { Component } from "react";
import "./App.css";
import { Kot } from "./Kot";

class KotComponent extends Component {
  constructor() {
    super();

    this.state = {
      kot: null
    };
  }

  dodajKota(random) {
    const imie = window.prompt("Podaj imię kota: ");
    const waga = window.prompt("Podaj wagę kota:");
    if (imie && waga) {
      //this.setState({ kot: new Kot(imie, waga, random) });
      this.state.kot = new Kot(imie, waga, random);
      document.getElementById("miauczButton" + this.state.kot.id).style.display = "inline";
      document.getElementById("miauczButton" + this.state.kot.id).innerText = "Miaucz " + this.state.kot.imie;
    } else {
      alert("Podaj wartości dla imienia i wagi kota.");
    }
  }

  miaucz() {
    if (this.state.kot != null) this.state.kot.miaucz();
  }

  render() {
    const random = Math.floor(Math.random() * 1000 + 1);
    return (
      <div>
        <button onClick={() => this.dodajKota(random)}>Dodaj kota</button>
        <button id={"miauczButton" + random} className="miauczButton" onClick={() => this.miaucz()}>
          Miaucz
        </button>
      </div>
    );
  }
}

export default KotComponent;

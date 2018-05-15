import React, { Component } from "react";
import "./App.css";
import { Kot } from "./Kot";

class KotComponent extends Component {
  constructor() {
    super();

    this.state = {
      koty: []
    };
  }

  dodajKota(random) {
    const imie = window.prompt("Podaj imię kota: ");
    const waga = window.prompt("Podaj wagę kota:");
    if (imie && waga) {
      this.setState({ koty: [...this.state.koty, new Kot(imie, waga, random)] });
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
        {this.state.koty.map((kot, i) => {
          return (
            <div key={kot.id}>
              <button onClick={() => kot.miaucz()}>Miaucz {kot.imie}</button>
            </div>
          );
        })}
        <button onClick={() => this.dodajKota(random)}>Dodaj kota</button>
      </div>
    );
  }
}

export default KotComponent;

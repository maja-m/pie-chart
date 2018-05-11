import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      title: "Title of the chart",
      data: {
        Foo: 22,
        Bar: 33,
        Baz: 10.5,
        Daftcode: 8
      }
    };
  }

  getCoordinatesForPercent(percent) {
    const x = Math.cos(2 * Math.PI * percent);
    const y = Math.sin(2 * Math.PI * percent);

    return [x, y];
  }

  colors = ["Coral", "CornflowerBlue", "#00ab6b", "burlywood", "pink"];

  getSlicesData() {
    const slices = Object.keys(this.state.data);
    // let total = 0;
    // for (let i = 0; i < slices.length; i++) {
    //   total += this.state.data[slices[i]];
    // }
    const total = Object.values(this.state.data).reduce((total, value) => (total += value), 0);

    const slices2 = slices.map((slice, i) => {
      return { percent: this.state.data[slice] / total, color: this.colors[i] };
    });

    return slices2;
  }

  render() {
    const percent = 0.12;

    // const slices = [
    //   { percent: 0.1, color: "Coral" },
    //   { percent: 0.65, color: "CornflowerBlue" },
    //   { percent: 0.2, color: "#00ab6b" }
    // ];

    const slices = this.getSlicesData();
    let cumulativePercent = 0;

    const startX = this.getCoordinatesForPercent(0)[0];
    const startY = this.getCoordinatesForPercent(0)[1];
    const endX = this.getCoordinatesForPercent(percent)[0];
    const endY = this.getCoordinatesForPercent(percent)[1];

    const largeArcFlag = percent > 0.5 ? 1 : 0;

    const pathData = [`M ${startX} ${startY}`, `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`, `L 0 0`].join(" ");

    const paths = slices.map((slice, i) => {
      const [startX, startY] = this.getCoordinatesForPercent(cumulativePercent);
      cumulativePercent += slice.percent;
      const [endX, endY] = this.getCoordinatesForPercent(cumulativePercent);

      const largeArcFlag = slice.percent > 0.5 ? 1 : 0;

      const pathData = [
        `M ${startX} ${startY}`, // Move
        `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`, // Arc
        `L 0 0` // Line
      ].join(" ");

      return <path key={`slice-${i}`} d={pathData} fill={slice.color} />;
    });

    return <svg viewBox="-1 -1 2 2">{paths}</svg>;
  }
}

export default App;

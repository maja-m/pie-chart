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

  getSlicesData() {
    const slices = Object.keys(this.state.data);
    const total = Object.values(this.state.data).reduce((total, value) => (total += value), 0);

    const slices2 = slices.map((slice, i) => {
      return { percent: this.state.data[slice] / total };
    });

    return slices2;
  }

  render() {
    const slices = this.getSlicesData();
    let cumulativePercent = 0;

    const paths = slices.map((slice, i) => {
      const [startX, startY] = this.getCoordinatesForPercent(cumulativePercent);
      cumulativePercent += slice.percent;
      const [endX, endY] = this.getCoordinatesForPercent(cumulativePercent);

      const largeArcFlag = slice.percent > 0.5 ? 1 : 0;

      const pathData = [`M ${startX} ${startY}`, `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`, `L 0 0`].join(" ");

      return (
        <path
          key={`slice-${i}`}
          d={pathData}
          fill={
            "hsl(" + 360 * Math.random() + "," + (20 + 70 * Math.random()) + "%," + (85 + 10 * Math.random()) + "%)"
          }
        />
      );
    });

    return <svg viewBox="-1 -1 2 2">{paths}</svg>;
  }
}

export default App;

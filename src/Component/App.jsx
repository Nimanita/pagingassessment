import React, { useState, useEffect } from "react";

import axios from "axios";

import "../styles.css";
export default function App() {
  var prev = "<<";
  var next = ">>";
  const [i, changei] = useState(1);
  const [data3, changedata] = useState();
  const [v, changev] = useState(1);
  const [indexb, changeb] = useState({
    b1: "buttonclick",
    b2: "index",
    b3: "index",
    b4: "index",
    b5: "index"
  });
  function fetchdata() {
    axios.get("https://classmarker-app.herokuapp.com/mockData").then((res) => {
      const data = res.data;

      var x1 = v * 20 - 20;
      var y1 = v * 20;
      const index = data.slice(x1, y1);

      changedata(index);
    });
  }
  function buttonclicked() {
    const { name, value } = event.target;
    changev(value);
    changeb(() => {
      if (name === "b1") {
        return {
          b1: "buttonclick",
          b2: "index",
          b3: "index",
          b4: "index",
          b5: "index"
        };
      } else if (name === "b2") {
        return {
          b2: "buttonclick",
          b1: "index",
          b3: "index",
          b4: "index",
          b5: "index"
        };
      } else if (name === "b3") {
        return {
          b3: "buttonclick",
          b1: "index",
          b2: "index",
          b4: "index",
          b5: "index"
        };
      } else if (name === "b4") {
        return {
          b4: "buttonclick",
          b1: "index",
          b3: "index",
          b2: "index",
          b5: "index"
        };
      } else if (name === "b5") {
        return {
          b5: "buttonclick",
          b1: "index",
          b3: "index",
          b4: "index",
          b2: "index"
        };
      }
    });
  }
  useEffect(async () => {
    fetchdata();
  });
  function previousbuttonclicked() {
    x = event.target.value;
    changeb({
      b1: "buttonclick",
      b2: "index",
      b3: "index",
      b4: "index",
      b5: "index"
    });
    if (x > 1) {
      changei(i - 1);
      changev(i - 1);
    }
  }
  function nextbuttonclicked() {
    var x = event.target.value;
    changeb({
      b1: "buttonclick",
      b2: "index",
      b3: "index",
      b4: "index",
      b5: "index"
    });
    if (x < 10) {
      changei(i + 1);
      changev(i + 1);
    }
  }
  return (
    <div class="App">
      <h1>My first paging program</h1>
      <h2>Getting data from API may take some time!!!</h2>

      <div class="content-data1">
        {data3 &&
          data3.map((item) => (
            <div class="content-data" key={item.id}>
              <h1>
                {" "}
                {item.id} {item.name} {item.email} {item.phone}
              </h1>
              <h1>
                {item.job} {item.company} {item.fav}
              </h1>
            </div>
          ))}
      </div>

      <div class="paging button">
        <button
          class="previous"
          value={i}
          onClick={() => previousbuttonclicked()}
        >
          {prev}
        </button>
        <button
          class={indexb.b1}
          value={i}
          name="b1"
          onClick={() => buttonclicked()}
        >
          {i}
        </button>
        <button
          class={indexb.b2}
          value={i + 1}
          name="b2"
          onClick={() => buttonclicked()}
        >
          {i + 1}
        </button>
        <button
          class={indexb.b3}
          value={i + 2}
          name="b3"
          onClick={() => buttonclicked()}
        >
          {i + 2}
        </button>
        <button
          class={indexb.b4}
          value={i + 3}
          name="b4"
          onClick={() => buttonclicked()}
        >
          {i + 3}
        </button>
        <button
          class={indexb.b5}
          value={i + 4}
          name="b5"
          onClick={() => buttonclicked()}
        >
          {i + 4}
        </button>
        <button class="next" value={i + 4} onClick={() => nextbuttonclicked()}>
          {next}
        </button>
      </div>
    </div>
  );
}

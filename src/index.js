import React from "react";
import ReactDom from "react-dom";
import moment from "moment";
import { Next, Ovulation } from "./App.js";

ReactDom.render(
  <div>
    <div id="calendar">
      <h2 id="date_prompt">Enter last period date: </h2>
      <button id="dbutton">
        <input type="date" id="Test_Date" />
      </button>
    </div>
    <div id="prompt2"></div>
    <div id="choices"></div>
    <button id="next" class="buttons">
      Expected Period Date
    </button>
    <button id="ovulation" className="buttons">
      Possible Ovulation Window
    </button>
  </div>,
  document.getElementById("root")
);
var date;
var cycleLength;
document.getElementById("Test_Date").addEventListener("change", function () {
  date = new Date(this.value);
  console.log(date);
  ReactDom.render(
    <div id="cycleDuration">
      <br />
      <h2 id="cycleInfo">Enter average cycle length: </h2>
      <input id="duration" type="number"></input>
    </div>,
    document.getElementById("prompt2")
  );
  document.getElementById("duration").addEventListener("input", function () {
    cycleLength = this.value;
  });
});

document.getElementById("next").addEventListener("click", function () {
  ReactDom.render(
    <Next lastDate={date} cycleDuration={cycleLength} />,
    document.getElementById("choices")
  );
});
document.getElementById("ovulation").addEventListener("click", function () {
  ReactDom.render(
    <Ovulation lastDate={date} cycleDuration={cycleLength} />,
    document.getElementById("choices")
  );
});

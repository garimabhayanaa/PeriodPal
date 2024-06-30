import React from "react";
import ReactDom from "react-dom";

function Next(params) {
  const nextPeriodDate = new Date(params.lastDate);
  nextPeriodDate.setDate(
    nextPeriodDate.getDate() + parseInt(params.cycleDuration, 10)
  );
  const formattedDate = nextPeriodDate.toLocaleDateString();
  return (
    <h2 id="info">Your period will begin on or around {formattedDate}.</h2>
  );
}
function Ovulation(params) {
  const ovDate1 = new Date(params.lastDate);
  ovDate1.setDate(ovDate1.getDate() + parseInt(params.cycleDuration, 10) - 16);
  const formattedDate1 = ovDate1.toLocaleDateString();
  const ovDate2 = new Date(params.lastDate);
  ovDate2.setDate(ovDate2.getDate() + parseInt(params.cycleDuration, 10) - 12);
  const formattedDate2 = ovDate2.toLocaleDateString();
  return (
    <h2 id="info">
      Most fertile window from {formattedDate1} to {formattedDate2}.
    </h2>
  );
}

export { Next,Ovulation};


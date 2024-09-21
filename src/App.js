import React from "react";
import ReactDom from "react-dom";

function Next(params) {
  if (params.cycleDuration<20) {
    return  <h2 id="info">Invalid Cycle Duration.</h2>
  }
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
  if (params.cycleDuration<20) {
    return  <h2 id="info">Invalid Cycle Duration.</h2>
  }
  const ovDate = new Date(params.lastDate);
  ovDate.setDate(ovDate.getDate() + parseInt(params.cycleDuration, 10) - 14);
  const formattedOvulationDate = ovDate.toLocaleDateString();  
  const fertileStartDate = new Date(ovDate);
  fertileStartDate.setDate(ovDate.getDate() - 5);
  const formattedFertileStartDate = fertileStartDate.toLocaleDateString();
  return (
    <h2 id="info">Most fertile window from {formattedFertileStartDate} to {formattedOvulationDate}.</h2>
  );
}

export { Next,Ovulation};


import React, { useState } from "react";
const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

function TemperatureInput(props) {
  const handleChange = (e) => {
    props.onTemperatureChange(e.target.value);
  };

  const [temperature] = useState();
  const [scale] = useState();

  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[props.scale]}:</legend>
      <input value={props.temperature} onChange={handleChange} />
    </fieldset>
  );
}
export default TemperatureInput;

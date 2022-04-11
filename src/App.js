import React, { useState } from "react";
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

function App(props) {
  const [value, setState] = useState();

  const handleChange = (e) => {
    setState(e.target.value);
  };

  return (
    <fieldset>
      <legend>Enter temperature in Celsius:</legend>
      <input value={value} onChange={handleChange} />
      <BoilingVerdict celsius={parseFloat(value)} />
    </fieldset>
  );
}

export default App;

import convert from "lib";
import { useState } from "react";
import Input from "./Input";

const Converter = () => {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);

  const inputs = [
    {
      label: "°C",
      id: "celsius",
      value: celsius,
    },
    {
      label: "°F",
      id: "fahrenheit",
      value: fahrenheit,
    },
  ];

  const inputHandler = ({ target }) => {
    if (target.id === "celsius") {
      setCelsius(Number(target.value));
      setFahrenheit(convert(target.value, "toFahrenheit"));
    } else {
      setFahrenheit(Number(target.value));
      setCelsius(convert(target.value, "toCelsius"));
    }
  };

  const renderInputs = () =>
    inputs.map(({ id, label, value }) => (
      <Input
        label={label}
        id={id}
        handler={inputHandler}
        value={value}
        key={id}
      />
    ));

  return <main className="flex justify-center mt-40">{renderInputs()}</main>;
};

export default Converter;

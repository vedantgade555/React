import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer.jsx";
import Display from "./components/Display.jsx";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      try {
        const result = eval(calVal);
        setCalVal(result.toString());
      } catch {
        setCalVal("Error");
      }
    } else {
      setCalVal(calVal + buttonText);
    }
  };

  return (
    <>
      <section
        className={`${styles.calculator} position-absolute top-0 start-50 translate-middle-x`}
      >
        <section>
          <Display displayValue={calVal} />
        </section>
        <section className="pt-3 ps-4">
          <ButtonsContainer onButtonClick={onButtonClick} />
        </section>
      </section>
    </>
  );
}

export default App;

import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer.jsx";
import Display from "./components/display.jsx";
function App() {
  return (
    <>
      <section
        className={`${styles["calculator"]} position-absolute top-0 start-50 translate-middle-x`}
      >
        <section>
          <Display />
        </section>
        <section className="pt-3 ps-4 ">
          <ButtonsContainer></ButtonsContainer>
        </section>
      </section>
    </>
  );
}

export default App;

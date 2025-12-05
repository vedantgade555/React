import "./App.css";

function App() {
  function btnClickd() {
    console.log("button clicked");
  }

  function mouseEntered() {
    console.log("mouse entered");
  }

  function inputChanging(val) {
    console.log(val);
  }

  return (
    <>
      <div>
        <button onMouseEnter={mouseEntered} onClick={btnClickd}>
          change user
        </button>
        <button
          onClick={() => {
            console.log("btn click");
          }}
        >
          Click
        </button>

        <input
          type="text"
          placeholder="Enter Name"
          onChange={function (elem) {
            console.log(elem.target.value);
          }}
        />

        <input
          type="text"
          placeholder="Address"
          onChange={function (elem) {
            inputChanging(elem.target.value);
          }}
        />
      </div>

      <div>
        <div
          className="box"
          onMouseMove={(elem) => {
            console.log(elem.clientX);
            console.log(elem.clientY);
          }}
        ></div>
      </div>
    </>
  );
}

export default App;

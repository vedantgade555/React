import ClockHeading from "./components/ClockHeading"
import ClockSlogan from "./components/ClockSlogan"
import CurrentTime from "./components/CurrentTime"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
function App() {


  return(
    <div className="container title">
     <center>
      <ClockHeading></ClockHeading>
      <ClockSlogan></ClockSlogan>
      <CurrentTime></CurrentTime>
     </center>
    </div>
  );
}

export default App

import './App.css'
import Card from './Components/Card'

function App() {
  return (
    <>
    <div className="parent">
      <Card user = "Aman" age={18} />
      <Card user = "Sarthak" age={18} />

      </div>
    </>
  );
}

export default App;

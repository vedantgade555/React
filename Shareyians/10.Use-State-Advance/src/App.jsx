import './App.css'
import { useState } from 'react'

function App() {
  const [num, setNum] = useState({user:'rishi',age:17})

  const btnClicked = () => {
     setNum(prev=>({...prev,age:50}))
  }

  return (
    <div>
      <h1>{num.user} , {num.age}</h1>
      <button onClick={btnClicked}>Clicked</button>
    </div>
  )
}

export default App

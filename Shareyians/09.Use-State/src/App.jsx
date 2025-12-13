import { useState } from 'react'
import './App.css'

function App() {

  // const [num, setNum] = useState(0)
  // const [user, setuser] = useState('Vedant')
  // const [users, setusers] = useState([10,20,30])

  // function changeNum(){
  //   setNum(num+1);
  // }


  const [num, setnum] = useState(0)
  function increase(){
    setnum(num+1);
  }

  function decrease(){
    if(num>0){
      setnum(num-1);
    }
  }

  function jump5(){
    setnum(num+5);
  }
  return (
    <>
     {/* <h1>Value of a is {num} <br /> array is {users} <br /> user is {user}</h1>

     <button onClick={changeNum}>clicked</button> */}



      <h1>{num}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={jump5}>JumpBy5</button>




    </>
  )
}

export default App

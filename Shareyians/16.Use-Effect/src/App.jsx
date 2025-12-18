import React from 'react'
import { useEffect, useState } from 'react'

const App = () => {

  const [num1, setnum1] = useState(0)
  const [num2, setnum2] = useState(0)


  useEffect(function(){
    console.log('num 1 change ...')
  }, [num1])   // when num 1 value change only that time it will run

  useEffect(function(){
    console.log('num 2 change ...')
  }, [num2]) 

  return (
    <div>
      <h1>{num1} {num2}</h1>
      <button onClick={() => setnum1(num1+1)}>num1</button>
      <button onClick={() => setnum2(num2+1)}>num2</button>

    </div>
  )
}

export default App

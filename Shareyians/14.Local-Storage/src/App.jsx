import React from 'react'

const App = () => {
  localStorage.clear();
  sessionStorage.clear();

  // localStorage.setItem('user','Vedant')
  // const user = localStorage.getItem('user')
  // localStorage.removeItem('user')
  // console.log(user)

  const user = {
    userName : 'Vedant',
    age: 21,
    city: 'Pune'
  }

  localStorage.setItem('user',JSON.stringify(user))

  const user1 = JSON.parse(localStorage.getItem('user'))
  console.log(user1)
  return (
    <div>App</div>
  )
}

export default App
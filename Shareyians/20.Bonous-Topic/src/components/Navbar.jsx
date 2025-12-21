import React from 'react'

const Navbar = (props) => {

  function changeTheme() {
    if (props.theme === 'light') {
      props.setTheme('dark')
    } else {
      props.setTheme('light')
    }
  }

  return (
    <div>
      <button onClick={changeTheme}>
        Change Theme
      </button>
    </div>
  )
}

export default Navbar

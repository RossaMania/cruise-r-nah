import React from 'react'
import DarkModeSwitch from './DarkModeSwitch'
import MenuItem from './MenuItem'

function Header() {
  return (
    <div>
      <div>
        {/* Menu */}
        <MenuItem />
      </div>
      <div>
        <DarkModeSwitch />
        {/* Logo */}
      </div>
    </div>
  )
}

export default Header
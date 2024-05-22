import React from 'react'

const NavItems = ({navComponent}) => {
  return (
    <ul className="flex justify-center hover:cursor-pointer"> {/* Adjust spacing as needed */}
      {navComponent.map((item) => (
        <li key={item.id} className="py-1 px-3 hover:shadow">
          {item.label}
        </li>
      ))}
    </ul>
  )
}

export default NavItems
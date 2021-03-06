import React from 'react'

console.log("adding new changes")

const Button = ({ type = 'button', children, onClick }) => (
  <div>
    <button type={type} className="button" onClick={onClick}>
      {children}
    </button>
  </div>
)

export default Button

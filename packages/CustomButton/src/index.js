import React from 'react'

console.log("adding extra lines to be log")

const Button = ({ type = 'button', children, onClick }) => (
  <div>
    <button type={type} className="button" onClick={onClick}>
      {children}
    </button>
  </div>
)

export default Button

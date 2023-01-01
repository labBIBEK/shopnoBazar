import React from 'react'

const PrimaryButton = ({ children, classes, handler }) => {
  return (
    <button
      onClick={handler}
      className={`hover:text-gray-100 bg-gradient-to-r from-yellow-300 to-lime-800 text-white ${classes}`}
    >
      {children}
    </button>
  )
}

export default PrimaryButton

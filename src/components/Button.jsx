import React from 'react'

const Button = ({text,className,onClick}) => {
  return (
    <div className={`px-4 py-2 ${className}`} onClick={onClick}>
      {text}
    </div>
  )
}

export default Button

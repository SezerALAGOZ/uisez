import React from 'react'

export const ButtonComponent = (props) => {
  return <button {...props}>{props.text}</button>
}
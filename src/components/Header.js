import React from 'react'

export default function Header(props) {
  return (
    <div className="text-center">
      <h1>This is the {props.text}</h1>
    </div>
  )
}

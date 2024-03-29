import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { CountContext } from '../context/CountContext'

export default function Detail() {
  const { count, sumar } = useContext(CountContext)

  return (
    <>
      <h1>{count}</h1>
      <div>
        <button onClick={sumar}>Sumar</button>
      </div>
      <Link to="/">Ir al inicio</Link>
    </>
  )
}

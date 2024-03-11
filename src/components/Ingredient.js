import React, { useState } from 'react'

function Ingredient(props) {
  const [quantity, setQuantity] = useState(props.quantity)
  return (
    <tr>
      <td>{props.description}</td>
      <td>
        {quantity} g
        <button onClick={() => setQuantity(quantity - 1)}> - </button>
        <button onClick={() => setQuantity(quantity + 1)}> + </button>
      </td>
    </tr>
  )
}

export default Ingredient

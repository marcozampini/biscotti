import React, { useState } from 'react'

function Ingredient(props) {
  const [quantity, setQuantity] = useState(props.quantity)
  return (
    <div className="ingredient">
      <label>{props.description}</label>
      <input type="number" name={props.name} value={quantity} />
    </div>
  )
}

export default Ingredient

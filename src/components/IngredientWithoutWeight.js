function IngredientWithoutWeight(props) {
  return (
    <div className="ingredient">
      <div>{props.description}</div>
      <div className="quantity-description">{props.quantity}</div>
    </div>
  )
}

export default IngredientWithoutWeight

function IngredientWithoutWeight(props) {
  return (
    <div className="ingredient">
      <div>{props.description}</div>
      <div>{props.quantity}</div>
    </div>
  )
}

export default IngredientWithoutWeight

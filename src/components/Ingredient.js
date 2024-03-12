function Ingredient(props) {
  return (
    <div className="ingredient">
      <label htmlFor={props.name}>{props.description}</label>
      <input
        type="number"
        id={props.name}
        value={props.quantity}
        onChange={(e) => props.onChange(parseFloat(e.target.value))}
      />
    </div>
  )
}

export default Ingredient

function Ingredient(props) {
  return (
    // The whole row is the label, so tapping anywhere on it focuses the input
    <label className="ingredient">
      <span>{props.description}</span>
      <input
        // type="text" because number inputs don't support selecting their
        // content; inputMode still opens the numeric keypad on mobile
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        name={props.name}
        value={props.quantity}
        // Select the whole value on focus, so typing replaces it
        onFocus={(e) => e.target.setSelectionRange(0, e.target.value.length)}
        // Weights are whole grams: keep digits only
        onChange={(e) => props.onChange(e.target.value.replace(/\D/g, ''))}
      />
    </label>
  )
}

export default Ingredient

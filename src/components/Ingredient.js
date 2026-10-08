import AddedCheckbox from './AddedCheckbox'

function Ingredient(props) {
  return (
    <div className={props.added ? 'ingredient added' : 'ingredient'}>
      <AddedCheckbox
        description={props.description}
        added={props.added}
        onToggle={props.onToggle}
      />
      {/* The rest of the row is the label, so tapping it focuses the input */}
      <label className="ingredient-field">
        <span className="ingredient-name">{props.description}</span>
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
    </div>
  )
}

export default Ingredient

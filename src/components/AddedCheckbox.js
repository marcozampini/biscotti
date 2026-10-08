// Checkbox to mark an ingredient as already added to the dough.
// Wrapped in its own label so the tap area is larger than the box itself.
function AddedCheckbox(props) {
  return (
    <label className="added-checkbox">
      <input
        type="checkbox"
        aria-label={`Ingrediente messo: ${props.description}`}
        checked={props.added}
        onChange={props.onToggle}
      />
    </label>
  )
}

export default AddedCheckbox

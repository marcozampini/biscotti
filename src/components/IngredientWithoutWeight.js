import AddedCheckbox from './AddedCheckbox'

function IngredientWithoutWeight(props) {
  return (
    <div className={props.added ? 'ingredient added' : 'ingredient'}>
      <AddedCheckbox
        description={props.description}
        added={props.added}
        onToggle={props.onToggle}
      />
      <div className="ingredient-field">
        <span className="ingredient-name">{props.description}</span>
        <span className="quantity-description">{props.quantity}</span>
      </div>
    </div>
  )
}

export default IngredientWithoutWeight

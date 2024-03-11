function Ingredient(props) {
  return (
    <tr>
      <td>{props.description}</td>
      <td>{props.quantity} g</td>
    </tr>
  )
}

export default Ingredient

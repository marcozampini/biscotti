// App.js

import './App.css'
import React, { useState } from 'react'

import Ingredient from './components/Ingredient'
import IngredientWithoutWeight from './components/IngredientWithoutWeight'

import recipes from './recipes.json'

function App() {
  const initialQuantities = recipes[0].ingredients.map(
    (ingredient) => ingredient.quantity
  )
  const [ingredientQuantities, setIngredientQuantities] =
    useState(initialQuantities)

  const handleIngredientChange = (index, quantity) => {
    const newQuantities = [...ingredientQuantities]
    const newRatio = quantity / initialQuantities[index]

    newQuantities[index] = quantity

    for (let i = 0; i < newQuantities.length; i++) {
      if (i !== index) {
        newQuantities[i] = Number(initialQuantities[i] * newRatio).toFixed(0)
      }
    }
    setIngredientQuantities(newQuantities)
  }

  const handleReset = (e) => {
    e.preventDefault()
    setIngredientQuantities(initialQuantities)
  }

  return (
    <div className="App">
      <h1>{recipes[0].description}</h1>
      <form className="recipe">
        {recipes[0].ingredients.map((ingredient, index) => {
          return (
            <Ingredient
              key={ingredient._id}
              name={ingredient.name}
              description={ingredient.description}
              quantity={ingredientQuantities[index]}
              onChange={(newQuantity) =>
                handleIngredientChange(index, newQuantity)
              }
            />
          )
        })}
        {recipes[0].ingredientsWithoutWeight.map((ingredient, index) => {
          return (
            <IngredientWithoutWeight
              key={ingredient._id}
              description={ingredient.description}
              quantity={ingredient.quantity}
            />
          )
        })}
        <button type="reset" onClick={handleReset}>
          Reset
        </button>
      </form>
    </div>
  )
}

export default App

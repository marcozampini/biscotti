// Recipe.js

import React, { useState } from 'react'
import Ingredient from '../components/Ingredient'
import IngredientWithoutWeight from '../components/IngredientWithoutWeight'

import { Link } from 'react-router-dom'
import recipes from '../recipes.json'
function Recipe(ind) {
  const recipe = recipes[ind.index]
  const initialQuantities = recipe.ingredients.map(
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
    <div className="recipe">
      <h1>{recipe.title}</h1>

      <form className="recipe-form">
        {recipe.ingredients.map((ingredient, index) => {
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
        {recipe.ingredientsWithoutWeight.map((ingredient, index) => {
          return (
            <IngredientWithoutWeight
              key={ingredient._id}
              description={ingredient.description}
              quantity={ingredient.quantity}
            />
          )
        })}
        <div className="recipe-buttons">
          <Link to="/">Tutte le ricette</Link>
          <button type="reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
    </div>
  )
}

export default Recipe

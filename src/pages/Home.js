// Home.js

import React from 'react'
import { Link } from 'react-router-dom'

import recipes from '../recipes.json'
function Home() {
  return (
    <div>
      <h1>Biscotti di Marco Zampini</h1>
      <ul className="recipes-list">
        {recipes.map((recipe, index) => {
          return (
            <li key={recipe._id}>
              <Link to={`/${recipe.slug}`}>{recipe.title}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Home

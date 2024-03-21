// App.js

import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'

import recipes from './recipes.json'
import Home from './pages/Home'
import Recipe from './pages/Recipe'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {recipes.map((recipe, index) => {
          return (
            <Route
              path={`/${recipe.slug}`}
              key={recipe._id}
              element={<Recipe index={index} />}
            />
          )
        })}
      </Routes>
    </div>
  )
}

export default App

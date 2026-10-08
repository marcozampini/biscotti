// Home.js

import React from 'react'
import { Link } from 'react-router'

import recipes from '../recipes.json'
function Home() {
  return (
    <div>
      <h1>Biscotti di Marco Zampini</h1>
      <p className="intro">
        Scegli una ricetta,
        <br />
        inserisci il peso di un ingrediente
        <br />e il resto si ricalcola da solo.
      </p>
      <ul className="recipes-list">
        {recipes.map((recipe, index) => {
          return (
            <li key={recipe._id}>
              <Link to={`/${recipe.slug}`}>{recipe.title}</Link>
            </li>
          )
        })}
      </ul>
      <footer className="site-footer">
        <a href="https://github.com/marcozampini/biscotti">Codice su GitHub</a>
      </footer>
    </div>
  )
}

export default Home

// App.js

import './App.css'
import Ingredient from './components/Ingredient'

import recipes from './recipes.json'

function App() {
  return (
    <div className="App">
      <h1>{recipes[0].description}</h1>
      <table>
        <tbody>
          {recipes[0].ingredients.map((ingredient) => {
            return (
              <Ingredient
                key={ingredient._id}
                description={ingredient.description}
                quantity={ingredient.quantity}
              />
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default App

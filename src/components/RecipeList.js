import './RecipeList.css';

import React from 'react';
import { Link } from 'react-router-dom';

export default function RecipeList({ recipes }) {
  if (recipes.length === 0) {
    return <div className="error">No Recipes to Load</div>;
  }

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="card">
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime}</p>
          <p>{recipe.method.substring(0, 100)}...</p>
          <Link to={`/recipes/${recipe.id}`}>Cook this</Link>
        </div>
      ))}
    </div>
  );
}

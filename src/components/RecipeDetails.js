import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      const result = await axios.get(`https://api.spoonacular.com/recipes/${id}/information`, {
        params: {
          apiKey: '1e65110cb31a49298224fd72fc463621'
        }
      });
      setRecipe(result.data);
    };

    fetchRecipe();
  }, [id]);

  return (
    <div className="container" data-aos="fade-up">
      {recipe ? (
        <div>
          <h2>{recipe.title}</h2>
          <img src={recipe.image} alt={recipe.title} className="img-fluid" data-aos="fade-in" />
          <p>{recipe.summary}</p>
          <h3>Ingredients</h3>
          <ul data-aos="fade-right">
            {recipe.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
          <h3>Instructions</h3>
          <ol data-aos="fade-left">
            {recipe.analyzedInstructions[0].steps.map((step) => (
              <li key={step.number}>{step.step}</li>
            ))}
          </ol>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default RecipeDetails;
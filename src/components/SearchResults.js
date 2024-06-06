import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchResults = () => {
  const query = useQuery();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const params = {
          apiKey: '1e65110cb31a49298224fd72fc463621',
          query: query.get('query') || undefined,
          maxReadyTime: query.get('time') || undefined,
          diet: query.get('diet') || undefined
        };

        // Filter out undefined values
        Object.keys(params).forEach(key => params[key] === undefined && delete params[key]);

        const result = await axios.get(`https://api.spoonacular.com/recipes/complexSearch`, {
          params
        });

        setRecipes(result.data.results);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, [query]);

  return (
    <div className="container" data-aos="fade-up">
      <h2>Search Results</h2>
      <div className="row">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="col-md-4" data-aos="zoom-in">
            <div className="card">
              <img src={recipe.image} alt={recipe.title} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{recipe.title}</h5>
                <p>Ready in {recipe.readyInMinutes} mins</p>
                <Link to={`/recipe/${recipe.id}`} className="btn btn-primary">View Recipe</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
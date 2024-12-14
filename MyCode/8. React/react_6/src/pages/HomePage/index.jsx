// import "./style.css";
import React, { useState, useEffect } from "react";
import Navbar from "@/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const res = await axios.get("https://dummyjson.com/recipes/");
      console.log("res", res.data);
      setRecipes(res.data.recipes);
    };

    fetchRecipes();
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <h1 className="text-2xl text-center font-bold mt-10">Recipes</h1>
      {/* wrapper */}
      <div className="mx-10 flex flex-col gap-10 my-10">
        {recipes.map((recipe) => (
          // card
          <div
            key={recipe.id}
            className="border-2 border-gray-200 rounded-lg shadow-lg p-5"
          >
            <h2 className="my-1 font-bold">{recipe.name}</h2>
            {/* {recipe?.ingredients.map((ingredient) => (
              <p>{ingredient.name}</p>
            ))} */}
            <p className="my-1">Ingredients: {recipe.ingredients.join(", ")}</p>
            <p className="my-1">Prep Time: {recipe.prepTimeMinutes} minutes</p>
            <p className="my-1">Cook Time: {recipe.cookTimeMinutes} minutes</p>
            <p className="my-1">Difficulty: {recipe.difficulty}</p>
            <Link to={`/detail/${recipe.id}`}>
              <button className="my-1 bg-gray-800  text-white font-bold py-2 px-5 rounded-lg text-sm">
                Detail Recipe
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

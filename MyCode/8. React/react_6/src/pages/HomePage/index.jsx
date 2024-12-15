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
      <h1 className="text-2xl text-center font-bold mt-10">Recipes Lists</h1>
      {/* wrapper */}
      <div className="mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
        {recipes.map((recipe) => (
          // card
          <div
            key={recipe.id}
            className="border-2 border-gray-200 rounded-lg shadow-lg p-5 flex flex-col justify-between"
          >
            <div>
              <h2 className="my-1 font-bold">{recipe.name}</h2>
              <h2 className="my-1">Ingredients: </h2>
              <ul className="list-disc ">
                {recipe?.ingredients?.map((ingredient) => (
                  <li className="ml-5">{ingredient}</li>
                ))}
              </ul>
              <p className="my-1">
                Prep Time: {recipe.prepTimeMinutes} minutes
              </p>
              <p className="my-1">
                Cook Time: {recipe.cookTimeMinutes} minutes
              </p>
              <p className="my-1">Difficulty: {recipe.difficulty}</p>
            </div>
            <div>
              <Link to={`/detail/${recipe.id}`}>
                <button className="mt-5 bg-gray-800  text-white font-bold py-2 px-5 rounded-lg text-sm">
                  Detail Recipe
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

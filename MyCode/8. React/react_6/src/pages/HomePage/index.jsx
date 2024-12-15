// import "./style.css";
import React, { useState, useEffect } from "react";
import Navbar from "@/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [skip, setSkip] = useState(0);
  const limit = 3;

  const getRecipes = async () => {
    try {
      const res = await axios.get(
        `https://dummyjson.com/recipes?skip=${skip}&limit=${limit}`
      );
      setRecipes(res.data.recipes);
    } catch (error) {
      console.error(error);
    }
  };

  const handleNext = () => {
    setSkip(skip + limit);
  };

  const handleBack = () => {
    setSkip(skip - limit);
  };

  useEffect(() => {
    getRecipes();
  }, []);

  useEffect(() => {
    getRecipes();
  }, [skip]);

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
              <div className="flex flex-col gap-1 items-center">
                <h2 className="my-1 font-bold">{recipe.name}</h2>
                <img
                  src={recipe.image}
                  alt=""
                  className="w-[75%] rounded-full"
                />
              </div>
              <p className="my-1">
                Prep Time: {recipe.prepTimeMinutes} minutes
              </p>
              <p className="my-1">
                Cook Time: {recipe.cookTimeMinutes} minutes
              </p>
              <p className="my-1">Difficulty: {recipe.difficulty}</p>
            </div>
            <div className="flex justify-center">
              <Link to={`/detail/${recipe.id}`}>
                <button className="mt-5 bg-gray-800  text-white font-bold py-2 px-5 rounded-lg text-sm">
                  Detail Recipe
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/* pagination */}
      <div className="flex justify-center gap-5 my-10">
        <button
          disabled={skip === 0}
          onClick={handleBack}
          className="bg-gray-800 text-white text-sm font-bold py-2 px-5 rounded-lg"
        >
          Back
        </button>
        <button
          disabled={recipes.length < limit}
          onClick={handleNext}
          className="bg-gray-800 text-white text-sm font-bold py-2 px-5 rounded-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HomePage;

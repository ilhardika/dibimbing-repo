// import "./style.css";
import Navbar from "@/Navbar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const DetailPage = () => {
  const { id } = useParams();
  const [detailRecipes, setDetailRecipes] = useState({});

  useEffect(() => {
    const fetchRecipes = async () => {
      const res = await axios.get("https://dummyjson.com/recipes/" + id);
      console.log("res", res);
      setDetailRecipes(res.data);
    };

    fetchRecipes();
  }, [id]);

  return (
    <div>
      <Navbar></Navbar>
      <div className="m-10">
        <h1 className="text-2xl text-center font-bold">{detailRecipes.name}</h1>
        <p>Ingredients : {detailRecipes.ingredients.join(", ")}</p>
        {/* <div className="mb-2">
          <p className="">Ingredients: </p>
          {detailRecipes.ingredients.map((ingredient) => (
            <p className="">{ingredient}</p>
          ))}
        </div> */}
        <p>Prep Time Minutes: {detailRecipes.prepTimeMinutes}</p>
        <p>Cook Time Minutes: {detailRecipes.cookTimeMinutes}</p>
        <p>Servings: {detailRecipes.servings}</p>
        <p>Difficulty: {detailRecipes.difficulty}</p>
        <p>Cuisine: {detailRecipes.cuisine}</p>
        <p>Calories: {detailRecipes.caloriesPerServing}</p>
      </div>
    </div>
  );
};

export default DetailPage;

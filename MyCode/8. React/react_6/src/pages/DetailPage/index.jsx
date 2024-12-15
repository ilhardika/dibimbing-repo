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
      <Navbar />
      <div className="m-10">
        <h1 className="text-2xl text-center font-bold">{detailRecipes.name}</h1>
        <div className="flex flex-col gap-5">
          <div>
            <h2 className="text-xl font-semibold">Ingredients:</h2>
            <ul className="list-disc ">
              {detailRecipes?.ingredients?.map((ingredient) => (
                <li className="ml-5">{ingredient}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Instructions:</h2>
            <ul className="list-decimal">
              {detailRecipes?.instructions?.map((instruction) => (
                <li className="ml-5">{instruction}</li>
              ))}
            </ul>
          </div>
          <p>Prep Time Minutes: {detailRecipes.prepTimeMinutes}</p>
          <p>Cook Time Minutes: {detailRecipes.cookTimeMinutes}</p>
          <p>Servings: {detailRecipes.servings}</p>
          <p>Difficulty: {detailRecipes.difficulty}</p>
          <p>Cuisine: {detailRecipes.cuisine}</p>
          <p>Calories: {detailRecipes.caloriesPerServing}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;

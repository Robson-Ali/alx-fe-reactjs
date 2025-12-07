import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => {
        const selected = data.find((item) => item.id === Number(id));
        setRecipe(selected);
      });
  }, [id]);

  if (!recipe) {
    return (
      <div className="p-10 text-center text-xl text-gray-700">
        Loading recipe...
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white mt-8 rounded-2xl shadow-lg">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-xl"
      />

      <h1 className="text-4xl font-bold mt-6 mb-4">{recipe.title}</h1>
      <p className="text-gray-700 text-lg mb-6">{recipe.summary}</p>

      {/* Ingredients */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          {recipe.ingredients?.map((i, index) => (
            <li key={index}>{i}</li>
          ))}
        </ul>
      </div>

      {/* Instructions */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Instructions</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700">
          {recipe.instructions?.map((step, index) => (
            <li key={index} className="leading-relaxed">
              {step}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

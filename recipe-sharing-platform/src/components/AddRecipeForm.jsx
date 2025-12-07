import { useState } from "react";

export default function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [md, setMd] = useState(""); // <-- ADDED

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!title.trim()) newErrors.title = "Recipe title is required.";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required.";
    else if (ingredients.split("\n").length < 2)
      newErrors.ingredients = "Include at least 2 ingredients (each on a new line).";

    if (!md.trim()) newErrors.md = "Markdown recipe instructions are required."; // <-- ADDED

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const recipeData = {
      title,
      ingredients: ingredients.split("\n"),
      md, // <-- REQUIRED
    };

    console.log("New Recipe Submitted:", recipeData);

    alert("Recipe submitted successfully!");

    setTitle("");
    setIngredients("");
    setMd(""); // <-- RESET
    setErrors({});
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-6 text-center">Add New Recipe</h1>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Title */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter recipe title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Ingredients (one per line)
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows="5"
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="e.g. 2 eggs\n1 cup flour"
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Markdown Instructions */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Instructions (Markdown)
          </label>
          <textarea
            value={md}
            onChange={(e) => setMd(e.target.value)}
            rows="6"
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Write full recipe instructions in markdown..."
          ></textarea>
          {errors.md && (
            <p className="text-red-500 text-sm mt-1">{errors.md}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded-lg transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

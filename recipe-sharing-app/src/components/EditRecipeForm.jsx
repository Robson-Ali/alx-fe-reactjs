import { useState } from "react";
import useRecipeStore from "../store/recipeStore";

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (event) => {
    event.preventDefault();   //  corrected

    updateRecipe({
      id: recipe.id,
      title,
      description,
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "2rem" }}>
      <h3>Edit Recipe</h3>

      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        style={{ display: "block", marginBottom: "1rem" }}
      />

      <textarea
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        style={{ display: "block", marginBottom: "1rem" }}
      />

      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;

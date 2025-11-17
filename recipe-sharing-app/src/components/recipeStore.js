import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  // Existing data
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  addRecipe: (newRecipe) =>
    set((state) => {
      const newRecipes = [...state.recipes, newRecipe];
      return {
        recipes: newRecipes,
        filteredRecipes: newRecipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    }),
  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updated = state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      );
      return {
        recipes: updated,
        filteredRecipes: updated.filter((recipe) =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    }),
  deleteRecipe: (id) =>
    set((state) => {
      const updated = state.recipes.filter((r) => r.id !== id);
      return {
        recipes: updated,
        filteredRecipes: updated.filter((recipe) =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    }),
  setRecipes: (recipes) =>
    set((state) => ({
      recipes,
      filteredRecipes: recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  // Search
  setSearchTerm: (term) =>
    set((state) => {
      const filtered = state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      );
      return {
        searchTerm: term,
        filteredRecipes: filtered,
      };
    }),

  // Favorites
  favorites: [],
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...new Set([...state.favorites, recipeId])],
    })),
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Recommendations (simple mock: random recipes not yet favorited)
  recommendations: [],
  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes
        .filter((recipe) => !state.favorites.includes(recipe.id))
        .sort(() => 0.5 - Math.random()) // shuffle
        .slice(0, 5); // top 5
      return { recommendations: recommended };
    }),
}));

export default useRecipeStore;

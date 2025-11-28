import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import SearchBar from "./components/SearchBar";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";
import useRecipeStore from "./store/recipeStore";

function App() {
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);

  return (
    <Router>
      <div style={{ padding: "2rem" }}>
        <h1>Recipe Sharing App</h1>

        <nav style={{ marginBottom: "1rem" }}>
          <Link to="/">Home</Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar />
                <AddRecipeForm />
                <RecipeList />
                <FavoritesList />
                <button onClick={generateRecommendations}>Refresh Recommendations</button>
                <RecommendationsList />
              </>
            }
          />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


function App() {
  return (
    <Router>
      <div style={{ padding: "2rem" }}>
        <h1>Recipe Sharing App</h1>

        <nav style={{ marginBottom: "1rem" }}>
          <Link to="/">Home</Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar />
                <AddRecipeForm />
                <RecipeList />
              </>
            }
          />

          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


function App() {
  return (
    <Router>
      <div style={{ padding: "2rem" }}>
        <h1>Recipe Sharing App</h1>

        <nav style={{ marginBottom: "1rem" }}>
          <Link to="/">Home</Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddRecipeForm />
                <RecipeList />
              </>
            }
          />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

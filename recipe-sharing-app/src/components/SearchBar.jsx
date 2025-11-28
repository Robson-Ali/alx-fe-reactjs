import useRecipeStore from "../store/recipeStore";

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(event) => setSearchTerm(event.target.value)}
      style={{
        width: "100%",
        maxWidth: "300px",
        padding: "8px",
        marginBottom: "15px"
      }}
    />
  );
};

export default SearchBar;

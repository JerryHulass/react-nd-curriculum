import { useDispatch, useSelector } from "react-redux";
import { sortRecipes } from "../slices/recipesSlice";

function RecipeActions() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => {
    const allCategories = state.recipes.map((recipe) => recipe.category);
    return [...new Set(allCategories)];
  });

  function handleSort(event) {
    dispatch(sortRecipes(event.target.value));
  }

  return (
    <div>
      <select onChange={handleSort}>
        <option value="name">Sort by Name</option>
        <option value="category">Sort by Category</option>
      </select>

      <div>
        <h3>Filter by Category:</h3>
        {categories.map((category) => (
          <button key={category}>{category}</button>
        ))}
      </div>
    </div>
  );
}

export default RecipeActions;

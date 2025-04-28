import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addRecipe } from "../slices/recipesSlice";
import { incrementId } from "../slices/idSlice";

function RecipeForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentId = useSelector((state) => state.id.currentId);
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState([""]);

  function handleAddIngredient() {
    setIngredients([...ingredients, ""]);
  }

  function handleIngredientChange(index, value) {
    const newIngredients = ingredients.slice();
    newIngredients[index] = value;
    setIngredients(newIngredients);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newRecipe = { id: currentId.toString(), name, ingredients };
    dispatch(addRecipe(newRecipe));
    dispatch(incrementId());
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Recipe Name"
      />

      <button type="button" onClick={handleAddIngredient}>
        Add Ingredient
      </button>

      {ingredients.map((ingredient, index) => (
        <input
          key={index}
          value={ingredient}
          onChange={(e) => handleIngredientChange(index, e.target.value)}
          placeholder="Ingredient"
        />
      ))}

      <button type="submit">Save</button>
    </form>
  );
}

export default RecipeForm;

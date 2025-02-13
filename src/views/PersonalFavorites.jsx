import "../App.css";
import { useState, useEffect } from "react";

export default function PersonalFavorites() {

    // State variables
  const [recipes, setRecipes] = useState([]);
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);


  // Load saved recipes from localStorage on mount
  useEffect(() => {
    const savedRecipes = localStorage.getItem("favoriteRecipes");
    if (savedRecipes) {
      setRecipes(JSON.parse(savedRecipes));
    }
  }, []);

  // Update localStorage whenever recipes change
  useEffect(() => {
    if (recipes.length > 0) {
      localStorage.setItem("favoriteRecipes", JSON.stringify(recipes));
    }
  }, [recipes]);

  // Function to handle adding or updating a recipe
  const handleSubmit = () => {
    const newRecipe = { title, ingredients, instructions };

    if (editingIndex !== null) {
      const updatedRecipes = [...recipes];
      updatedRecipes[editingIndex] = newRecipe;
      setRecipes(updatedRecipes);
    } else {
      setRecipes([...recipes, newRecipe]);
    }

    // Reset form fields
    setTitle("");
    setIngredients("");
    setInstructions("");
    setEditingIndex(null);
  };

  // Function to handle editing a recipe
  const handleEdit = (index) => {
    const recipeToEdit = recipes[index];
    setTitle(recipeToEdit.title);
    setIngredients(recipeToEdit.ingredients);
    setInstructions(recipeToEdit.instructions);
    setEditingIndex(index);
  };

  // Function to handle deleting a recipe
  const handleDelete = (index) => {
    const updatedRecipes = recipes.filter((_, i) => i !== index);
    setRecipes(updatedRecipes);
  };

  return (
    <div className="personal-favorites">
      <h1>My Favorite Recipes</h1>
      <h4><i>Save and manage your personal favorite recipes here!</i></h4>

      {/* Form for adding or editing a recipe */}
      <div>
        <input
          type="text"
          placeholder="Recipe Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <textarea
          placeholder="Instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
        />
        <button onClick={handleSubmit}>
          {editingIndex !== null ? "Update Recipe" : "Add Recipe"}
        </button>
      </div>

      {/* List of favorite recipes */}
      <div className="recipe-list">
        <h2>Your Saved Recipes</h2>
        {recipes.length === 0 ? (
          <p>No recipes added yet. Start adding your favorites!</p>
        ) : (
          <ul>
            {recipes.map((recipe, index) => (
              <li key={index}>
                <h3>{recipe.title}</h3>
                <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
                <p><strong>Instructions:</strong> {recipe.instructions}</p>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

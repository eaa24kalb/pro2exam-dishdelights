import { useParams } from "react-router-dom";
import "../App.css";
import { useEffect, useState } from "react";

//Images
import bvcake from "../assets/images/bvcake.jpg";
import bvcupcake from "../assets/images/bvcupcake.jpg";
import blemonade from "../assets/images/blemonade.webp";
import cbeetsoup from "../assets/images/cbeetsoup.jpg.webp";
import dfcboard from "../assets/images/dfcboard.jpg";
import mfcocktail from "../assets/images/mfcocktail.jpg";
import psoup from "../assets/images/psoup.jpg";


export default function RecipeDetail() {
    const {id} = useParams(); //Get recipe id from Url
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const recipeData = {
            "1": {
                title: "Black Velvet Cake",
                servings: "12 servings",
                prepTime: "20 minutes",
                cookTime: "35 minutes",
                ingredients: [
                    "2 ½ cups all-purpose flour",
                    "1 ½ cups granulated sugar",
                    "1 tsp baking powder",
                    "1 tsp baking soda",
                    "½ tsp salt",
                    "½ cup cocoa powder (black cocoa for extra darkness)",
                    "1 cup buttermilk",
                    "½ cup vegetable oil",
                    "2 eggs",
                    "1 tsp vanilla extract",
                    "1 cup hot coffee",
                    "For the Frosting:",
                    "8 oz cream cheese, softened",
                    "½ cup butter, softened",
                    "4 cups powdered sugar",
                    "1 tsp vanilla",
                    "Black food coloring (optional)"
                ],
                instructions: [
                    "Preheat oven to 350°F (175°C). Grease two 9-inch cake pans.",
                    "In a large bowl, whisk together the flour, sugar, baking powder, baking soda, salt, and cocoa powder.",
                    "In another bowl, mix buttermilk, oil, eggs, and vanilla. Slowly add the wet mixture to the dry ingredients.",
                    "Stir in the hot coffee and mix until smooth.",
                    "Pour the batter evenly into the cake pans and bake for 30-35 minutes, or until a toothpick inserted in the center comes out clean.",
                    "Let the cakes cool completely before frosting.",
                    "To make the frosting, beat the cream cheese and butter until smooth. Gradually add the powdered sugar and vanilla. Add black food coloring for an extra gothic touch.",
                    "Frost the cake and decorate with black sprinkles or edible gold flakes."
                ],
                imageUrl: bvcake
            },

            "2": {
                title: "Bloody Velvet Cupcakes",
                servings: "12 cupcakes",
                prepTime: "15 minutes",
                cookTime: "20 minutes",
                ingredients: [
                    "1 ½ cups flour",
                    "1 cup sugar",
                    "½ cup cocoa powder (use black cocoa for deep color)",
                    "1 tsp baking soda",
                    "½ tsp salt",
                    "1 cup buttermilk",
                    "½ cup vegetable oil",
                    "2 eggs",
                    "1 tsp vanilla",
                    "½ cup hot coffee",
                    "For the filling & frosting:",
                    "½ cup raspberry preserves",
                    "8 oz cream cheese, softened",
                    "½ cup butter, softened",
                    "4 cups powdered sugar",
                    "1 tsp vanilla extract",
                    "Black food coloring"
                ],
                instructions: [
                    "Preheat oven to 350°F (175°C) and line a cupcake pan.",
                    "In a bowl, mix dry ingredients. In another, whisk buttermilk, oil, eggs, and vanilla.",
                    "Slowly add wet ingredients to dry, then stir in hot coffee.",
                    "Pour into cupcake liners and bake for 18-20 minutes. Cool completely.",
                    "Fill cupcakes with raspberry preserves using a piping bag.",
                    "Beat frosting ingredients until smooth, adding black food coloring. Frost and serve."
                ],
                imageUrl: bvcupcake
            },

            "3": {
                title: "Black Lemonade",
                servings: "4 glasses",
                prepTime: "5 minutes",
                cookTime: "0 minutes",
                ingredients: [
                    "4 cups water",
                    "½ cup fresh lemon juice",
                    "¼ cup maple syrup or honey",
                    "1 tsp activated charcoal (food-grade)",
                    "Ice and lemon slices for garnish"
                ],
                instructions: [
                    "In a pitcher, mix water, lemon juice, and maple syrup.",
                    "Stir in activated charcoal until well blended.",
                    "Serve over ice with lemon slices."
                ],
                imageUrl: blemonade
            },

            "4": {
                title: "Crimson Beet Soup",
                servings: "4 servings",
                prepTime: "15 minutes",
                cookTime: "30 minutes",
                ingredients: [
                   "3 large beets, peeled and grated",
                    "1 onion, chopped",
                    "3 cloves garlic, minced",
                    "4 cups vegetable broth",
                    "1 tbsp red wine vinegar",
                    "1 tsp sugar",
                    "1 tsp salt",
                    "½ tsp black pepper",
                    "½ cup sour cream (optional)"
                ],
                instructions: [
                    "Sauté onions and garlic in a pot until fragrant.",
                    "Add beets, broth, vinegar, sugar, salt, and pepper.",
                    "Simmer for 30 minutes, stirring occasionally.",
                    "Blend soup until smooth.",
                    "Serve warm with a swirl of sour cream."
                ],
                imageUrl: cbeetsoup
            },  

            "5": {
                title: "Dark Forest Charcuterie Board",
                servings: "6-8 servings",
                prepTime: "15 minutes",
                cookTime: "0 minutes",
                ingredients: [
                   "Blackberries, blueberries, and dark cherries",
                    "Black grapes (or deep purple ones)",
                    "Aged cheddar, brie, and blue cheese",
                    "Smoked meats (prosciutto, salami, or chorizo)",
                    "Black olives and roasted nuts",
                    "Charcoal crackers or dark rye bread",
                    "Fig jam or blackberry preserves",
                    "Dark chocolate pieces (optional)"
                ],
                instructions: [
                    "Arrange cheeses and meats on a wooden or black slate board.",
                    "Add fruits, nuts, and olives in clusters.",
                    "Place a small dish of jam in the center.",
                    "Serve with charcoal crackers or dark bread."
                ],
                imageUrl: dfcboard
            },  

            "6": {
                title: "Midnight Fog Cocktail",
                servings: "1 drink",
                prepTime: "5 minutes",
                cookTime: "0 minutes",
                ingredients: [
                   "2 oz bourbon",
                    "½ oz absinthe (optional)",
                    "1 oz blackberry syrup",
                    "½ oz fresh lemon juice",
                    "Ice",
                    "Fresh blackberries and rosemary for garnish",
                    "Dry ice (for fog effect, optional)"
                ],
                instructions: [
                    "Mix bourbon, absinthe, blackberry syrup, and lemon juice with ice in a shaker.",
                    "Strain into a glass over fresh ice.",
                    "Garnish with blackberries and rosemary.",
                    "For a smoky effect, add a small piece of dry ice."
                ],
                imageUrl: mfcocktail
            },  

            "7": {
                title: "Pumpkin Soup with Black Truffle Oil",
                servings: "4 servings", 
                prepTime: "10 minutes", 
                cookTime: "30 minutes",
                ingredients: [
                   "1 small pumpkin, peeled and cubed",
                    "1 small onion, chopped",
                    "3 cloves garlic, roasted",
                    "4 cups vegetable broth",
                    "½ cup coconut milk or heavy cream",
                    "1 tbsp black truffle oil",
                    "½ tsp nutmeg",
                    "Salt and black pepper to taste"
                ],
                instructions: [
                    "Roast pumpkin and garlic at 400°F (200°C) for 30 minutes.",
                    "Sauté onion until translucent.",
                    "Add roasted pumpkin, garlic, and broth. Simmer for 10 minutes.",
                    "Blend until smooth and stir in coconut milk.",
                    "Drizzle with black truffle oil and serve."
                ],
                imageUrl: psoup
            }
        };

        setRecipe(recipeData[id]); //Get recipe by id
    }, [id]);

    if (!recipe) return <div>Loading...</div>;

    return (
        <div className="recipe-detail">
            <h1>{recipe.title}</h1>
            <img 
            src={recipe.imageUrl} 
            alt={recipe.title}
            style={{ width: "300px", height: "auto", borderRadius: "8px" }} 
            />

            <div className="info-container">
                <p><strong>Servings:</strong> {recipe.servings}</p>
                <p><strong>Prep Time:</strong> {recipe.prepTime}</p>
                <p><strong>Cook Time:</strong> {recipe.cookTime}</p>
            </div>

            <div className="ingredient-box">
                <h2>Ingredients:</h2>
                <ul>
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
            </div>

            <div className="instructions-box">
                <h2>Instructions:</h2>
                <ol>{recipe.instructions.map((step, index) => <li key={index}>{step}</li>)}</ol>
            </div>
    </div>
    );
}
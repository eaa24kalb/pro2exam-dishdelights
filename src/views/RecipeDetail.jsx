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
                instructions: 
                `1. Preheat oven to 350°F (175°C). Grease two 9-inch cake pans.
                2. In a large bowl, whisk together the flour, sugar, baking powder, baking soda, salt, and cocoa powder.
                3. In another bowl, mix buttermilk, oil, eggs, and vanilla. Slowly add the wet mixture to the dry ingredients.
                4. Stir in the hot coffee and mix until smooth.
                5. Pour the batter evenly into the cake pans and bake for 30-35 minutes, or until a toothpick inserted in the center comes out clean.
                6. Let the cakes cool completely before frosting.
                7. To make the frosting, beat the cream cheese and butter until smooth. Gradually add the powdered sugar and vanilla. Add black food coloring for an extra gothic touch.
                8. Frost the cake and decorate with black sprinkles or edible gold flakes.`,
                imageUrl: bvcake
            },

            "2": {
                title: "Bloody Velvet Cupcakes",
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
                instructions: 
                `1. Preheat oven to 350°F (175°C) and line a cupcake pan.
                2. In a bowl, mix dry ingredients. In another, whisk buttermilk, oil, eggs, and vanilla.
                3. Slowly add wet ingredients to dry, then stir in hot coffee.
                4. Pour into cupcake liners and bake for 18-20 minutes. Cool completely.
                5. Fill cupcakes with raspberry preserves using a piping bag.
                6. Beat frosting ingredients until smooth, adding black food coloring. Frost and serve.`,
                imageUrl: bvcupcake
            },

            "3": {
                title: "Black Lemonade",
                ingredients: [
                    "4 cups water",
                    "½ cup fresh lemon juice",
                    "¼ cup maple syrup or honey",
                    "1 tsp activated charcoal (food-grade)",
                    "Ice and lemon slices for garnish"
                ],
                instructions: 
                `1. In a pitcher, mix water, lemon juice, and maple syrup.
                2. Stir in activated charcoal until well blended.
                3. Serve over ice with lemon slices.`,
                imageUrl: blemonade.webp
            },

            "4": {
                title: "Crimson Beet Soup",
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
                instructions: 
                `1. In a large pot, heat some oil and sauté the onions and garlic until fragrant.
                2. Add the grated beets, vegetable broth, red wine vinegar, sugar, salt, and pepper. Simmer for 30 minutes, stirring occasionally.
                3. Blend the soup until smooth using an immersion blender or a regular blender.
                4. Serve warm with a swirl of sour cream for a ghostly, gothic presentation.`,
                imageUrl: cbeetsoup
            },  

            "5": {
                title: "Dark Forest Charcuterie Board",
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
                instructions: 
                `1. Arrange the cheeses and meats on a wooden or black slate board.
                2. Add the fruits, nuts, and olives in clusters for a natural, eerie feel.
                3. Place a small dish of jam in the center.
                4. Serve with charcoal crackers or dark bread for a mysterious and elegant appetizer.`,
                imageUrl: dfcboard
            },  

            "6": {
                title: "Midnight Fog Cocktail",
                ingredients: [
                   "2 oz bourbon",
                    "½ oz absinthe (optional)",
                    "1 oz blackberry syrup",
                    "½ oz fresh lemon juice",
                    "Ice",
                    "Fresh blackberries and rosemary for garnish",
                    "Dry ice (for fog effect, optional)"
                ],
                instructions: 
                `1. In a shaker, mix bourbon, absinthe, blackberry syrup, and lemon juice with ice.
                2. Strain into a glass over fresh ice.
                3. Garnish with blackberries and a rosemary sprig.
                4. For a dramatic smoky effect, add a small piece of dry ice (allow it to dissolve before sipping).`,
                imageUrl: mfcocktail
            },  

            "7": {
                title: "Pumpkin Soup with Black Truffle Oil",
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
                instructions: 
                `1. Roast the pumpkin and garlic at 400°F (200°C) for 30 minutes.
                2. In a pot, sauté the onion until translucent.
                3. Add the roasted pumpkin, garlic, and vegetable broth. Simmer for 10 minutes.
                4. Blend until smooth and stir in coconut milk.
                5. Drizzle with black truffle oil and serve with charcoal bread or blackened croutons.`,
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
            <h2>Ingredients:</h2>
            <ul>
                {recipe.ingredients.map((ingredients, index) => (
                    <li key={index}>{ingredients}</li>
                ))}
            </ul>
            <h2>Instructions:</h2>
            <p>{recipe.instructions}</p>
    </div>
    );
}
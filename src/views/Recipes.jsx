import { Link, useParams } from "react-router-dom";
import "../App.css";
import { useState } from "react";

    //Images
    import bvcake from "../assets/images/bvcake.jpg";
    import bvcupcake from "../assets/images/bvcupcake.jpg";
    import blemonade from "../assets/images/blemonade.webp";
    import cbeetsoup from "../assets/images/cbeetsoup.jpg.webp";
    import dfcboard from "../assets/images/dfcboard.jpg";
    import mfcocktail from "../assets/images/mfcocktail.jpg";
    import psoup from "../assets/images/psoup.jpg";


export default function Recipes() {

    //Recipe data
    const recipes = [
        {id: "1", title: "Black Velvet Cake", category: "Baking", imageUrl: bvcake,description: "A dark and decadent twist on the classic red velvet cake, this Black Velvet Cake is rich, moist, and mysterious." },
        {id: "2", title: "Bloody Velvet Cupcakes", category: "Baking", imageUrl: bvcupcake, description: "Dark cocoa cupcakes with a blood-red raspberry filling and black frosting" },
        {id: "3", title: "Black Lemonade", category: "Beverage", imageUrl: blemonade, description: "A dark, refreshing drink infused with activated charcoal for a mysterious twist" },
        {id: "4", title: "Crimsom Beet Soup", category: "Soup", imageUrl: cbeetsoup, description: "This deep crimson beet soup is both beautiful and haunting, perfect for a gothic dinner. Inspired by traditional borscht, this version is smooth, velvety, and packed with earthy flavors, giving the illusion of a bowl filled with liquid rubies." },
        {id: "5", title: "Dark Forest Charcuterie Board", category: "Platter", imageUrl: dfcboard, description: "A hauntingly beautiful platter filled with rich cheeses, dark fruits, and smoky meats, this gothic charcuterie board is perfect for eerie gatherings and sophisticated gothic dining." },
        {id: "6", title: "Midnight Fog Cocktail", category: "Beverage", imageUrl: mfcocktail, description: "A smoky, mystical drink with dark flavors of blackberries, bourbon, and a hint of absinthe." },
        {id: "7", title: "Pumpkin Soup with Black Truffle Oil", category: "Soup", imageUrl: psoup, description: "A rich and velvety pumpkin soup infused with deep flavors of roasted garlic and black truffle oil" },
    ];

    const {categoryId} = useParams(); //Get categoryId from URl
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

    //Filter recipes based on search and category
    const filteredRecipes = recipes.filter(recipe => {
        const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === "all" || recipe.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });


    return (
        <div className="recipes-container">
            <div>
                Search by recipe:
                <input 
                    type="text" 
                    id="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search for recipe"
                />
            </div>

            <div>
                Filter by category:
                <select 
                    id="category"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}>
                    <option value="all">All</option>
                    <option value="Baking">Baked Goods</option>
                    <option value="Beverage">Beverage</option>
                    <option value="Soup">Soup</option>
                    <option value="Platter">Platter</option>
                </select>
            </div>
        
            <h2>List of Recipes</h2>
            <div className="recipe-list">
                {filteredRecipes.map((recipe) => (
                    <div className="recipe-card" key={recipe.id}>

                    <img 
                        src={recipe.imageUrl} 
                        alt={recipe.title}
                        className="recipe-image" 
                        style={{width: "300px", height: "auto", borderRadius: "6px" }} 
                    />

                        <h3>{recipe.title}</h3>
                        <p>{recipe.description}</p>
                        <Link to={`/recipes/${recipe.id}`} className="recipe-link">View Recipe</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}





<>
        <h1>Recipes</h1>
        <p>Browse our crafted selection of recipies for every occasion.</p>
    </>
import { Link, useParams } from "react-router-dom";
import "../App.css";
import { useState } from "react";
import { Card, CardActionArea, CardMedia, CardContent, Typography, Button, CardActions, Grid } from "@mui/material";

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
        {id: "1", title: "Black Velvet Cake", category: "Baking", imageUrl: bvcake,description: "A dark and decadent twist on the classic red velvet cake, this Black Velvet Cake is rich, moist, and mysterious.", servings: 8, prepTime: "30 min", cookTime: "40 min" },
        {id: "2", title: "Bloody Velvet Cupcakes", category: "Baking", imageUrl: bvcupcake, description: "Dark cocoa cupcakes with a blood-red raspberry filling and black frosting", servings: 12, prepTime: "20 min", cookTime: "25 min" },
        {id: "3", title: "Black Lemonade", category: "Beverage", imageUrl: blemonade, description: "A dark, refreshing drink infused with activated charcoal for a mysterious twist", servings: 4, prepTime: "5 min", cookTime: "0 min" },
        {id: "4", title: "Crimsom Beet Soup", category: "Soup", imageUrl: cbeetsoup, description: "This deep crimson beet soup is both beautiful and haunting, perfect for a gothic dinner. Inspired by traditional borscht, this version is smooth, velvety, and packed with earthy flavors, giving the illusion of a bowl filled with liquid rubies.", servings: 6, prepTime: "15 min", cookTime: "1 hr" },
        {id: "5", title: "Dark Forest Charcuterie Board", category: "Platter", imageUrl: dfcboard, description: "A hauntingly beautiful platter filled with rich cheeses, dark fruits, and smoky meats, this gothic charcuterie board is perfect for eerie gatherings and sophisticated gothic dining.", servings: 4, prepTime: "20 min", cookTime: "0 min" },
        {id: "6", title: "Midnight Fog Cocktail", category: "Beverage", imageUrl: mfcocktail, description: "A smoky, mystical drink with dark flavors of blackberries, bourbon, and a hint of absinthe.", servings: 2, prepTime: "10 min", cookTime: "0 min" },
        {id: "7", title: "Pumpkin Soup with Black Truffle Oil", category: "Soup", imageUrl: psoup, description: "A rich and velvety pumpkin soup infused with deep flavors of roasted garlic and black truffle oil", servings: 4, prepTime: "10 min", cookTime: "30 min" },
    ];

    const {categoryId} = useParams(); //Get categoryId from URl
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");

    //Filter recipes based on search and category
    const filteredRecipes = recipes.filter(recipe => {
        const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === "all" || recipe.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });


    return (
        <div className="recipes-container">
            <div>
                <h1>Recipes</h1> 
                <p>Browse our crafted selection of recipies for every occasion.</p>
            </div>

        {/* Search input */}
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

        {/* Category filter */}
            <div>
                <label>Filter by category:</label>
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
        
        {/* Recipe grid */}
            <h2>List of Recipes</h2>
            <div className="recipe-list">
                <Grid container spacing={3}>
                    {filteredRecipes.map((recipe) => (
                        <Grid item xs={12} sm={6 } md={4} key={recipe.id}>
                            <div className="recipe-card">
                            <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea component={Link} to={`/recipes/${recipe.id}`}>
                                
                                <CardMedia
                                component="img"
                                sx={
                                    {width: "100%",
                                     height: 250,
                                     objectFit: "cover",
                                }}
                                image={recipe.imageUrl}
                                alt={recipe.title}
                                />

                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            {recipe.title}
                            </Typography>
                            <Typography variant="body2" sx={{ color: "text.secondary" }}>
                            {recipe.description}
                            </Typography>
                            <Typography variant="body2" sx={{ color: "text.secondary", marginTop: 2 }}>
                            <strong>🍴Servings:</strong> {recipe.servings} <br />
                            <strong>⏱️Prep Time:</strong> {recipe.prepTime} <br />
                            <strong>⏲️Cook Time:</strong> {recipe.cookTime}
                        </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                    </div>
                  </Grid>
                ))}
              </Grid>  
              </div>    
        </div>
    )
}



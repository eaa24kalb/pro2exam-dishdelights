import { dialogClasses } from "@mui/material";
import "../App.css";

export default function Home() {
    return (
    <div>
        <br />
        <h1>Welcome to DishDelights</h1>
     
        <h4><i>Your go-to destination for dark, gothic-inspired recipes that will make your taste buds dance in delight.
            <br />
            Explore a variety of delicious recipes, handpicked for dark taste.</i></h4>

        <br />
        <h2>Get Inspired</h2>
        <p>Browse our collection of carefully crafted recipes, perfect for all occasions </p>
        <p>- whether it's a gothic-themed dinner,a spooky Halloween feast, or a quite night in with decadent treats. </p>
        <p>From mysterious treats to darkly delightful beverages, we have something for everyone.</p>

        <br />
        <h2>Check Out These TikTok Recommendations!</h2>
        <p>Need some inspiration? </p>
        <p>Watch these popular TikTok creators and their gothic-inspired recipes.</p>
        <p>These creators are known for their dark culinary creations,</p>
        <p>and we think you'll love them:</p>
        <br />

    {/* Tiktok videos */}
        <div className="tiktok-links">
            <iframe
              src="https://www.tiktok.com/embed/7373250446581927201"
              width="325"
              height="580"
              allowFullScreen
              title="TikTok Video 1"
            ></iframe>


            <iframe
              src="https://www.tiktok.com/embed/7331400922079186209"
              width="325"
              height="580"
              allowFullScreen
              title="TikTok Video 2"
            ></iframe>
        </div>

        <br />
        <br />
    </div>
    )
}
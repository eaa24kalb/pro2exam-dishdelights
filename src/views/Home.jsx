import "../App.css";
import heroImg from "../assets/images/heroImg.avif";

export default function Home() {
  return (
    <div className="home">
      <section className="hero"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: 'cover',  
        backgroundPosition: 'center',
        height: '60vh', 
        color: '#f4f4f4', 
        textShadow: '2px 2px 10px rgba(0, 0, 0, 0.7)', 
      }}
      >
        <h1>Welcome to</h1>
        <h1 className="brand-name"><i>DishDelights</i></h1>
        <br />
       
        <h4>
            Your go-to destination for dark, gothic-inspired recipes that will make your taste buds dance in delight.
            <br />
            Explore a variety of delicious recipes, handpicked for dark taste.
        </h4>
      </section>

      <section className="get-inspired">
        <h2>Get Inspired</h2>
        <p>Browse our collection of carefully crafted recipes, perfect for all occasions</p>
        <p>- whether it's a gothic-themed dinner, a spooky Halloween feast, or a quiet night in with decadent treats.</p>
        <p>From mysterious treats to darkly delightful beverages, we have something for everyone.</p>
      </section>

      <section className="tiktok">
        <h2>Check Out These TikTok Recommendations!</h2>
        <p>Need some inspiration? Watch these popular TikTok creators and their gothic-inspired recipes.</p>
        <p>These creators are known for their dark culinary creations, and we think you'll love them:</p>
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
      </section>
    </div>
  );
}
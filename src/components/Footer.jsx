import "../App.css";

export default function Footer() {

    return (
        <div className="footer">
           <p>© {new Date().getFullYear()} DishDelights. All rights reserved.</p>
        </div>
    )
}
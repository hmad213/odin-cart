import { Link } from "react-router-dom"

export default function Navbar(){
    return(
        <nav>
            <h1>Shop</h1>
            <div>
                <button><Link to={"/"}>Home</Link></button>
                <button><Link to={"/shop"}>Products</Link></button>
                <button><Link to={"/cart"}>Cart</Link></button>
            </div>
        </nav>
    )
}
import { Link } from "react-router-dom"

export default function Nav () {
    return (
        <nav>
            <div className="nav-bar">
                <div className="left-navbar">
                    <h2><Link to="/"><span className="primary-highlight">Untz</span>Untz!</Link></h2>
                
                </div>
                <div className="search-bar flex_r">
                    <i className="search-icon fa-solid fa-magnifying-glass"></i>
                    <input
                        type="search"
                        placeholder="Search for products, brands & more" />
                </div>
                <div className="right-navbar">
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                    <Link to="/home">Explore</Link>
                </div>
            </div>
        </nav>
    )
}

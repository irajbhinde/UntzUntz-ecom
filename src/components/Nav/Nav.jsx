import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/index"

export default function Nav () {
    const navigate = useNavigate();
    const {auth, setAuth} = useAuth();

    const signoutHandler = () => {
        localStorage.removeItem("token")
        setAuth({
            authToken : null,
            authStatus : false
        })
        navigate("/home")
    }
    
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
                    {auth.authStatus ? (
                        <div className="right-navbar" onClick={signoutHandler}>Logout</div>
                    ) : (
                        <>
                        <div className="right-navbar">
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Signup</Link>    
                        </div>
                        </>
                    )}
                    
                    <Link to="/home">Explore</Link>
                </div>
            </div>
        </nav>
    )
}



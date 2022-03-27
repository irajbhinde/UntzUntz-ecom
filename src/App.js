import "./App.css";
import logo from "./logo.png";

function App() {
  return (
    <div className="App">
      
      <body>
      <nav>
      <div class="nav-bar">
          <div class="left-navbar">
            <h2><a href="index.html">    <span class="primary-highlight">Untz</span>Untz!</a></h2>
          </div>
          <div class="search-bar flex_r">
            <i class="search-icon fa-solid fa-magnifying-glass"></i>
            <input
              type="search"
              placeholder="Search for products, brands & more"
            />
          </div>
        <div class="right-navbar">
          <a href="/Get_Started/login.html">Login</a>
          <a href="/Get_Started/signup.html">Signup</a>
          <a href="/Pages/Home/home.html">Explore</a>
        </div>
      </div>
    </nav>
    <div class="landing-content">
        <div class="landing-text">
            <p>Your Neighbors Will Listen To Good Music Whether They Like It Or Not</p>
            <a href="/Get_Started/signup.html"><button class="btn-getstarted">Get Started</button></a>
        </div>
        <div class="landing-image">
            <img src="/Images/undraw_mello_otq1.svg" alt="Error loading" />
        </div>
        
    </div>
      </body>
    </div>
  );
}

export default App;

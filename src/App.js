import "./App.css";
import { LandingPage } from "./pages";
import {RouterPage} from "./pages/routes/RouterPage"


function App() {
  return (
    <div className="App">
    <RouterPage />
    <LandingPage />
    
    </div>
  );
}

export default App;

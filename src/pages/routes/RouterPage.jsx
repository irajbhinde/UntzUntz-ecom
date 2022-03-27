import {Routes, Route} from "react-router-dom"
import {LandingPage} from "../index.js"

const RouterPage = () => {
    return (
        <Routes>
            <Route to="/" element={<LandingPage />} />
        </Routes>
    )
}

export { RouterPage } ;
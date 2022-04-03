import { Routes, Route } from "react-router-dom";

import { LandingPage, HomePage } from "../index.js";

const RouterPage = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
};

export { RouterPage };
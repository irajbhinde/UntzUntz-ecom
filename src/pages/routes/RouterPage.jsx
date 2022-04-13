import { Routes, Route } from "react-router-dom";

import { LandingPage, HomePage, ProductListing } from "../index.js";

const RouterPage = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/productlisting" element={<ProductListing />} />
    </Routes>
  );
};

export { RouterPage };
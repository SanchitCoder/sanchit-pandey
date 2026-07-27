import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ResourcesPage from "./pages/ResourcesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<ResourcesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

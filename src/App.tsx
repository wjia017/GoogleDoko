import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import CategoriesPage from "./pages/CategoriesPage";
import Orders from "./pages/Orders";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/categories"
          element={<CategoriesPage />}
        />
         <Route path="/orders" element={<Orders />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
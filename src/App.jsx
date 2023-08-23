import "./App.scss";

//React router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import { HomePage, CartPage, CategoryPage } from "./pages/index";

// Components
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import store from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="category/:id" element={<CategoryPage />} />
            <Route path="cart" element={<CartPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;

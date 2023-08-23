import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useEffect, useState } from "react";

import { fetchCategories } from "../../store/categorySlice";

import { useDispatch, useSelector } from "react-redux";

import { getCartTotal } from "../../store/cartSlice";

export const Navbar = () => {
  const dispatch = useDispatch();
  const { data: categories } = useSelector((state) => state.category);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { totalItems } = useSelector((state) => state.cart);

  // console.log(totalItems);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(getCartTotal());
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="container">
          <div className="navbar-top flex-flex-between">
            {/* Logo de la tienda */}
            <Link to="/" className="navbar-brand">
              <span className="text-regal-blue">Erland</span>
              <span className="text-gold">EPP.</span>
            </Link>

            {/* Buscar */}
            <form action="" className="navbar-search flex">
              <input type="text" placeholder="Search here ..." />
              <button type="submit" className="navbar-search-btn">
                <i className="fas fa-search"></i>
              </button>
            </form>

            {/* Carrito */}
            <div className="navbar-btns">
              <Link to="/cart" className="add-to-cart-btn flex">
                <span className="btn-ico">
                  <i className="fas fa-shopping-cart"></i>
                </span>
                <div className="btn-txt fw-5">
                  cart
                  <span className="cart-count-value">{totalItems}</span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Barra */}
        <div className="navbar-botton bg-regal-blue">
          <div className="container flex flex-between">
            <ul
              className={`nav-links flex ${
                isSidebarOpen ? "show-nav-links" : ""
              }`}
            >
              <button
                type="button"
                className="navbar-hide-btn text-white"
                onClick={() => setIsSidebarOpen(false)}
              >
                <i className="fas fa-times"></i>
              </button>

              {categories.map((category) => (
                <li key={category.id}>
                  <Link
                    to={`/category/${category.id}`}
                    className="nav-link text-white probar"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="navbar-show-btn text-gold"
              onClick={() => setIsSidebarOpen(true)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

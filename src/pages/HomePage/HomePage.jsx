import { ProductList } from "../../components/ProductList/ProductList";
import { Slider } from "../../components/Slider/Slider";
import { CategoryPage } from "../CategoryPage/CategoryPage";

import { useSelector, useDispatch } from "react-redux";

import "./HomePage.scss";
import {
  fecthProductsByCategory,
  fetchCategories,
} from "../../store/categorySlice";
import { useEffect } from "react";
import { Category } from "../../components/Category/Category";
import { SingleCategory } from "../../components/SingleCategory/SingleCategory";
import { fetchProducts } from "../../store/productSlice";



export const HomePage = () => {
  const dispatch = useDispatch();
  const { data: categories, status: categoryStatus } = useSelector(
    (state) => state.category
  );
  const { catProductAll: productsByCategory, catProductAllStatus } =
    useSelector((state) => state.category);
  const {data: products, status: productStatus} = useSelector((state)=>state.product)

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
    dispatch(fecthProductsByCategory(1, "all"));
    dispatch(fecthProductsByCategory(2, "all"));
  }, []);

  return (
    <div className="home-page">
      <Slider />
      <Category categories={categories} status={categoryStatus} />
      <ProductList products = {products} status ={productStatus}/>

      {/* category one products */}
      <section>
        {
          productsByCategory[0] && <SingleCategory products = {productsByCategory[0]} status={catProductAllStatus}/>
        }
      </section>




      {/* category two products */}

      <section>
        {
          productsByCategory[1] && <SingleCategory products = {productsByCategory[1]} status={catProductAllStatus}/>
        }
      </section>
    </div>
  );
};

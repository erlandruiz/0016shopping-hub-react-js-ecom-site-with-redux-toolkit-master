import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./SingleProduct.scss";
import { setIsModalVisible } from "../../store/modalSlice";
import { formatPrice } from "../../utils/helpers";
import { addToCart } from "../../store/cartSlice";
import { Navigate, useNavigate } from "react-router-dom";

export const SingleProduct = () => {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();
  const { data: product } = useSelector((state) => state.modal);

  const increaseQty = ()=>{
    setQty((prevQty)=>{
      let newQty = prevQty + 1;
      return newQty;
    })
  }
  const decreaseQty = ()=>{
    setQty((prevQty)=>{
      let newQty = prevQty - 1;

      if(newQty < 1){
        newQty = 1;
      }
      return newQty;
    })
  }

  const addToCartHandler = (product) =>{
    let totalPrice = qty * product.price;
    const tempProduct = {
      ...product,
      quantity: qty,
      totalPrice
    }
    dispatch(addToCart(tempProduct));
    dispatch(setIsModalVisible(false));
    navigate('/cart');
  }


  return (
    <div className="overlay-bg">
      <div className="product-details-modal bg-white">
        <button
          type="button"
          className="modal-close-btn flex flex-center fs-14"
          onClick={() => dispatch(setIsModalVisible(false))}
        >
          <i className="fas fa-times"></i>
        </button>
        <div className="details-content grid">
          {/* details left */}
          <div className="details-left">
            <div className="details-img">
              <img src={product.images[0]} alt={product.title} />
            </div>
          </div>

          {/* details right */}
          <div className="details-right">
            <div className="details-info">
              <h3 className="title text-regal-blue fs-22 fw-5">
                {product.title}
              </h3>
              <p className="description text-pine-green">
                {product.description}
              </p>
              <div className="price fw-7 fs-24">
                Price: {formatPrice(product.price)}
              </div>
              <div className="qty flex">
                <span className="text-light-blue qty-text">Qty:</span>
                <div className="qty-change flex">
                  <button
                    type="button"
                    className="qty-dec fs-14 text-light-blue" onClick={()=> decreaseQty()}
                  >
                    <i className="fas fa-minus"></i>
                  </button>
                  <span className="qty-value flex flex-center">{qty}</span>
                  <button
                    type="button"
                    className="qty-inc fs-14 text-light-blue" onClick={()=> increaseQty()}
                  >
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
              </div>

              <button type="button" className="btn-primary add-to-cart-btn" onClick={()=> addToCartHandler(product)}>
                <span className="btn-icon">
                  <i className="fas fa-cart-shopping"></i>
                </span>
                <span className="btn-text">Add To Cart</span>
              </button>



            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

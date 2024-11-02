import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";
import Loader from "../components/Loader";
import { BsCartPlus, BsCartX } from "react-icons/bs";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { dispatch, cart } = useCart();

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error))
      .finally(() => setLoading(false));
  }, []);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", product });
  };

  const isInCart = (productId) => cart.some((item) => item.id === productId);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white border border-gray-200 rounded-lg p-4 transform hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-xl cursor-pointer flex flex-col justify-between"
        >
          <div className="w-full h-48 overflow-hidden rounded-lg mb-4">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-contain hover:scale-110 transition-transform duration-300 ease-in-out"
            />
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-1 text-gray-800 hover:text-blue-600 transition-colors duration-200">
              {product.title}
            </h2>
            <p className="text-xl font-bold text-blue-500 mb-2">
              ${product.price}
            </p>
            <p className="text-sm text-gray-500 mb-4 line-clamp-3">
              {product.description.slice(0, 100)}...
            </p>
          </div>
          <button
            onClick={() =>
              isInCart(product.id)
                ? dispatch({ type: "REMOVE_FROM_CART", id: product.id })
                : addToCart(product)
            }
            className={`w-full py-3 rounded-md ${
              isInCart(product.id) ? "bg-red-600" : "bg-blue-600"
            } text-white hover:bg-opacity-90 transition duration-200 flex items-center gap-2 justify-center`}
          >
            {isInCart(product.id) ? (
              <>
                <BsCartX className="w-5 h-5" />
                <span className="font-medium">Remove from Cart</span>
              </>
            ) : (
              <>
                <BsCartPlus className="w-5 h-5" />

                <span className="font-medium">Add to Cart</span>
              </>
            )}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;

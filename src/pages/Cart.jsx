import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { BsPlus, BsTrash } from "react-icons/bs";
import { HiMiniMinusSmall } from "react-icons/hi2";

const Cart = () => {
  const { cart, dispatch } = useCart();
  const [showModal, setShowModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const finalPrice = totalPrice * 0.9; // Applying 10% discount

  const handleDelete = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", id });
    setShowModal(false);
    setItemToDelete(null);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 lg:mb-8 text-neutral-700">
        Shopping Cart
      </h1>
      {cart.length > 0 ? (
        <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-lg p-4 transform hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-md cursor-pointer flex flex-col justify-between"
            >
              <div className="flex items-center space-x-4 w-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 max-sm:w-1/3 max-sm:h-full sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain rounded"
                />
                <div className="flex justify-between w-full max-md:flex-col max-md:space-y-2">
                  <div className="flex-1 sm:flex-none">
                    <h2 className="text-md sm:text-lg md:text-xl font-semibold text-gray-800">
                      {item.title}
                    </h2>
                    <p className="text-gray-500 text-sm sm:text-base">
                      ${item.price} x {item.quantity} ={" "}
                      <span className="font-semibold text-blue-600">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <button
                      onClick={() =>
                        dispatch({ type: "DECREMENT", id: item.id })
                      }
                      className="p-2 sm:p-3 bg-gray-200 rounded-md hover:bg-gray-300 text-lg"
                    >
                      <HiMiniMinusSmall />
                    </button>
                    <span className="p-2 sm:p-3 border rounded-lg text-gray-700 w-10 sm:w-12 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        dispatch({ type: "INCREMENT", id: item.id })
                      }
                      className="p-2 sm:p-3 bg-gray-200 rounded-md hover:bg-gray-300 text-lg"
                    >
                      <BsPlus />
                    </button>
                    <button
                      onClick={() => {
                        setShowModal(true);
                        setItemToDelete(item.id);
                      }}
                      className="p-2 sm:p-3 bg-red-500 text-white rounded-md hover:bg-red-600"
                    >
                      <BsTrash />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="p-4 sm:p-6 bg-white rounded-lg shadow-md text-center">
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700">
              Total Price:{" "}
              <span className="text-blue-600">${totalPrice.toFixed(2)}</span>
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-green-600 mt-2">
              Discounted Price: ${finalPrice.toFixed(2)}
            </p>
            <p className="text-xs sm:text-sm md:text-base text-gray-500 mt-1">
              10% discount applied
            </p>
          </div>
        </div>
      ) : (
        <p className="text-gray-500 text-center text-lg mt-12">
          Your cart is empty. Add some products to see them here!
        </p>
      )}

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-[350px] mx-auto">
            <h2 className="text-xl font-semibold text-neutral-800 mb-4">
              Confirm Delete
            </h2>
            <p>Are you sure you want to remove this item from your cart?</p>
            <div className="flex justify-end mt-4 gap-5">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-200 rounded-md px-4 py-2 hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(itemToDelete)}
                className="bg-red-500 text-white rounded-md px-4 py-2 hover:bg-red-600"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

import React from "react";
import { useState } from "react";
import { HiOutlineHome } from "react-icons/hi";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [isActive, setIsActive] = useState("");
  const { cart } = useCart();
  return (
    <header className="px-20 py-7 max-sm:px-10 max-[480px]:px-5 flex items-center justify-between border-b border-gray-200">
      <div>
        <figure className="max-[480px]:w-40">
          <img src="logo.png" alt="Logo image" />
        </figure>
      </div>
      <div className="flex items-center gap-5">
        <Link to={`/`}>
          <button
            className={`text-lg   font-medium transition-all ease-in-out duration-300 border  p-2 rounded-md hover:bg-blue-400 hover:text-white ${
              isActive === "home"
                ? "bg-blue-400 text-white"
                : "bg-white text-gray-700"
            }`}
            onClick={() => setIsActive("home")}
          >
            <HiOutlineHome className="w-6 h-6" />
          </button>
        </Link>
        <Link to={`/cart`} className="relative">
          <button
            className={`text-lg  font-medium transition-all ease-in-out duration-300 border  p-2 rounded-md hover:bg-blue-400 hover:text-white ${
              isActive === "cart"
                ? "bg-blue-400 text-white"
                : "bg-white text-gray-700"
            }`}
            onClick={() => setIsActive("cart")}
          >
            <IoCartOutline className="w-6 h-6" />
          </button>
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
            {cart.length}
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;

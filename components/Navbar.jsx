import Link from "next/link";
import React, { useState, useRef } from "react";
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";

const Navbar = ({ cart, addToCart, clearCart, subtotal, removeFromCart }) => {
  const [toggle, setToggle] = useState(false);
  const ref = useRef();
  const toggleClick = () => {
    toggle
      ? ref.current.classList.remove("translate-x-full")
      : ref.current.classList.add("translate-x-full");

    setToggle(!toggle);
  };
  return (
    <>
      <nav className="flex flex-col md:flex-row md:justify-start justify-center items-center my-1 shadow-xl sticky top-0 bg-white z-10">
        <div className="logo">
          <img
            src={
              "https://c8.alamy.com/comp/2A8B5NA/t-shirt-store-logo-design-2A8B5NA.jpg"
            }
            height="70"
            width="70"
            className="p-2 rounded-full"
          ></img>
          <Link href={"/"}>
            <a>
              <h1 className="font-extrabold mx-3">Coders Store</h1>
            </a>
          </Link>
        </div>
        <div className="nav">
          <ul className="flex items-center space-x-2 font-semibold md:text-md">
            <Link href={"/tshirts"}>
              <a>
                <li>T-shirts</li>
              </a>
            </Link>
            <Link href={"/hoodies"}>
              <a>
                <li>Hoodies</li>
              </a>
            </Link>
            <Link href={"/stickers"}>
              <a>
                <li>Stickers</li>
              </a>
            </Link>
            <Link href={"/mugs"}>
              <a>
                <li>Mugs</li>
              </a>
            </Link>
          </ul>
        </div>
        <div className="cart flex cursor-pointer absolute right-5 top-6">
          <Link href={"/login"}>
            <a>
              <MdAccountCircle className="text-xl md:text-3xl mx-1" />
            </a>
        </Link>
          <button onClick={toggleClick}>
            <AiOutlineShoppingCart className="hover:text-green-400 rounded-full hover:bg-slate-100 text-xl md:text-3xl" />
          </button>
        </div>
        <div
          ref={ref}
          className="sidecart w-[22rem] h-[100vh] absolute top-0 right-0 bg-green-100 p-6 transform transition-transform translate-x-full"
        >
          <h2 className="font-extrabold text-xl text-teal-700 text-center">
            Shopping Cart
          </h2>
          <span
            className="absolute top-2 right-2 font-extrabold cursor-pointer hover:text-red-700"
            onClick={toggleClick}
          >
            <AiFillCloseCircle />
          </span>
          <ol className="list-none mt-3">
            {Object.keys(cart).length === 0 ? (
              <p className="text-gray-500 text-sm text-center">
                Cart is empty!
              </p>
            ) : null}

            {Object.keys(cart).map((k) => (
              <li key={k} className="flex flex-row">
                {cart[k].name}
                <span className=" flex flex-row ml-auto mt-1">
                  <AiFillMinusCircle
                    onClick={() => {
                      removeFromCart(
                        k,
                        1,
                        cart[k].price,
                        cart[k].name,
                        cart[k].size,
                        cart[k].variant
                      );
                    }}
                    className="mx-1 mt-1"
                  />
                  {cart[k].quantity}{" "}
                  <AiFillPlusCircle
                    className="mx-1 mt-1"
                    onClick={() => {
                      addToCart(
                        k,
                        1,
                        cart[k].price,
                        cart[k].name,
                        cart[k].size,
                        cart[k].variant
                      );
                    }}
                  />
                </span>
              </li>
            ))}
          </ol>
          <div className="text-semibold">Subtotal: {subtotal}$</div>
          <div className="flex px-7 mt-3">
            <Link href={"/checkout"}>
              <button className="mt-2 text-sm text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">
                Checkout
              </button>
            </Link>
            <button
              className="mt-2 ml-auto text-sm text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded"
              onClick={clearCart}
            >
              Clear cart
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

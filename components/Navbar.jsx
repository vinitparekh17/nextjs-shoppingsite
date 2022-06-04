import Link from "next/link";
import React, { useState, useRef } from "react";
import { AiOutlineShoppingCart, AiFillCloseCircle, AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

function Navbar() {
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
      <nav className="flex flex-col md:flex-row md:justify-start justify-center items-center my-1 shadow-xl">
        <div className="logo">
          <img
            src={
              "https://c8.alamy.com/comp/2A8B5NA/t-shirt-store-logo-design-2A8B5NA.jpg"
            }
            height="70"
            width="70"
            className="p-2 rounded-full"
          ></img>
        </div>
        <div className="nav">
          <ul className="flex items-center space-x-2 font-semibold md:text-md">
            <Link href={"/"}>
              <a>
                <li>
                  <h1 className="font-extrabold mx-3">Coders Store</h1>
                </li>
              </a>
            </Link>
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
        <div className="cart absolute right-5 top-6">
          <button onClick={toggleClick}>
            <AiOutlineShoppingCart className="p-2 hover:text-green-400 rounded-full hover:bg-slate-100 md:text-3xl text-2xl" />
          </button>
        </div>
        <div
          ref={ref}
          className="sidecart w-[20rem] absolute top-0 right-0 bg-green-100 p-10 transform transition-transform translate-x-full"
        >
          <h2 className="font-extrabold text-xl">Shopping Cart</h2>
          <span
            className="absolute top-2 right-2 font-extrabold cursor-pointer hover:text-red-700"
            onClick={toggleClick}
          >
            <AiFillCloseCircle />
          </span>
          <ol className="list-none mt-3">
            <li className="flex justify-center items-center">
              T-shirts{" "}
              <span className="absolute right-3"><AiFillMinusCircle className="mx-3"/>3<AiFillPlusCircle className="mx-3"/></span>
            </li>
            <li className="flex justify-center items-center">
              Hoodies{" "}
              <span className="absolute right-3"><AiFillMinusCircle className="mx-3"/>5<AiFillPlusCircle className="mx-3"/></span>
            </li>
            <li className="flex justify-center items-center">
              Stickers{" "}
              <span className="absolute right-3"><AiFillMinusCircle className="mx-3"/>8<AiFillPlusCircle className="mx-3"/></span>
            </li>
          </ol>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

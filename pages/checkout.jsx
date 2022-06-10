import React from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

function checkout({ cart, subtotal, removeFromCart, addToCart }) {
  return (
    <div className="container m-auto">
      <h1 className="font-bold text-3xl my-8 text-center text-teal-700">
        Checkout
      </h1>
      <form method="post" className="rounded p-2 shadow-md">
        <h2 className="font-semibold text-xl my-8 text-teal-500 text-center underline">
          Delivery Details
        </h2>
        <div className="w-full flex justify-center items-center flex-col">
          <div className="flex flex-row w-1/2">
            <div className="mb-2 mx-2 px-2">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="mb-2 mx-2 px-2">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>

          <div className="flex flex-row w-1/2">
            <div className="mb-2 mx-2 px-2">
              <label
                htmlFor="state"
                className="leading-7 text-sm text-gray-600"
              >
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="mb-2 mx-2 px-2">
              <label
                htmlFor="pincode"
                className="leading-7 text-sm text-gray-600"
              >
                Pincode
              </label>
              <input
                type="number"
                id="pincode"
                name="pincode"
                className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>

          <div className="flex flex-row w-1/2">
            <div className="mb-2 mx-2 px-2">
              <label htmlFor="city" className="leading-7 text-sm text-gray-600">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="mb-2 mx-2 px-2">
              <label
                htmlFor="phone"
                className="leading-7 text-sm text-gray-600"
              >
                Phone
              </label>
              <input
                type="number"
                id="phone"
                name="phone"
                className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>

          <div className="mb-2 w-1/2 px-4">
            <label
              htmlFor="address"
              className="px-2 leading-7 text-sm text-gray-600"
            >
              Address
            </label>
            <textarea
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </form>
      <h2 className="font-semibold text-xl my-8 text-teal-500 text-center underline">
        Review Cart Items
      </h2>
      <ol className="w-full list-none mt-3">
        {Object.keys(cart).length === 0 ? (
          <p className="text-gray-500 text-sm text-center">No items found!</p>
        ) : null}

        {Object.keys(cart).map((k) => (
          <>
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
                {cart[k].quantity}
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
            <span className="font-bold">Subtotal: $ {subtotal}</span>
          </>
        ))}
      </ol>
    </div>
  );
}

export default checkout;

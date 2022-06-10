import React from "react";
import Link from "next/link"

const forgot = () => {
  return (
    <section className="h-screen">
      <div className="px-6 h-full text-gray-800">
        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
            <img
              src="https://cdn.discordapp.com/attachments/873729229534167101/983794232424792084/Pngtreeonline_shopping_concept_women_are_5228496.png"
              className="w-full"
              alt="Sample image"
            />
          </div>
          <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                      <h2 className="font-extrabold text-teal-500 mb-4 text-3xl text-center p-4">
                          Forgot password!
                      </h2>
            <form>
              {/* <!-- Email input --> */}
              <div className="mb-6">
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-teal-600 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Email address"
                />
              </div>

              <div className="text-center lg:text-left">
                <button
                  type="button"
                  className="inline-block px-7 py-3 bg-teal-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-teal-700 hover:shadow-lg focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Continue
                </button>
                <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                  Go back to login?
                  <Link href={"/login"}>
                    <a className="text-red-600 ml-1 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out">
                      Login
                    </a>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default forgot;

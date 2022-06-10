import React from 'react';
import Link from "next/link";
import { connect, connections } from "mongoose";
import Product from "../models/Product";

function hoodies({mypro}) {
  return (
      <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {mypro.map((p) => (
            <Link key={p._id} href={`/products/${p.slug}`}>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg border-2 m-5">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={p.img}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {p.catagory.toUpperCase()}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {p.title}
                  </h2>
                  <p className="mt-1">${p.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export async function getServerSideProps(context) {
  if (!connections[0].readyState) {
    connect(
      "mongodb+srv://parekh:Smartyvinit100@webwork.stlpo.mongodb.net/WebWork?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  }
  let products = await Product.find({ catagory: "hoodie" });
  let mypro = JSON.parse(JSON.stringify(products));
  return {
    props: { mypro },
  };
}

export default hoodies
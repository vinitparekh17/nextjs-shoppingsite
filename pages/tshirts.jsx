import React, { useEffect } from "react";
import Link from "next/link";
import { connect, connections } from "mongoose";
import Product from "../models/Product";

function tshirts({ mypro }) {
  useEffect(() => {
    console.log(mypro);
  },[])
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {Object.keys(mypro).map((p) => (
            <Link key={mypro[p]._id} href={`/products/${mypro[p].slug}`}>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg border-2 m-5">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={mypro[p].img}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {mypro[p].catagory.toUpperCase()}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {mypro[p].title}
                  </h2>
                  <p className="mt-1">$ {mypro[p].price}</p>
                  <div className="mt-1">
                    {mypro[p].size.includes("s") && (
                      <span className="border border-black p-1 m-1">S</span>
                    )}
                    {mypro[p].size.includes("m") && (
                      <span className="border border-black p-1 m-1">M</span>
                    )}
                    {mypro[p].size.includes("xl") && (
                      <span className="border border-black p-1 m-1">Xl</span>
                    )}
                    {mypro[p].size.includes("XXl") && (
                      <span className="border border-black p-1 m-1">XXL</span>
                    )}
                    {mypro[p].color.includes("blue") && <button className={`border-2 border-gray-300 ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none`}></button>}
                    {mypro[p].color.includes("red") && <button className={`border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none`}></button>}
                  </div>
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
  let products = await Product.find({catagory: "tshirts"});
  let tshirts = {};
  //line 68
  // looping through an array elements and
  // checking the condition that if tshirt object has a title which is stored in mongoDb if it has then
  // checking another condition (nested if) that tshirt object has a color which is stored in db and
  // item ( tshirt in db ) has stock or not if yes then pushing db item color into tshirt object
  // same method appling for the tshirt size

  //line 77:
  // else part of the code that defines that if our tshirt object does not contain the 
  // title(dose not has product which is saved in db)
  // create an object with key name which is item name then check that stock is avaliablee or not

  for (let item of products) {
    if (item.title in tshirts) {
      if (!tshirts[item.title].color.includes(item.color) && item.stock > 0) {
        tshirts[item.title].color.push(item.color);
      }

      if (!tshirts[item.title].size.includes(item.size) && item.stock > 0) {
        tshirts[item.title].size.push(item.size)
      }
    } else {
      tshirts[item.title] = JSON.parse(JSON.stringify(item))
      if (item.stock > 0) {
        tshirts[item.title].color = [item.color]
        tshirts[item.title].size = [item.size]
      }
    }
  }
  return {
    props: { mypro: JSON.parse(JSON.stringify(tshirts)) },
  };
}

export default tshirts;

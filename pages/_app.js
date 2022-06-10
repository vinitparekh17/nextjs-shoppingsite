import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import { useState, useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState({})
  const [subtotal, setSubTotal] = useState(0)

  const saveItems = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart))
    let subtotals = 0;
    if (Object.keys(myCart).length !== 0) {
      let keys = Object.keys(myCart)
      for (let i = 0; i < Object.keys(cart).length; i++) {
        subtotals = subtotals + myCart[keys[i]].price * myCart[keys[i]].quantity
      }
      setSubTotal(subtotals)
    }
  }

  const addToCart = (itemCode, quantity, price, name, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].quantity = cart[itemCode].quantity + quantity
    } else {
      newCart[itemCode] = {quantity: 1, price, name, size, variant}
    }

    if (newCart[itemCode].quantity <= 0) {
      delete newCart[itemCode]
    }

    setCart(newCart)
    saveItems(newCart)
  }

  const clearCart = () => {
    setSubTotal(0)
    setCart({})
    saveItems({})
  }

  useEffect(() => {
    try {
      const cartItem = localStorage.getItem("cart")
      if (cartItem) {
        setCart(JSON.parse(localStorage.getItem("cart")))
        saveItems(JSON.parse(localStorage.getItem("cart")))
        
      }
    } catch (error) {
      console.error(error)
      localStorage.clear()
    }
  }, [])

  const removeFromCart = (itemCode, quantity) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].quantity = cart[itemCode].quantity - quantity
      setCart(newCart)
      saveItems(newCart)
    }
    if (newCart[itemCode]["quantity"] <= 0) {
      delete newCart[itemCode]
    }
    setCart(newCart)
  }
  return (
    <>
      <Navbar cart={cart} addToCart={addToCart} clearCart={clearCart} removeFromCart={removeFromCart} subtotal={subtotal} />
      <Component cart={cart} addToCart={addToCart} clearCart={clearCart} removeFromCart={removeFromCart} subtotal={subtotal} {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp

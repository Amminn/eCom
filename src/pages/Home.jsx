import React, { useEffect, useState, useContext } from "react";
// import Tags from "../components/Tags/index.jsx";
// import { Rating } from "@mui/material";
import { MyContext } from "../App";
import Product from "../components/Product";

export default function Home(props) {
  const { count, setCount } = useContext(MyContext)
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://api.noroff.dev/api/v1/online-shop')
      .then(res => res.json())
      .then(json => {
        console.log(json)
        setProducts(json)
      })
      .finally(() => setLoading(false))
  }, [])

  const productsRender = products.map(product => {
    return (
      <Product
        key={product.id}
        id={product.id}
        img={product.imageUrl}
        name={product.title}
        tags={product.tags}
        price={product.price}
        review={product.reviews}
        discount={product.discountedPrice}
        all={product}
      />
    )
  })

  return (

    <div className="container">
      {
        loading &&
        <div className="loading-wrapper">
          <h2 className="loading">
            Loading...
          </h2>
        </div>
      }
      <div className="products">
        {productsRender}
      </div>
      <hr />
    </div>

    );
}
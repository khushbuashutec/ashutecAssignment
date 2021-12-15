import { useEffect } from "react";
import Navigation from "../components/navigation"
import { ProductData } from "../components/ProductData";
import Product from "../components/Products"

const Home = () => {

  useEffect(() => {
    localStorage.setItem("ProductData", JSON.stringify(ProductData))
  }, []);

  return (
    <>
      <Navigation />
      <Product />
    </>
  )
}
export default Home


import { Container, Divider, Grid, IconButton } from "@mui/material"
import { useEffect, useState } from "react"
import Filter from "./Filter"
import ProductCard from "./productCard"
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import classes from "./product.module.css";
import { useRouter } from "next/router";
import Trash from "../pages/trash";
import { ProductData } from './ProductData'
import { productType } from "./type/product";


const Product = () => {

    const [productsData, setProductsData] = useState<productType[] | []>([]);
    useEffect(() => {
        let storedData = JSON.parse(window.localStorage.getItem("ProductData"));
        setProductsData(storedData);
    }, [setProductsData, productsData]);



    const trashData = [];
    const handleDelete = (id: number) => {
        const index = productsData.findIndex((product) => product.id === id)
        const deletedProduct = productsData.splice(index, 1)
        trashData.push(deletedProduct)
        localStorage.setItem("ProductData", JSON.stringify(productsData))
        console.log(index, productsData, trashData)

    }
    const router = useRouter();
    return (
        <body className={classes.body}>
            <Container maxWidth="lg" >
                <Filter data={productsData} />
                <Divider />
                <Grid
                    container
                    spacing={2}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    gap="2rem"
                    padding="50px 0"
                >
                    {productsData.map((product, index) =>
                        <ProductCard
                            data={product}
                            key={index}
                            handleDelete={handleDelete}
                        />)}
                </Grid>

            </Container>
            <div className={classes.addIcon}>
                <IconButton onClick={() => router.push("/EditForm")}  >
                    <AddCircleSharpIcon name="AddForm"
                        sx={{ width: 60, height: 60, color: "#0069d9" }}
                        fontSize="medium"
                    />
                </IconButton>
            </div>
        </body>
    )
}
export default Product
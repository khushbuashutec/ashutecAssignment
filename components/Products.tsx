import { Container, Divider, Grid } from "@mui/material"
import Filter from "./Filter"
import ProductCard from "./productCard"
import { ProductData } from "./ProductData"

const Product = () => {
    return (
        <Container maxWidth="lg">
            <Divider />
            <Filter />
            <Divider />
            <Grid
                container
                spacing={2}
                direction="row"
                justifyContent="center"
                alignItems="center"
                gap="2rem"
            >

                {ProductData.map((product) => <ProductCard data={product} />)}

            </Grid>
        </Container>
    )
}
export default Product
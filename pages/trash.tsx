import { Grid } from "@mui/material"
import { Box } from "@mui/system"
import ProductCard from "../components/productCard"
const Trash = ({ deletedProduct: [] }) => {
    console.log(deletedProduct)
    return (
        <Box>
            <Grid
                container
                spacing={2}
                direction="row"
                justifyContent="center"
                alignItems="center"
                gap="2rem"
                padding="50px 0"
            >
                {deletedProduct.map((product) => <ProductCard data={product} />)}
            </Grid>
        </Box>
    )
}
export default Trash
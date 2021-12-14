import { Button, Card, CardActions, CardContent, CardMedia, Divider, IconButton, Typography } from "@mui/material"
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import classes from './product.module.css'
import { productType } from "./product";
const ProductCard = ({ data }): productType => {
    const {
        id,
        title,
        Description,
        image,
        category,
        rating,
        locations,
        price,
        inStock
    } = data;
    return (
        <Card sx={{
            maxWidth: 300,
            padding: 2,
            boxShadow: '0px 10px 5px rgba(147,147,147, 0.23)',
            border: '1px solid rgba(147,147,147, 0.13)'
        }} >
            <CardMedia
                component="img"
                height="140"
                image={image}
                alt={title}
            // sx={{ border: '1px solid grey' }}
            />
            <CardContent>

                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" className={classes.description}>
                    {Description}
                </Typography>
                <div className={classes.filterHeader}>
                    <Typography variant="body2">
                        ${price}
                    </Typography>
                    <Typography className={inStock === 1 ? classes.green : classes.red} variant="body2">
                        {inStock === 1 ? 'In Stock' : 'Out Of Stock'}
                    </Typography>
                </div>
            </CardContent>
            <Divider />
            <CardActions className={classes.cardButton}>
                <Button size="small">
                    <IconButton>
                        <DeleteForeverOutlinedIcon sx={{ color: 'red', width: 20 }} />
                    </IconButton>
                </Button>
                <Button size="small">
                    <IconButton>
                        <EditOutlinedIcon sx={{ color: 'blue', width: 20 }} />
                    </IconButton>
                </Button>
            </CardActions>
        </Card>)

}
export default ProductCard
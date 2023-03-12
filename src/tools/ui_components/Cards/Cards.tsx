import React, { useCallback } from "react";
import { useDispatch } from "react-redux"  

import {
    Box,
    Card,
    CardActions,
    CardMedia,
    Grid,
    Typography,
    IconButton,
  } from "@mui/material";
import { makeStyles } from '@mui/styles'

import { PlusMinus, Tooltip } from "../../../tools/ui_components/"
import { AddToCartIcon, RemoveIcon } from "../../../tools/icons"

import { CatalogProduct } from '../../../modules/product/types'
import { addProductToCart, removeProductFromCart } from '../../../store/cartItemsSlice'

interface Props<Item> {
    data: Item[]
    isCart: boolean
}
 
const useStyles = makeStyles({
    root: {
        borderColor: "#C9C9C9",
        height: 119,
        margin: "8px 24px",
        width: "100%",
    },
    media: {
        height: 35,
        width: 35,
    },
    mediaWraaper: {
        height: "100%",
        display: "flex",
        alignItems: "start",
        marginTop: 8,
    },
    contentLine: {
        margin: 2,
        fontSize: "14px",
        maxWidth: 328,
        overflow: 'hidden',
        whiteSpace: 'nowrap'
    },
    
    totalLine: {
        display: "flex",
        justifyContent: "end",
        padding: "0 2px",
        width: "80%",
    },

    actions: {
        display: "flex",
        alignItems: "end",
        justifyContent: "end",
        margin: "16px 16px 0 0",
    },

    actionsCart: {
        cursor: "pointer",
        "&:hover": {
            cursor: "hand",
        }
    }
})

  function Cards({ data, isCart }: Props<CatalogProduct>) {
    const classes = useStyles()
    const dispatch = useDispatch()

    const handleAddProductToCart = useCallback((product: CatalogProduct) => {
        dispatch(addProductToCart(product));
    }, [])

    const handleRemoveProductToCart = useCallback((product: CatalogProduct) => {
        dispatch(removeProductFromCart(product));
    }, [])    

    return (
        <>
            {data.map((item: CatalogProduct) => (
                <Card className={classes.root} style={{ borderRadius: '8px', width: "100%" }} variant="outlined">
                    <Grid container>
                        <Grid item xs={2}>
                            <Box sx={{ p: 2 }}>
                                <Box className={classes.mediaWraaper}>
                                    <CardMedia
                                        component='img'
                                        className={classes.media}
                                        image={item.image}
                                        alt={item.title}
                                        sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                                        />
                                </Box>
                            </Box>
                        </Grid>
                        {!isCart ? (
                            <>
                                <Grid item xs={8}>
                                    <Box sx={{ p: 2 }}>
                                        <Typography variant='body1'>
                                            {item.id}
                                        </Typography>
                                        <Typography variant='body1' className={classes.contentLine}>
                                            {item.title}
                                        </Typography>
                                        <Typography variant='body1'>
                                            {item.price}
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={2}>
                                    <CardActions className={classes.actions}>
                                        <IconButton onClick={() => handleAddProductToCart(item)}>
                                            <Tooltip title={"Add to Cart"}>
                                                <AddToCartIcon />
                                            </Tooltip>
                                        </IconButton>
                                    </CardActions>
                                </Grid>
                            </>) : (
                            <>
                                <Grid item xs={10}>
                                    <Grid container>
                                        <Grid item xs={10}>
                                            <Box sx={{ px: 2, pt: 2, pb: 0 }}>
                                                <Typography variant='body1' className={classes.contentLine}>
                                                    {item.title}
                                                </Typography>
                                                <Typography variant='body1'>
                                                    ${item.price}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <CardActions className={classes.actions}>
                                                <IconButton onClick={() => handleRemoveProductToCart(item)}>
                                                    <Tooltip title={"Remove from Cart"}>
                                                        <RemoveIcon />
                                                    </Tooltip>
                                                </IconButton>
                                            </CardActions>
                                        </Grid>                                
                                    </Grid>                                    
                                    <Grid container>
                                        <Grid item xs={8}>
                                            <PlusMinus item={item} />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Box className={classes.totalLine}>
                                                <Typography variant='h3' className={classes.contentLine} style={{ fontWeight: 700 }}>
                                                    Total:
                                                </Typography>
                                                <Typography variant='h3' className={classes.contentLine} style={{ fontWeight: 700 }}>
                                                    ${(item.price * item.quantity).toFixed(2)}
                                                </Typography>
                                            </Box>
                                        </Grid>                                
                                    </Grid>                                                                        
                                </Grid>
                            </>
                            ) }  
                    </Grid>
                    {isCart && (
                        <Grid container>
                                <Grid item xs={8}>
                                    <Box sx={{ p: 2 }}>
                                        <Typography variant='body1' className={classes.contentLine}>
                                            {item.title}
                                        </Typography>
                                        <Typography variant='body1'>
                                            ${item.price}
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={2}>
                                    <CardActions className={classes.actions}>
                                        <IconButton onClick={() => handleRemoveProductToCart(item)}>
                                            <Tooltip title={"Remove from Cart"}>
                                                <RemoveIcon />
                                            </Tooltip>
                                        </IconButton>
                                    </CardActions>
                                </Grid>                                                            
                        </Grid>
                    )}
                </Card>
            ))}
        </>
    );
  }
  
  export default Cards
  
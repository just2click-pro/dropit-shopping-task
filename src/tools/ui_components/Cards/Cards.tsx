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

import { GetKeyRow } from "../types"
import { Tooltip } from "../../../tools/ui_components/"
import { AddToCartIcon } from "../../../tools/icons"

import { CatalogProduct } from '../../../modules/product/types'
import { addProductToCart } from '../../../store/cartItemsSlice'

interface Props<Item> {
    data: Item[];
    getKeyRow: GetKeyRow<Item>;
}
 
const useStyles = makeStyles({
    root: {
        borderColor: "#C9C9C9",
        height: 99,
        maxWidth: 536,
        minWidth: 328,
        margin: "8px 0",
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

  function Cards<Item>({ data }: Props<CatalogProduct>, isCart: boolean = false) {
    const classes = useStyles()
    const dispatch = useDispatch()

    const onAddItem = (item: CatalogProduct) => {
        handleAddProductToCart(item)
    }    

    const handleAddProductToCart = useCallback((product: CatalogProduct) => {
        dispatch(addProductToCart(product));
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
                                <IconButton onClick={() => onAddItem(item)}>
                                    <Tooltip title={"Add to Cart"}>
                                        <AddToCartIcon />
                                    </Tooltip>
                                </IconButton>
                            </CardActions>
                        </Grid>  
                    </Grid>  
                </Card>
            ))}
        </>
    );
  }
  
  export default Cards
  
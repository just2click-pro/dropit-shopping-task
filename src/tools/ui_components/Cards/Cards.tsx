import React from "react";

import {
    Box,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Paper,
    Grid,
    styled,
    Tooltip,
    Typography,
  } from "@mui/material";
import { makeStyles } from '@mui/styles'
  
import { AddToCartIcon } from "../../../tools/icons"

import { GetKeyRow } from "../types"
import { CatalogProduct } from '../../../modules/product/types'

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

const onAddItem = (item: CatalogProduct) => {
    console.log("*** item? ", item)
}

  function Cards<Item>({ data }: Props<CatalogProduct>) {
    const classes = useStyles()

    return (
        <>
            {data.map((item: CatalogProduct) => (
                <Card className={classes.root} style={{ borderRadius: '8px', width: "100%" }} variant="outlined">
                    <Grid container>
                        <Grid item xs={2}>
                            <Box className={classes.mediaWraaper}>
                                <CardMedia
                                    component='img'
                                    className={classes.media}
                                    image={item.image}
                                    alt={item.title}
                                    sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                                    />
                            </Box>
                        </Grid>
                        <Grid item xs={8}>
                            <CardContent>
                                <Typography component='div'>
                                    {item.id}
                                </Typography>
                                <Typography component='div' className={classes.contentLine}>
                                    {item.title}
                                </Typography>
                                <Typography component='div'>
                                    ${item.price}
                                </Typography>                                                              
                            </CardContent>                            
                        </Grid>           
                        <Grid item xs={2}>
                            <CardActions className={classes.actions}>
                                <div style={{ cursor: "pointer" }} onClick={() => onAddItem(item)}>
                                    <Tooltip title={"Add to Cart"}>
                                        <AddToCartIcon />
                                    </Tooltip>
                                </div>
                            </CardActions>
                        </Grid>  
                    </Grid>  
                </Card>
            ))}
        </>
    );
  }
  
  export default Cards;
  
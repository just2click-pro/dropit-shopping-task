import React, { useCallback, useEffect, useState } from "react"

import {
    Box,
    Button,
    Typography,
  } from "@mui/material"
import { useDispatch } from "react-redux"  
import { makeStyles } from '@mui/styles'

import { MinusIcon, PlusIcon, RemoveIcon } from "../../../tools/icons"
import { CatalogProduct } from '../../../modules/product/types'
import { increaseProductQuantity, decreaseProductQuantity } from '../../../store/cartItemsSlice'

interface Props {
    item: CatalogProduct
}

const useStyles = makeStyles({
    minusButton: {
        background: "#F5F5F5", 
        borderTopLeftRadius: "16px",  
        borderBottomLeftRadius: "16px",
        maxWidth: "32px",    
    },
    quantityLabel: {
        background: "#F5F5F5", 
        padding: "6px 0",
    },
    plusButton: {
        background: "#F5F5F5", 
        borderTopRightRadius: "16px",  
        borderBottomRightRadius: "16px",
        maxWidth: "32px",    
    },
    iconWrapper: {
        margin: "5px",
        height: 14
    }
})


function PluMinus({ item }: Props) {
    const classes = useStyles()
    const dispatch = useDispatch()

    const handleDecrement = useCallback((item: CatalogProduct) => {
        dispatch(decreaseProductQuantity(item))
    }, [dispatch])
  
    const handleIncrement = useCallback((item: CatalogProduct) => {
        dispatch(increaseProductQuantity(item))
    }, [dispatch])      
  

    return (
        <Box display="flex" alignItems="center">
            <Button onClick={e => handleDecrement(item)} 
                className={classes.minusButton}>
                    <div className={classes.iconWrapper}>
                        <MinusIcon />
                    </div>
            </Button>
            <Typography variant='body1' component='span' className={classes.quantityLabel}>
                { item.quantity }
            </Typography>
            <Button onClick={e => handleIncrement(item)}
                className={classes.plusButton}>              
                    <div className={classes.iconWrapper}>
                        <PlusIcon />
                    </div>
            </Button>            
    </Box>)
}

export default PluMinus

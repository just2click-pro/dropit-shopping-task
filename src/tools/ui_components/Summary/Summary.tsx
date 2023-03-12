import React, { useEffect, useState } from "react";

import {
    Box,
    Button,
    Card,
    Grid,
    Modal,
    Typography,
  } from "@mui/material"

import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"  
import { makeStyles } from '@mui/styles'

import { CatalogProduct } from '../../../modules/product/types'
import { clearCart } from '../../../store/cartItemsSlice';

interface Props {
    itemsInCart: CatalogProduct[]
}
 
const useStyles = makeStyles({
    root: {
        borderColor: "#C9C9C9",
        maxWidth: 536,
        minWidth: 328,
        margin: "0 24px",
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

  function Summary({ itemsInCart }: Props) {
    const history = useHistory()
    const classes = useStyles()
    const dispatch = useDispatch()

    const [subtotal, setSubtoal] = useState(0)
    const [shipping, setShipping] = useState(0)
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        dispatch(clearCart())
        setOpen(false)
        history.push("/catalog")
    }

    useEffect(() => {
      let total = 0
      
      itemsInCart.forEach((item) => total += item.price * item.quantity)

      setSubtoal(total)
    
    }, [itemsInCart, itemsInCart.length])
    

    return (
        <>
            <Card className={classes.root} style={{ borderRadius: '4px', width: "100%" }} variant="outlined">
                <Grid container>
                    <Grid item xs={12}>
                        <Box sx={{ pt: 4, px: 4, pb: 2 }}>
                            <Typography variant='h5'>
                                Order summary
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{ px: 4, py: 2, display: "flex", justifyContent: "space-between" }}>
                            <Typography variant='body1'>
                                Subtotal:
                            </Typography>
                            <Typography variant='body1' className={classes.contentLine}>
                                ${subtotal.toFixed(2)}
                            </Typography>
                        </Box>                            
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{ px: 4, py: 2, display: "flex", justifyContent: "space-between" }}>
                            <Typography variant='body1'>
                                Shipping:
                            </Typography>
                            <Typography variant='body1' className={classes.contentLine}>
                                Free
                            </Typography>
                        </Box>                            
                    </Grid>                                   
                    <Grid item xs={12}>
                        <Box>
                            <hr />
                        </Box>                            
                    </Grid>                                                           
                    <Grid item xs={12}>
                        <Box sx={{ px: 4, py: 2, display: "flex", justifyContent: "space-between" }}>
                            <Typography variant='h3'>
                                Total:
                            </Typography>
                            <Typography variant='h4'>
                                ${(subtotal + shipping).toFixed(2)}
                            </Typography>
                        </Box>                            
                    </Grid>                                                           
                </Grid>
            </Card>
            <Button 
                sx={{ my: 2, mx: 3, backgroundColor: "#00B588", color: "white", width: "100%" }} 
                variant="contained"
                disabled={subtotal + shipping === 0}
                onClick={handleOpen}>
                Checkout
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description">
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    minWidth: 400,
                    justifyContent: 'center',
                }}>
                    <Typography id="modal-title" variant="h5" component="h2" sx={{mb: 2}}>
                        Checkout completed
                    </Typography>
                    <Typography id="modal-description" variant="body1" sx={{mb: 2}}>
                        Thanks for buying, see you soon!
                    </Typography>
                    <Button variant="text" onClick={handleClose} sx={{ color: "#00B588", fontSize: "24px" }}>
                        See Ya
                    </Button>
                </Box>
            </Modal>
        </>
    );
  }
  
  export default Summary
  
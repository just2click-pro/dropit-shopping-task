import React, { useCallback, useMemo } from "react"
import { IconButton, Box, Button, Typography } from "@mui/material"

import { useDispatch } from "react-redux"  
import { GetKeyRow, TableColumn } from "../../tools/ui_components/types"
import { MinusIcon, PlusIcon, RemoveIcon } from "../../tools/icons"
import { Tooltip } from "../../tools/ui_components/"

import { increaseProductQuantity, decreaseProductQuantity } from '../../store/cartItemsSlice'


import { CatalogProduct } from "../product/types"

interface Props {
  onRemoveItem: (item: CatalogProduct) => void
}

function useCaartTable({ onRemoveItem }: Props) {
  const dispatch = useDispatch()

  const handleDecrement = useCallback((item: CatalogProduct) => {
      dispatch(decreaseProductQuantity(item))
  }, [dispatch])

  const handleIncrement = useCallback((item: CatalogProduct) => {
      dispatch(increaseProductQuantity(item))
  }, [dispatch])      

  const columns: TableColumn<CatalogProduct>[] = useMemo(
    () => [
      {
        key: "image",
        title: "Item",
        renderCell: (item) => (
          <img
            alt=""
            src={item.image}
            style={{ width: 60, objectFit: "contain" }}
          />
        ),
      },
      {
        key: "title",
        title: "Title",
        renderCell: (item) => <a>{item.title}</a>,
      },
      {
        key: "price",
        title: "Price",
        renderCell: (item) => <a>${item.price}</a>,
      },
      {
        key: "quantity",
        title: "Quantity",
        renderCell: (item) => <a>{item.quantity}</a>,
      },
      {
        key: "plus_minus",
        title: "Quantity",
        renderCell: (item) => (
          <Box display="flex" alignItems="center">
            <Button onClick={e => handleDecrement(item)} 
              sx={{ 
                background: "#F5F5F5", 
                borderTopLeftRadius: "16px",  
                borderBottomLeftRadius: "16px",
                maxWidth: "32px",
              }}>
                <MinusIcon />
            </Button>
            <Typography variant='body1' component='span' sx={{ py: 0.75, background: "#F5F5F5",  }}>
                { item.quantity }
            </Typography>
            <Button onClick={e => handleIncrement(item)}
              sx={{ 
                background: "#F5F5F5", 
                borderTopRightRadius: "16px",  
                borderBottomRightRadius: "16px",
                maxWidth: "32px",
              }}>              
                <PlusIcon />
            </Button>            
          </Box>
        )
      },     
      {
        key: "total",
        title: "Total",
        renderCell: (item) => <a>${item.price * item.quantity}</a>,
      },            
      {
        key: "action",
        title: "",
        renderCell: (item) => (
          <IconButton onClick={() => onRemoveItem(item)}>
            <Tooltip title={"Remove from cart"}>
              <RemoveIcon />
            </Tooltip>
          </IconButton>
        ),
      },
    ],
    [onRemoveItem]
  );

  const getKeyRow: GetKeyRow<CatalogProduct> = useCallback(
    (item) => item.id.toString(),
    []
  );

  return {
    columns,
    getKeyRow,
  };
}

export default useCaartTable;

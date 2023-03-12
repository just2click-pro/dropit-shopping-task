import React, { useCallback, useMemo } from "react"
import { IconButton } from "@mui/material"

import { useDispatch } from "react-redux"  
import { GetKeyRow, TableColumn } from "../../tools/ui_components/types"
import { RemoveIcon } from "../../tools/icons"
import { PlusMinus, Tooltip } from "../../tools/ui_components/"

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
          <>
            <PlusMinus item={item} />
          </>
        )
      },     
      {
        key: "total",
        title: "Total",
        renderCell: (item) => <a>${(item.price * item.quantity).toFixed(2)}</a>,
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

import { Tooltip } from "@mui/material"
import React, { useCallback, useMemo } from "react"

import { GetKeyRow, TableColumn } from "../../tools/ui_components/types"
import { AddToCartIcon } from "../../tools/icons"

import { CatalogProduct } from "../product/types"

interface Props {
  onRemoveItem: (item: CatalogProduct) => void
  onAddItemsCount: (item: CatalogProduct) => void
  onRemoveItemsCount: (item: CatalogProduct) => void
}

function useCaartTable({ onRemoveItem, onAddItemsCount, onRemoveItemsCount }: Props) {
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
        key: "quentity",
        title: "Quentity",
        renderCell: (item) => <a>{item.quantity}</a>,
      },      
      {
        key: "total",
        title: "Total",
        renderCell: (item) => <a>{item.price * item.quantity}</a>,
      },            
      {
        key: "action",
        title: "",
        renderCell: (item) => (
          <div style={{ cursor: "pointer" }} onClick={() => onRemoveItem(item)}>
            <Tooltip title={"Remove from cart"}>
              <AddToCartIcon />
            </Tooltip>
          </div>
        ),
      },
    ],
    [onRemoveItem, onAddItemsCount, onRemoveItemsCount]
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

import { useCallback, useEffect, useState } from "react"

import { API } from "../../contexts/api"
import useFlag from "../../tools/hooks/useFlag"

import { CatalogProduct } from "../product/types"

import useCatalogTable from "./useCatalogTable"

import { useDispatch } from "react-redux"
import { addProductToCart } from "../../store/cartItemsSlice"

const useCatalog = () => {
  const [products, setProducts] = useState<CatalogProduct[]>([])
  const [isLoading, onStartLoading, onEndLoading] = useFlag(true)
  const dispatch = useDispatch()

  const handleAddProductToCart = useCallback((product: CatalogProduct) => {
    dispatch(addProductToCart(product));
  }, [])

  const { columns, getKeyRow } = useCatalogTable({
    onAddItem: handleAddProductToCart,
  })

  useEffect(
    () => {
      API.product.getAll().then(setProducts).finally(onEndLoading);
    },
    [] // eslint-disable-line
  );

  return {
    isLoading,
    products,
    columns,
    getKeyRow,
  };
};

export default useCatalog;

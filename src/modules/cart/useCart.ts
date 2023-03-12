import { useCallback, useEffect, useState } from "react"

import { API } from "../../contexts/api"
import useFlag from "../../tools/hooks/useFlag"

import { CatalogProduct } from "../product/types"

import useCartTable from "./useCartTable"

import { useDispatch } from "react-redux"
import { removeProductFromCart } from "../../store/cartItemsSlice"

const useCart = () => {
  const [products, setProducts] = useState<CatalogProduct[]>([])
  const [isLoading, onStartLoading, onEndLoading] = useFlag(true)
  const dispatch = useDispatch()

  const handleRemoveItemFromCart = useCallback((product: CatalogProduct) => {
    dispatch(removeProductFromCart(product));
  }, [])

  const { columns, getKeyRow } = useCartTable({
    onRemoveItem: handleRemoveItemFromCart,
  });

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

export default useCart;

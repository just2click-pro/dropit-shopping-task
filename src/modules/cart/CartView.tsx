import React, { ChangeEvent, useEffect, useState, useRef } from "react";

import { LoadingSpinner, Table, Cards } from "../../tools/ui_components";

import useCart from "./useCart";
import StyledCartView from "./StyledCartView";
import { CatalogProduct } from '../product/types';

const CartView = () => {
  const { isLoading, products, columns, getKeyRow } = useCart();
  const [productsList, setProductsList] = useState<CatalogProduct[]>([])

  
  return (
    <StyledCartView>
      <div className="CartView__header">
        <div className="CartView__header_text">Cart Page</div>
      </div>

      <div className="CartView__grid_cards">
        <Cards data={productsList} getKeyRow={getKeyRow} />
      </div>

      <div className="CartView__grid">
        <Table data={productsList} columns={columns} getKeyRow={getKeyRow} />
      </div>      

      <LoadingSpinner isVisible={isLoading} />
    </StyledCartView>
  );
};

export default CartView;

import React from "react"

import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { IconButton } from '@mui/material'

import useCart from "./useCart"
import StyledCartView from "./StyledCartView"


import { BackIcon } from "../../tools/icons"
import { Cards, LoadingSpinner, Table, Tooltip, Summary } from "../../tools/ui_components"

const CartView = () => {
  const history = useHistory();

  const { isLoading, columns, getKeyRow } = useCart();
  const itemsInCart = useSelector((state: any) => state.cartItems)

  const cartColumns = columns.filter(columns => columns.key !== 'quantity')

    return (
      <StyledCartView>
        <div className="CartView__header">
          <div className="CartView__header_text">
            <IconButton onClick={() => history.push("/catalog")} >
              <Tooltip title={"Back to catalog"}>
                <BackIcon />
              </Tooltip>
            </IconButton>
            Your Cart
          </div>
        </div>

        <div className="CartView__grid_cards">
          <Cards data={itemsInCart} getKeyRow={getKeyRow} />
        </div>

        <div className="CartView__grid">
          <div className="CartView__grid_table">
            <Table data={itemsInCart} columns={cartColumns} getKeyRow={getKeyRow} />
          </div>
          <div className="CartView__grid_summary">
            <Summary itemsInCart={itemsInCart} />
          </div>

        </div>      
      <LoadingSpinner isVisible={isLoading} />
    </StyledCartView>
  );
};

export default CartView;

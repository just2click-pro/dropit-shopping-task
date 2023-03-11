import React, { useEffect, useState } from "react"

import {
    AppBar,
    Badge,
    IconButton,
    Toolbar,
} from "@mui/material"

import styled from "styled-components"
import { useHistory } from "react-router-dom"
import { useSelector } from "react-redux"
import { CartIcon } from "../../tools/icons"

import DropitLogo from "../../tools/assets/logo.svg"

const StyledTopBar = styled.div`
    box-shadow: 0 0;
    display: flex;
    justify-content: space-between;
    width: 100vw;
`

function Topbar() {
    const history = useHistory()
    const [count, setCount] = useState(0)
    const itemsInCart = useSelector((state: any) => state.cartItems)

    const handleLogoClick = () => {
        history.push("/")
    }

    const handleShoppingCartClick = () => {
        history.push("/cart")
    }

    useEffect(() => {
        let itemsCount = 0
        itemsInCart.forEach((item: { quantity: number }) => {
            itemsCount += item.quantity
        })
        
        setCount(itemsCount)
    }, [itemsInCart, itemsInCart.length])
    

    return (
        <AppBar position='static' sx={{ background: "white" }} elevation={0}>
            <Toolbar>
                <StyledTopBar>
                    <IconButton
                        size="large"
                        aria-label="Home"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleLogoClick}
                        edge="start"
                        color="inherit">                    
                        <img src={DropitLogo} alt="logo" />
                    </IconButton>
                    <IconButton
                        onClick={() => handleShoppingCartClick()}>
                        <Badge badgeContent={count} color="info">
                            <CartIcon />
                        </Badge>
                    </IconButton>
                </StyledTopBar>
            </Toolbar>
        </AppBar>
    )
}

export default Topbar


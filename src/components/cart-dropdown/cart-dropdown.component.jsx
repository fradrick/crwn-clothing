import React from 'react';
import CustomButton from "../custom-button/custom-button.component";

import './cart-dropdown.styles.scss';
import {connect} from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors";

const CartDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem =>
                    <CartItem key={cartItem.id} item={cartItem} />)
            }
        </div>
        <CustomButton>GO TO CHECK OUT</CustomButton>
    </div>
);
/*
const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
});*/

const mapStateToProps = (state) => ({
    cartItems: selectCartItemsCount(state)
});

export default connect(mapStateToProps)(CartDropdown);

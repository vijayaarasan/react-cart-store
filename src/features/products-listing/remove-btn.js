import React from 'react'

export default function RemoveButton(props) {
    return <button onClick={() => props.removeFromCart(props.cartItem)}>
        Remove 
        {/* ({
            // (thisItemInCart && thisItemInCart.quantity) || 0
            (props.cartItem && props.cartItem.quantity) || 0
        }) */}
        </button>
} 
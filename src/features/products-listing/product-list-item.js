import React from 'react';

import AddBtn from './add-btn'
import RemoveBtn from './remove-btn'

export default function ProductListItem(props) {
    // const thisItemInCart = props.cart.filter(item => item.id === props.product.id)[0]
    return <div
        className='product-list-items'>
        <h3>{props.product.name}</h3>
        <img
            height={100}
            title={props.product.name}
            src={`./products/${props.product.image}`}
        />
        <div>{props.product.description}</div>
        <div>${props.product.price}</div>
        <div>
            {/* <button
                onClick={() => props.addToCart(props.product)}
            >
                Add to cart ({
                    // (thisItemInCart && thisItemInCart.quantity) || 0
                    (props.cartItem && props.cartItem.quantity) || 0
                })
            </button> */}
            <AddBtn
                cartItem={props.cartItem}
                product={props.product}
                addToCart={props.addToCart}
            />
            {props.cartItem ? <RemoveBtn
                cartItem={props.cartItem}
                product={props.product}
                removeFromCart={props.removeFromCart}
            /> : null
            }
        </div>
    </div>
}
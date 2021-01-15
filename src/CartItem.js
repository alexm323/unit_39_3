import React from 'react';

const CartItem = ({ item, img, price, quantity }) => {

    return (<div className='CartItem'>
        <h4 className='CartItem-title'>{item}</h4>
        <img className='CartItem-img' src={img} alt='' />
        <ul>
            <li style={{ color: 'magenta', backgroundColor: 'yellow' }}>Price: ${price}</li>
            <li>Quantity: {quantity}</li>
            <li>Subtotal: ${price * quantity}</li>
        </ul>
    </div>)
}

export default CartItem;
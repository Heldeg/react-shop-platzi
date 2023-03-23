import React from 'react';
import '../styles/Order.scss'

const Order = () => {
    return (
        <div className="Orders">
            <div className="Orders-container">
                <h1 className="title">My orders</h1>
                <div className="Orders-content">
                    <OrderItem />
                </div>
            </div>
        </div>
    );
}

export default Order;
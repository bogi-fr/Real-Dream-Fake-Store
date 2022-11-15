import React from "react";
import { Link } from 'react-router-dom';
import './ElectronicProd.css'

export default function ElectronicProd (props) {

    const { image, title, price, id} = props;

    return (
        <Link to={`/electronics/${id}`}>
        <div className="electronic-products">
            <img className='electronics-image' src={image} alt={title} />
            <h4 className='electronics-title' >{title}</h4>
            <p className='electronics-price'>{price}€</p>
        </div>
    </Link>
    )
}
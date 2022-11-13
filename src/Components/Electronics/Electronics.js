import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import './Electronics.css';

export default function Electronics (props) {

    const [electronics, setElectronics] = React.useState([]);

    const fetchElectronics = () => {
        axios.get('https://fakestoreapi.com/products/category/electronics')
        .then(response => setElectronics(response.data));
    }

    React.useEffect(
        () => {
            console.log('ready');
            fetchElectronics();
        },[]
    )
    React.useEffect(
        () => {
            console.log('content updated: ', electronics)
        },[electronics]
    )

    const { image, title, price, id} = props;

    return (
        <Link to={`/electronics/${id}`}>
            <div className="Electronics">
                <img className='electronics-image' src={image} alt={title} />
                <h4 className='electronics-title' >{title}</h4>
                <p className='electronics-price'>{price}€</p>
            </div>
        </Link>
    )
}
import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Details.css";

function Details(props) {

    const [selected, setSelected] = React.useState();
    const { id } = useParams();

    React.useEffect(
        () => {
            axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => setSelected(response.data[0]))
        }, []
    );

    return (
        <div className="Details">
            <h2 className="product-title">{selected?.title}</h2>
            <img className="product-image" src={selected?.image} alt={selected?.title} />
            <p className="product-description">{selected?.description}</p>
            <h4 className="product-price">{selected?.price}</h4>
            <button className="add">Add to cart</button>
        </div>
    )
}

export default Details;
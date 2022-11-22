import React from "react";
import axios from "axios";
import './Electronics.css';
import ElectronicProd from "../ElectronicProd/ElectronicProd";

function Electronics (props) {

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

    return (
        <div className="electronics">
            {console.log('render electronic products')}
            {electronics.map(
                function(item) {
                    return <ElectronicProd
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    category={item.category}
                    id={item.id}
                    />
                }
                )
            }
        </div>
    )
}

export default Electronics;
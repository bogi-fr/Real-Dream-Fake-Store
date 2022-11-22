import React from "react";
import { useState } from 'react';
import './Homepage.css';
import Electronics from "../Electronics/Electronics";

export default function Homepage (props) {

    const [electricVisibility, setElectricVisibility] = useState(false);
    const [jewelryVisibility, setJewelryVisibility] = useState(false);
    const [menVisibility, setMenVisibility] = useState(false);
    const [womenVisibility, setWomenVisibility] = useState(false);

    const handleElectricClick = event => {
        setElectricVisibility(current => !current);
        setJewelryVisibility(false);
        setMenVisibility(false);
        setWomenVisibility(false);
    };

    const handleJewelryClick = event => {
        setJewelryVisibility(current => !current);
        setElectricVisibility(false);
        setMenVisibility(false);
        setWomenVisibility(false);
    }

    const handleMenClick = event => {
        setMenVisibility(current => !current);
        setElectricVisibility(false);
        setJewelryVisibility(false);
        setWomenVisibility(false);
    }

    const handleWomenClick = event => {
        setWomenVisibility(current => !current);
        setElectricVisibility(false);
        setJewelryVisibility(false);
        setMenVisibility(false);
    }

    return (
        <div className="Homepage">
            <div className="hp-header">

            </div>
            <div className="hp-main">
                <div className="main-container">
                    <div className="message">
                        <h2 id="welcome-1">Welcome to the</h2> <h2 id="welcome-2">Real Dream Fake Store</h2><h2 id="welcome-3">!</h2>
                        <div className="text">
                            <h4>You can find anything and everything You need,</h4>
                            <p>(or you don't need)</p>
                            <h4>just chose a category below!</h4>
                        </div>
                        <br></br>
                    </div>
                    <div className="category-buttons-container">
                        <button
                            className="category-button"
                            type="button"
                            id="electronics-button"
                            onClick={handleElectricClick}
                        >Electronics
                        </button>
                        <button
                            className="category-button"
                            type="button"
                            id="jewelry-button"
                            onClick={handleJewelryClick}
                            >Jewelry
                        </button>
                        <button
                            className="category-button"
                            type="button"
                            id="men-clothing-button"
                            onClick={handleMenClick}
                            >Men's<br></br>Clothing
                        </button>
                        <button
                            className="category-button"
                            type="button"
                            id="women-clothing-button"
                            onClick={handleWomenClick}
                            >Women's<br></br>Clothing
                        </button>
                    </div>
                    <div className="product-container">
                        <div className="electronics" style={{display: electricVisibility ? 'block' : 'none'}}>
                            <h2 className="category-title">Our Products in the Electronics Category</h2>
                            <div className="electronics-flex">
                                <Electronics />
                            </div>
                        </div>
                        <div className="jewelry product-list" style={{display: jewelryVisibility ? 'block' : 'none'}}>
                            <h2 className="category-title">Our Products in the Jewelry Category</h2>
                            <div className="jewelry-flex">
                                <p>This is a jewelry</p>
                                <p>This is a jewelry</p>
                                <p>This is a jewelry</p>
                                <p>This is a jewelry</p>
                            </div>
                        </div>
                        <div className="men product-list" style={{display: menVisibility ? 'block' : 'none'}}>
                            <h2 className="category-title">Our Products in the Men's Clothing Category</h2>
                            <div className="men-flex">
                                <p>This is a men's clothes product</p>
                                <p>This is a men's clothes product</p>
                                <p>This is a men's clothes product</p>
                                <p>This is a men's clothes product</p>
                            </div>
                        </div>
                        <div className="women product-list" style={{display: womenVisibility ? 'block' : 'none'}}>
                            <h2 className="category-title">Our Products in the Women's Clothing Category</h2>
                            <div className="women-flex">
                                <p>This is a women's clothes product</p>
                                <p>This is a women's clothes product</p>
                                <p>This is a women's clothes product</p>
                                <p>This is a women's clothes product</p>
                            </div>
                        </div>
                    </div>
                    <div className="new-products-container" >
                        <h2 id="new-title">Our Newest Products:</h2>
                        <div className="new-products-image-container">
                            <img
                                id="construction-image"
                                src={require("./construction.png")}
                                alt="This section is under construction. Check back soon.">
                            </img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hp-footer">

            </div>
        </div>
    )
}
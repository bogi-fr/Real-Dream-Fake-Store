import React from "react";
import { useState } from 'react';
import './Homepage.css';
/* import Electronics from "../Electronics/Electronics"; */

export default function Homepage (props) {

    /* const original = document.getElementsByClassName("original"); */

    /* original.addEventListener("click", changeVisibility); */

 /*    const changeVisibility = () => {
        original.classList.toggle("hidden");
    } */

    const [isElectricVisible, setIsElectricVisible] = useState(false);
    const [isJewelryVisible, setIsJewelryVisible] = useState(false);
    const [isMenVisible, setIsMenVisible] = useState(false);
    const [isWomenVisible, setIsWomenVisible] = useState(false);

    const handleElectricClick = event => {
        setIsElectricVisible(current => !current);
        setIsJewelryVisible(false);
        setIsMenVisible(false);
        setIsWomenVisible(false);
    };

    const handleJewelryClick = event => {
        setIsJewelryVisible(current => !current);
        setIsElectricVisible(false);
        setIsMenVisible(false);
        setIsWomenVisible(false);
    }

    const handleMenClick = event => {
        setIsMenVisible(current => !current);
        setIsElectricVisible(false);
        setIsJewelryVisible(false);
        setIsWomenVisible(false);
    }

    const handleWomenClick = event => {
        setIsWomenVisible(current => !current);
        setIsElectricVisible(false);
        setIsJewelryVisible(false);
        setIsMenVisible(false);
    }

    return (
        <div className="Homepage">
            <div className="hp-header">

            </div>
            <div className="hp-main">
                <div className="main-container">
                    <div className="original">
                        <h2 id="welcome-1">Welcome to the</h2> <h2 id="welcome-2">Real Dream Fake Store</h2><h2 id="welcome-3">!</h2>
                        <div className="text">
                            <h4>You can find anything and everything You need,</h4>
                            <p>(or you don't need)</p>
                            <h4>just chose a category below!</h4>
                        </div>
                        <br></br>
                    </div>
                    <div className="category-buttons">
                        <button
                            type="button"
                            id="electronics-button"
                            onClick={handleElectricClick}
                        >Electronics
                        </button>
                        <button
                            type="button"
                            id="jewelry-button"
                            onClick={handleJewelryClick}
                            >Jewelry
                        </button>
                        <button
                            type="button"
                            id="men-clothing-button"
                            onClick={handleMenClick}
                            >Men's<br></br>Clothing
                        </button>
                        <button
                            type="button"
                            id="women-clothing-button"
                            onClick={handleWomenClick}
                            >Women's<br></br>Clothing
                        </button>
                    </div>
                    <div className="product-container">
                        <div className="electronics" style={{display: isElectricVisible ? 'block' : 'none'}}>
                            <h2 className="category-title">Our Products in the Electronics Category</h2>
                            <div className="electronics-flex">
                                <p>This is an electronic product</p>
                                <p>This is an electronic product</p>
                                <p>This is an electronic product</p>
                                <p>This is an electronic product</p>
                            </div>
                        </div>
                        <div className="jewelry product-list" style={{display: isJewelryVisible ? 'block' : 'none'}}>
                            <h2 className="category-title">Our Products in the Jewelry Category</h2>
                            <div className="jewelry-flex">
                                <p>This is a jewelry</p>
                                <p>This is a jewelry</p>
                                <p>This is a jewelry</p>
                                <p>This is a jewelry</p>
                            </div>
                        </div>
                        <div className="men product-list" style={{display: isMenVisible ? 'block' : 'none'}}>
                            <h2 className="category-title">Our Products in the Men's Clothing Category</h2>
                            <div className="men-flex">
                                <p>This is a men's clothes product</p>
                                <p>This is a men's clothes product</p>
                                <p>This is a men's clothes product</p>
                                <p>This is a men's clothes product</p>
                            </div>
                        </div>
                        <div className="women product-list" style={{display: isWomenVisible ? 'block' : 'none'}}>
                            <h2 className="category-title">Our Products in the Women's Clothing Category</h2>
                            <div className="women-flex">
                                <p>This is a women's clothes product</p>
                                <p>This is a women's clothes product</p>
                                <p>This is a women's clothes product</p>
                                <p>This is a women's clothes product</p>
                            </div>
                        </div>
                    </div>
                    <div className="new-products container" >
                        <h2>Our Newest Products:</h2>
                        <img
                            src='src/Components/Homepage/construction.png'
                            alt="This section is under construction. Check back soon.">
                        </img>
                    </div>
                </div>
            </div>
            <div className="hp-footer">

            </div>
        </div>
    )
}
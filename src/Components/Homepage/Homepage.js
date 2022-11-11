import React, { useState } from "react";
import './Homepage.css'

export default function Homepage () {

    /* const [categories, setCategory] = useState("");*/

    const [isOriginalVisible, setIsOriginalVisible] = useState(true);
    const [isNewVisible, setIsNewVisible] = useState(false);

/* const container = document.getElementsByClassName("main-container");
const original = document.getElementsByClassName("original");
const newContent = document.getElementsByClassName("new");
 */

   /*  useEffect(() => {
        updateCategories(() => {
        setCategory((categories) => {
            console.log(categories)
            
        });
         }, categories);
    }, []);
 */

    const handleClick = event => {
        setIsOriginalVisible(current => !current);
        setIsNewVisible(current => !current);
    }

    return (
        <div className="Homepage">
            <div className="hp-header">

            </div>
            <div className="hp-main">
                <div className="main-container">
                    <div
                        className="original"
                        style={{visibility: isOriginalVisible ? 'visible' : 'hidden'}}>
                        <h2 id="welcome-1">Welcome to the</h2> <h2 id="welcome-2">Real Dream Fake Store</h2><h2 id="welcome-3">!</h2>
                        <div className="text">
                            <h4>You can find anything and everything You need,</h4>
                            <p>(or you don't)</p>
                            <h4>just click on the button below!</h4>
                        </div>
                        <img src="https://cdn.pixabay.com/photo/2014/01/29/05/49/up-254096__480.png" alt="red arrow"></img>
                        <br></br>
                        <button
                            type="button"
                            id="original-button"
                            onClick={handleClick}>Show All Categories
                        </button>
                    </div>
                    <div className="new"
                        style={{visibility: isNewVisible ? 'visible' : 'hidden'}}>
                        <h2 id="categories-title">Categories</h2>
                        <h3 id="title">title</h3>
                        <button
                            type="button"
                            id="new-button"
                            onClick={handleClick}>Back
                        </button>

                    </div>
                </div>
            </div>
            <div className="hp-footer">

            </div>
        </div>
    )
}
import React from "react";
import "./Featured.css";
import shoes5 from "../assets/shoes5.jpg";
import shoes6 from "../assets/shoes6.jpg";
import shoes7 from "../assets/shoes7.jpg";
import shoes from "../assets/shoes.jpg";

function Featured() {
 

  return (
    <div>
      <div className="session">
        <div className="heads">
          <h1>Featured</h1>
        </div>
        <div className="cart">
          <div className="card_1">
            <img src={shoes5} />
            <div className="head">
              <p>Nike Jordan</p>
              <p>$149.99</p>
              <p>Add to Cart </p>
            </div>
          </div>
          <div className="card_2">
            <img src={shoes6} />
            <div className="head">
              <p>Nike Free RN</p>
              <p>$149.99</p>
              <p >Add to Cart </p>
            </div>
          </div>
          <div className="card_3">
            <img src={shoes7} />
            <div className="head">
              <p>Nike Free RN</p>
              <p>$149.99</p>
              <p>Add to Cart </p>
            </div>
          </div>
        </div>
        
      </div>
      <div className="buy">

          <div className="card_4">
            <img src={shoes6} />
            <div className="head">
              <h1>Nike</h1>
              <p>New collection 2020</p>
             <a href="https://www.shoppersstop.com/category/men">Buy now</a>
            </div>
          </div>
          <div className="card_5">
            <img src={shoes5} />
            <div className="head">
              <h1>Addidas</h1>
              <p>New collection 2020</p>
              <a href=" https://www.shoppersstop.com/category/men">Buy now</a>
          </div>
      </div>
    </div>
    </div>
  );
}

export default Featured;

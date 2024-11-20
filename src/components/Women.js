import React from "react";
import girl1 from "../assets/girl1.jpg";
import girl2 from "../assets/girl2.jpg";
import girl5 from "../assets/girl5.jpg";
import girl4 from "../assets/girl4.jpg";
import girl0 from "../assets/girl0.jpg";
import "./Women.css";

function Women() {
  return (
    <>
      <div className="session">
        <div className="heads">
          <h1>Women Sneokers</h1>
        </div>

        <div className="cart">
          <div className="card_1">
            <img src={girl1} />
            <div className="head" >
              <p>Nike Free TR</p>
              <p>$129.90</p>
              <p>Add to Cart </p>
            </div>
          </div>
          <div className="card_1">
            <img src={girl2} />
            <div className="head">
              <p>Nike Flyknit</p>
              <p>$129.90</p>
              <p>Add to Cart </p>
            </div>
          </div>
          <div className="card_1">
            <img src={girl5} />
            <div className="head">
              <p>Nike gs pink</p>
              <p>$129.90</p>
              <p>Add to Cart </p>
            </div>
          </div>
          <div className="card_1">
            <img src={girl4} />
            <div className="head">
              <p>Nike Jordan</p>
              <p>$129.90</p>
              <p>Add to Cart </p>
            </div>
          </div>
        </div>
      </div>
        <div className="shop">
          <div className="lefts">
            <h1>50% Off</h1>
            <p>In Addidas Superstar sneakers</p>
            <button><a href="https://www.shoppersstop.com/category/women">Shop Now</a></button>
          </div>
          <div className="right">
            <img src={girl0}/>
          </div>
        </div>
    </>
  );
}

export default Women;

import React from "react";
import man1 from "../assets/man1.jpg";
import man2 from "../assets/man2.jpg";
import man3 from "../assets/man3.jpg";
import man4 from "../assets/man4.jpg";
import man5 from "../assets/man5.jpg";
import "./New.css";

function New() {
  return (
    <>
      <div className="collection">
        <div className="heads">
          <h1>New Collection</h1>
        </div>
        <div className="new">
          <div className="view">
            <img src={man1} />

            <div className="head_1">
              <h2>Mens Shoes</h2>
              <p>From $90</p>
              <a href="https://www.shoppersstop.com/search/result?q=shoes%20man">
                View Collection
              </a>
            </div>
          </div>
        <div className="images">
          <div className="img1">
            <img src={man2} />
          </div>
          <div className="img2">
            <img src={man3} />
          </div>
          <div className="img3">
            <img src={man4} />
          </div>
          <div className="img4">
            <img src={man5} />
          </div>
        </div>
        </div>
      </div>
     

    </>
  );
}

export default New;

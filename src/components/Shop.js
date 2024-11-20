import React from "react";
import { CgFacebook } from "react-icons/cg";
import { CiInstagram } from "react-icons/ci";
import { IoLogoTwitter } from "react-icons/io";
import { BiLogoGoogle } from "react-icons/bi";
import "./shop.css";

function Shop() {

  return (
    <div>
      <div className="session_1">
        <div className="header_1">
          <h1>
            Suscribe And Get <br /> 10% OFF{" "}
          </h1>
          <p>Get 10% discount for off products</p>
        </div>
        <div className="subscribe">
          <input type="text" placeholder="@gmail.com" />

          <button type="submit" >Suscribe</button>
        </div>
      </div>
      <div className="footer">
        <table>
          <thead>
            <tr >
              <th className="col_1">Roby</th>
              <th className="col_2">EXPLORE</th>
              <th className="col_3">SUPPORT</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td >New collection of shoes</td>
              <td>Home</td>
              <td>Product Help</td>
            </tr>
            <tr>
              <td >2024</td>
              <td>Featured</td>
              <td>Coustomer Care</td>
            </tr>
            <tr>
              <td></td>
              <td>Women</td>
              <td>Athorized service</td>
            </tr>
            <tr>
              <td></td>
              <td>New</td>
              <td></td>
            </tr>
          </tbody>
          </table>
          <div className="icon">
            <a href="https://www.facebook.com/">
              <CgFacebook />
            </a>
            <a href="https://www.instagram.com/">
              <CiInstagram />
            </a>
            <a href="https://x.com/?lang=en">
              <IoLogoTwitter />
            </a>
            <a href="https://www.google.co.in/">
              <BiLogoGoogle />
            </a>
          </div>
      </div>
    </div>
  );
}

export default Shop;

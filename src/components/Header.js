import "../App.css";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ethers, BigNumber } from "ethers";
import Results from "../Results.json";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import ReactModal from "react-modal";
import "./Header.css"


const Header = () => {
  return (
    <div className="gpt3__navbar-links_container">
    <p className="gpt3__navbar-links"><a href="/">Home</a></p>
    <p className="gpt3__navbar-links"><a href="/faq">FAQ</a></p>
    <p className="gpt3__navbar-links"><a href="/getresults">Get Results</a></p>
    <p className="gpt3__navbar-links"><a href="/givepermission">Give Permission</a></p>
    <p className="gpt3__navbar-links"><a href="/admin">Admin</a></p>
  </div>

  );
};

export default Header;

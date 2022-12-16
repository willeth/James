import "../App.css";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ethers, BigNumber } from "ethers";
import Results from "../Results.json";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import ReactModal from "react-modal";
import Header from "./Header";

const Faq = () => {
  return (
    <div>
    <ul>
      <li className="Question">How do I view my results?</li>
      <li className="Answer">Navigate to Get Results and enter your address</li>
      <li className="Question">How do I get someone elses results?</li>
      <li className="Answer">You must first ask them and they must grant permission to your address on the grant permission page</li>
      <li className="Question">How do I give permission to an employer/school to view my results?</li>
      <li className="Answer">You must get their address and enter it on the grant permission page</li>
    </ul>
   </div>
  );
};

export default Faq;
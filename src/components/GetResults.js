import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ethers, BigNumber } from "ethers";
import Results from "../Results.json";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import ReactModal from "react-modal";
import Header from "./Header";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const GetResults = () => {
  const address = "0x4778a1D579e3a69877a48FD28292d18B9765696a";

  const [show, setShow] = useState(false);

  const [userMessage, setUserMessage] = useState("");

  const closeModal = () => {
    setShow(false);
  };

  const openModal = () => {
    setShow(true);
  };

  const getResult = async (e) => {
    e.preventDefault();

    let add = document.getElementById("resultAddress").value;

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);

      const signer = provider.getSigner();
      const contract = new ethers.Contract(address, Results.abi, signer);
      const results = await contract.getResult(add);
      console.log(results);
      setUserMessage(
        `First Name: ${results[0]} \n Second Name:  ${results[1]} \n DOB: ${results[2]} \n ${results[3][0]}: ${results[3][results[3].length-9]} \n ${results[3][2]}: ${results[3][results[3].length-7]} \n ${results[3][4]}: ${results[3][results[3].length-5]} \n ${results[3][6]}: ${results[3][results[3].length-3]} \n ${results[3][8]}: ${results[3][results[3].length-1]}`
      );
      openModal();
    } catch (error) {
      setUserMessage(
        "Please ensure you have entered the address correctly, or that you have permission"
      );
      openModal();
    }
  };

  return (
    <div>
      <ReactModal style={customStyles} id="reactmodal" isOpen={show}>
        Message
        <h1 id="message"> {userMessage} </h1>
        <button onClick={closeModal}>Close</button>
      </ReactModal>
      <div>
        <form>
        <h1>Get Result</h1>
        <input id='resultAddress' type='string' placeholder="Ethereum Address"></input>
        <button id='getResult' onClick={getResult}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default GetResults;

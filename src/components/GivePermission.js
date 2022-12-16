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
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const GivePermission = () => {
  const address = "0x4778a1D579e3a69877a48FD28292d18B9765696a";

  const [show, setShow] = useState(false);

  const [userMessage, setUserMessage] = useState("");

  const closeModal = () => {
    setShow(false);
  };

  const openModal = () => {
    setShow(true);
  };

  const grantPermission = async (e) => {
    e.preventDefault();

    let add = document.getElementById("permissionAddress").value;

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(address, Results.abi, signer);
      await contract.authentication(add, true);
      setUserMessage(
        "You successfully granted permission to address: " + `${add}`
      );
      openModal();
    } catch (error) {
      setUserMessage(
        "Ensure you have entered the address correctly"
      );
      openModal();
    }
  };

  const revokePermission = async (e) => {
    e.preventDefault();

    let add = document.getElementById("permissionAddress").value;

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(address, Results.abi, signer);
      await contract.authentication(add, false);
      setUserMessage(
        "You successfully revoked permission to address: " + `${add}`
      );
      setShow(true);
    } catch (error) {
      setUserMessage(
        "Ensure you have entered the address correctly"
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
        <h1 className='el'>Grant Permission to Address</h1>
        <input className='el' id='permissionAddress' type='string' placeholder="Ethereum Address"></input>
        <button className='el' id='grantPermission' onClick={grantPermission}>Grant</button>
        <button className='el' id='revokePermission' onClick={revokePermission}>Revoke</button>
        </form>
      </div>
    </div>
  );
};

export default GivePermission;

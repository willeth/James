import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useForm } from "react-hook-form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import ReactModal from "react-modal";
import Header from "./components/Header";
import Home from "./components/Home";
import Faq from "./components/Faq";
import GetResults from "./components/GetResults";
import GivePermission from "./components/GivePermission";
import Admin from "./components/Admin";

const App = () => {
  return (
    <div className="App">
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/faq" element={<Faq/>} />
        <Route exact path="/getresults" element={<GetResults/>} />
        <Route exact path="/givepermission" element={<GivePermission/>} />
        <Route exact path="/admin" element={<Admin/>} />
      </Routes>
    </Router></div>
  );
};

export default App;

<<<<<<< HEAD
import React from 'react';
=======
<<<<<<< HEAD
import React, { Component } from "react";
import './TermsComponent.css'

class TermsComponent extends React.Component {

  state = {
    text: "",
  };

  onClickButton1 = () => {
    this.setState({
      text: "The automated reporting application maintained by BEIS that is used to prepare and review the Army General Fund financial statements and footnotes, and to prepare the Army's external required budgetary reports, including SF133, FACTS I, and FACTS II. ",
    });
  };

  onClickButton2 = () => {
    this.setState({
      text: "A formal record of the Army's financial activities for a period of time. These statements provide an overview of the Army's financial condition.",
    });
  };

  onClickButton3 = () => {
    this.setState({
      text: "The point of interconnection between two data systems. For example, an interface that enables GFEBS to communicate with and transfer data to an outside system, such as Defense Cash Accountability System (DCAS).",
    });
  };

  onClickButton4 = () => {
    this.setState({
      text: "DDRS: The capability in GFEBS of processing transactions the instant they are entered into the system. For instance, as soon as a financial document is posted, it is visible on the G/L. ",
    });
  };

  onClickButton5 = () => {
    this.setState({
      text: "A summary statement of all G/L debit and credit account balances in a double entry ledger on a given date.  This preliminary balance is used to point out errors in the Period End closing process. ",
    });
  };

  render() {
    return (
      <div className="terms-container-row">
        <div className="definition-container">
          {this.state.text}
        </div>
        <div className="terms-container-column">
        <button className="terms-button" onClick={this.onClickButton1}>DDRS</button>
        <button className="terms-button" onClick={this.onClickButton2}>Financial Statement</button>
        <button className="terms-button" onClick={this.onClickButton3}>Interface</button>
        <button className="terms-button" onClick={this.onClickButton4}>Real-time</button>
        <button className="terms-button" onClick={this.onClickButton5}>Trial Balance</button>
        </div>
       
        
      </div>
    );
  }
=======
import React, { useState } from 'react';
>>>>>>> 8ef41c2dc86728e23a22604acb0a10ca439de255
import terms from './TermsComponentData.js';
import './TermsComponent.css';
import TermButton from './TermComponentButtons.js';

function TermsComponent() {
  return (
    <div>
      <div>
        {terms.map((term, index) => (
          <TermButton key={index} term={term} />
        ))}
      </div>
    </div>
  );
>>>>>>> c0445f1d8cb1b0f9883d21cb6d8b645fd8e3a2b1
}

export default TermsComponent;

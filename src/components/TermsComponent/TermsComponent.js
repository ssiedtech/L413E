<<<<<<< HEAD

=======
import React from 'react';
>>>>>>> 2f33d1bc146ec72bf201e42cda901b6e5b928b22
import React, { Component } from "react";
import './TermsComponent.css';
import terms from './TermsComponentData';

class TermsComponent extends React.Component {

  state = {
    term: "",
    definition: ""
  };

  onClickButton1 = () => {
    this.setState({
      term:"DDRS",
      definition: "The automated reporting application maintained by BEIS that is used to prepare and review the Army General Fund financial statements and footnotes, and to prepare the Army's external required budgetary reports, including SF133, FACTS I, and FACTS II. ",
    });
  };

  onClickButton2 = () => {
    this.setState({
      term:"Financial Statement",
      definition: "A formal record of the Army's financial activities for a period of time. These statements provide an overview of the Army's financial condition.",
    });
  };

  onClickButton3 = () => {
    this.setState({
      term:"Interface",
      definition: "The point of interconnection between two data systems. For example, an interface that enables GFEBS to communicate with and transfer data to an outside system, such as Defense Cash Accountability System (DCAS).",
    });
  };

  onClickButton4 = () => {
    this.setState({
      term:"Interface",
      definition: "DDRS: The capability in GFEBS of processing transactions the instant they are entered into the system. For instance, as soon as a financial document is posted, it is visible on the G/L. ",
    });
  };

  onClickButton5 = () => {
    this.setState({
      term:"Interface",
      definition: "A summary statement of all G/L debit and credit account balances in a double entry ledger on a given date.  This preliminary balance is used to point out errors in the Period End closing process. ",
    });
  };

  render() {
    return (
      <div className="terms-container-row">
        <div className="definition-container">
          <p>{this.state.term}</p>
          <p>{this.state.definition}</p>
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
<<<<<<< HEAD

=======
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
>>>>>>> 2f33d1bc146ec72bf201e42cda901b6e5b928b22
}
export default TermsComponent;

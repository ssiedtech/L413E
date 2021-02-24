import React, { useState } from "react";
import terms from "./TermsComponentData.js";
import "./TermsComponent.css";
import TermButton from "./TermComponentButtons.js"




function TermsComponent() {

  return (
    <div>
      <div>
      {terms.map((term, index) => <TermButton  term={term} />)}
        </div>
    </div>
  );
}

export default TermsComponent;

import React, { useState } from "react";
import terms from "./TermsComponentData.js";
import "./TermsComponent.css";

function TermButton({ term, index }) {

    const [showTerm, setShowTerm] = useState(false);
  
    return (
      <div className="terms-container">
        {showTerm && <div className="definition">{term.definition}</div>}
        <button
          key={index}
          className="buttons-container-button"
          onClick={() => {
            setShowTerm(!showTerm);
          }}
        >
          {term.name}
        </button>
        
      </div>
    );
  }

  export default TermButton;
// SquareButton.jsx
import React from 'react';
import './SquareButton.css';
// import kurasan from "../../images/kurasan.jpg";

function SquareButton({ width , children , imageSrc , onClick }) {
    console.log({children})
  return (
    <button className="square-button" onClick={onClick}>
      <img src={imageSrc} width={width + "px"} alt="" />
      <span className='square-button-text'>{children}</span>
    </button>
  );
}

export default SquareButton;

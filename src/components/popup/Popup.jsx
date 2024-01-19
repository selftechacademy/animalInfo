import React from "react";
import PropTypes from "prop-types";
import "./popup.style.css";

const Popup = ({ info, closePopup }) => {
  return (
    <div className="popup-container">
      <div className="popup-text">
        <img src={info.imgUrl} alt={info.animal} />
        <p>{info.description}</p>
        <button onClick={closePopup} id="close-popup">
          X
        </button>
      </div>
    </div>
  );
};

Popup.propTypes = {
  info: PropTypes.string.isRequired,
  closePopup: PropTypes.func.isRequired,
};

export default Popup;

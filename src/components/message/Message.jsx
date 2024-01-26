import React from "react";
import PropTypes from "prop-types";
import { FcCheckmark } from "react-icons/fc";
import { FcDisclaimer } from "react-icons/fc";
import { FcVlc as InfoIcon } from "react-icons/fc";

import "./message.style.css";

const Message = ({ type, children }) => {
  const showIcon = () => {
    switch (type) {
      case "error":
        return <FcDisclaimer />;
      case "success":
        return <FcCheckmark />;
      case "info":
        return <InfoIcon />;
      default:
        break;
    }
  };
  return (
    <div className={`message-container ${type}`}>
      {showIcon()}
      <p>{children}</p>
    </div>
  );
};

Message.propTypes = {
  type: PropTypes.oneOf(["error", "success", "info"]),
};

export default Message;

import React from "react";
import "./styles.scss";

const ProviderTicket = ({ children }) => {
  return (
    <div className="provider-ticket-container">
      <label className="provider-ticket-label">{children}</label>
    </div>
  );
};

export default ProviderTicket;

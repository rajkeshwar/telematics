import React from "react";

const CustomerInfo = ({ customer = {} }) => {
  return (
    <div className="flex flex-col">
      <div className="mt-4">
        {Object.keys(customer).map(fieldKey => (
          <div key={fieldKey} className="flex flex-col mb-2">
            <label className="text-sm" htmlFor={fieldKey}>{fieldKey}</label>
            <b>{customer[fieldKey]}</b>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomerInfo;
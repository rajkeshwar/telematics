import { useEffect, useState } from "react";


const CustomerInfo = () => {
  const [customer, setCustomer] = useState({});
  const hashlink = new URLSearchParams(window.location.search).get('hashlink');

  useEffect(() => {
    fetch(`http://localhost:1337/enquiries?hashlink=${hashlink}`)
      .then(resp => resp.json())
      .then(resp => setCustomer(resp[0].form))
  }, [hashlink])

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
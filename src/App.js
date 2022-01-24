import { useEffect, useState } from 'react';
import './App.css';
import Telematics from './Telematics';
import Unauthorized from './Unauthorized';

const fields = [
  'First Name', 'Last Name', 'Email Address', 'Approximate Fleet Size',
  'Business Name', 'Business Address', 'Fleet Purpose'
];

function App() {
  const [customer, setCustomer] = useState();
  const hashlink = new URLSearchParams(window.location.search).get('hashlink');

  useEffect(() => {
    fetch(`https://nuoma-api.herokuapp.com/enquiries?hashlink=${hashlink}`)
      .then(resp => resp.json())
      .then(resp => setCustomer(resp[0].form))
  }, [hashlink])

  return (
    <div className="bg-gray-300 py-4 min-h-screen">
      <div className="container mx-auto px-4 bg-white py-4 text-gray-600">
        {customer
          ? <Telematics fields={fields} customer={customer} />
          : <Unauthorized />
        }

      </div>
    </div>
  );
}

export default App;

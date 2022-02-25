import { useEffect, useState } from 'react';
import Consent from './Consent';
import Unauthorized from './Unauthorized';

const fields = [
  'Right of access by Data Subjects',
  'Right to erasure (right to be forgotten)',
  'Right to restriction of data processing',
  'Right to object',
  'Right to access information',
];

const ConsentPage = () => {
  const [customer, setCustomer] = useState();
  const hashlink = new URLSearchParams(window.location.search).get('hashlink');

  useEffect(() => {
    fetch(`https://nuoma-api.herokuapp.com/enquiries?hashlink=${hashlink}`)
      .then(resp => resp.json())
      .then(resp => setCustomer(resp[0].form))
  }, [hashlink])

  return (
    <>
      {customer
        ? <Consent fields={fields} customer={customer} />
        : <Unauthorized />
      }
    </>
  );
}

export default ConsentPage;
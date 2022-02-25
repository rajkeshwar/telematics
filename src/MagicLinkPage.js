import React, { useState } from "react";
import { Magic } from 'magic-sdk';
import { useHistory } from "react-router-dom";

const MagicLinkPage = () => {
  const history = useHistory();
  const magic = new Magic('pk_live_2CE49584827D79B5');
  const [email, setEmail] = useState('');
  const hasCredential = new URLSearchParams(window.location.search).get('magic_credential');
  const [isLoggedIn, setIsLoggedIn] = useState(magic.user.isLoggedIn() && hasCredential);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handleLogOut = () => {
    console.log(magic.user)
    magic.user.logout().then(resp => {
      setIsLoggedIn(!resp);
      localStorage.clear();
      history.push('magiclink');
      console.log('logout resp', resp)
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit called', email);
    const redirectURI = window.location.href;
    magic.auth.loginWithMagicLink({ email, redirectURI });
  }

  return (
    <div>
      {
        isLoggedIn
          ? (
            <div className="min-h-screen">
              <div className="w-1/2" style={{ margin: '5rem auto' }}>
                <h1 className="text-3xl">Welcome to Consent secure page</h1>
                <p>Please fill up the details to complete your registration process </p>
                <button
                  onClick={handleLogOut}
                  className="mt-4 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Log Out
                </button>
              </div>
            </div>
          ) : (
            <div className="p-4 h-80" style={{ width: '30rem', margin: '5rem auto 0' }}>
              <h1 className="mb-4">Authorize using magic link</h1>

              <form onSubmit={handleSubmit}>
                <div className="flex flex-col">
                  <input type="email" name="email" placeholder="Enter your email address" value={email} onChange={handleEmailChange} />
                </div>
                <button
                  type="submit"
                  className="mt-4 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Request Access
                </button>
              </form>
            </div>
          )
      }
    </div>
  );
}

export default MagicLinkPage;
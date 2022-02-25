import CustomerInfo from "./CustomerInfo";

const Consent = ({ fields = [], customer = {} }) => {
  return (
    <div>
      <h1 className="text-3xl">Welcome to user consent page</h1>
      <p>Please fill up the details to complete your registration process </p>

      <div className="border border-gray-300 mt-6">
        <div className="flex" style={{ minHeight: 'calc(100vh - 100px)' }}>
          <div className="w-1/3 border-r border-gray-300 p-4">
            <h3>We have received your following data for registration</h3>
            <CustomerInfo customer={customer} />
          </div>
          <div className="w-2/3 pb-4">
            <h3 className="text-xl border-b border-gray-300 p-4">Company background</h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-4 p-4" >
              {fields.map((field, idx) => (
                <div className="flex flex-col" key={idx}>
                  <label htmlFor="company">{field}</label>
                  <input type="text" name={field} />
                </div>
              ))}
            </div>

            <div className="p-4">
              <div className="text-xs mb-4 mt-2">
                By checking this box, you acknowledge that you have read and agree to Consent
                <span className="text-blue-400">Terms of Use</span> and <span className="text-blue-400">Privacy Policy</span>.
              </div>
              <label className="py-2">
                <input className="mr-2" type="checkbox"></input>
                <span>I have read and agree to the Terms of Use and Privacy Policy</span>
              </label>
              <button
                type="submit"
                className="mt-4 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Onboard your fleet
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Consent;
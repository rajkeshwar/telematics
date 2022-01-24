const Unauthorized = () => {
  return (  
    <div className="bg-white h-1/2">
    <div className="flex justify-center">
      <div className="bg-red-50 border border-red-500 w-1/2 px-4 py-2">
        <h3 className="text-2xl text-red-400">Unauthorized</h3>
        <p>You are not authorized to access</p>
      </div>
    </div>
    </div>
  );
}
 
export default Unauthorized;
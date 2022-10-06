import { useState } from "react";
import hashFn from "./utils";

const App = () => {
  const [hashData, setHashData] = useState("");
  const [hashValue, setHashValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!hashData) {
      alert("Please fill the form");
      return;
    }
    const hashCalculate = hashFn(hashData);
    setHashValue(hashCalculate);
  };

  return (
    <div className="bg-gray-200 main-form">
      <div className="container bg-white shadow sm:overflow-hidden sm:rounded-md">
        <form className="space-y-6 px-4 py-4" onSubmit={handleSubmit}>
          <h1 className="font-bold text-center text-xl">MD5 Hash Calculator</h1>
          <input
            type="text"
            name="value"
            className="mt-1 block w-full rounded-md border-gray-300 border py-2 px-5"
            onChange={(e) => setHashData(e.target.value)}
          />
          <div className="text-right">
            <button className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Hash</button>
          </div>
        </form>
        {
          hashValue ? (
            <div className="bg-gray-300 px-4 py-3">
              <h1 className="text-center ">{hashValue}</h1>
            </div>
          ) : null
        }
  
      </div>
    </div>
  );
};

export default App;

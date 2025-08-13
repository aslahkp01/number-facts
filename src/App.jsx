// import { useState } from "react";



// export default function App() {
//     const increment=()=>{
//         setCount(count+1);
//         console.log("hai")
//     }
//     const [count,setCount]=useState(0);
//     return (
//         <div>
//         <h1>{count}</h1>
//         <button onClick={increment}>+</button>
//         </div>
//     )
// }
import { useRef, useState } from "react";

export default function App() {
  const numberRef = useRef();
  const [fact, setFact] = useState("");
  const [loading, setLoading] = useState(false);

  const getFact = async () => {
    const number = numberRef.current.value;
    if (!number) return;
    setLoading(true);
    const response = await fetch(`http://numbersapi.com/${number}`);
    const data = await response.text();
    setLoading(false);
    setFact(data);
  };

  return (
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 to-purple-300">
  <div class="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Number Facts 📚
        </h1>
        <div className="flex gap-2 mb-6">
          <input
            ref={numberRef}
            type="number"
            placeholder="Enter number"
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            onClick={getFact}
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-md transition-all duration-200"
          >
            Get Fact
          </button>
        </div>

        {loading && <p className="text-gray-500">Loading...</p>}
        {!loading && fact && (
          <p className="text-lg text-gray-700 bg-gray-100 p-4 rounded-lg shadow-inner">
            {fact}
          </p>
        )}
      </div>
    </div>
  );
}

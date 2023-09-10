import "./App.css";
import { useState } from "react";

function App() {
  const [val, setVal] = useState(0);
  return (
    <div className=" bg-gradient-to-r from-fuchsia-600 via-purple-500 to-blue-400 py-6">
      <div className=" flex-col">
        <div className="flex justify-end px-10 pt-12 pb-6 border-b-2">
          <p className=" text-7xl">{val}</p>
        </div>
        <div className="px-6">
          <div className="flex justify-between py-4">
            <button
              className=" text-5xl w-20 h-20 bg-white bg-opacity-20 text-black rounded-full"
              onClick={() => setVal(0)}
            >
              C
            </button>
            <button
              className=" text-5xl w-20 h-20 bg-black text-white rounded-full"
              onClick={() => setVal(val)}
            >
              √
            </button>
            <button
              className=" text-5xl w-20 h-20 bg-black text-white rounded-full"
              onClick={() => setVal(val)}
            >
              %
            </button>
            <button
              className=" text-5xl w-20 h-20 bg-black text-white rounded-full"
              onClick={() => setVal(val)}
            >
              /
            </button>
          </div>
          <div className="flex justify-between  py-4">
            <button
              className=" text-5xl w-20 h-20 bg-black text-white rounded-full"
              onClick={() => setVal(1)}
            >
              1
            </button>
            <button
              className=" text-5xl w-20 h-20 bg-black text-white rounded-full"
              onClick={() => setVal(2)}
            >
              2
            </button>
            <button
              className=" text-5xl w-20 h-20 bg-black text-white rounded-full"
              onClick={() => setVal(3)}
            >
              3
            </button>
            <button
              className=" text-5xl w-20 h-20 bg-black text-white rounded-full"
              onClick={() => setVal(val)}
            >
              x
            </button>
          </div>
          <div className="flex justify-between  py-4">
            <button
              className=" text-5xl w-20 h-20 bg-black text-white rounded-full"
              onClick={() => setVal(4)}
            >
              4
            </button>
            <button
              className=" text-5xl w-20 h-20 bg-black text-white rounded-full"
              onClick={() => setVal(5)}
            >
              5
            </button>
            <button
              className=" text-5xl w-20 h-20 bg-black text-white rounded-full"
              onClick={() => setVal(6)}
            >
              6
            </button>
            <button
              className=" text-5xl w-20 h-20 bg-black text-white rounded-full"
              onClick={() => setVal(val)}
            >
              -
            </button>
          </div>
          <div className="flex justify-between  py-4">
            <button
              className=" text-5xl w-20 h-20 bg-black text-white rounded-full"
              onClick={() => setVal(7)}
            >
              7
            </button>
            <button
              className=" text-5xl w-20 h-20 bg-black text-white rounded-full"
              onClick={() => setVal(8)}
            >
              8
            </button>
            <button
              className=" text-5xl w-20 h-20 bg-black text-white rounded-full"
              onClick={() => setVal(9)}
            >
              9
            </button>
            <button
              className=" text-5xl w-20 h-20 bg-black text-white rounded-full"
              onClick={() => setVal(val)}
            >
              +
            </button>
          </div>
          <div className="flex justify-between  py-4">
            <button
              className=" text-5xl h-20 bg-black text-white rounded-full w-[50%]"
              onClick={() => setVal(0)}
            >
              0
            </button>
            <button
              className=" text-5xl w-20 h-20 bg-black text-white rounded-full"
              onClick={() => setVal(val)}
            >
              .
            </button>
            <button
              className=" text-5xl w-20 h-20 bg-black text-white rounded-full"
              onClick={() => setVal(val)}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

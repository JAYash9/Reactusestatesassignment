import { useState } from "react";
import Inputvalidate from "./Inputvalidate";
import Counter from "./Counter";

function App() {
  return (
    <div className="bg-slate-600 text-white h-screen flex flex-col items-center justify-center space-y-6">
      <div className="bg-slate-800 p-6 rounded-xl shadow-lg w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4">Counter</h1>
        <Counter />
      </div>
      <div className="bg-slate-800 p-6 rounded-xl shadow-lg w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4">Visibility Toggle</h1>
        <Inputvalidate />
      </div>
    </div>
  );
}

export default App;

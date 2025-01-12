import { useState } from "react";

export default function Inputvalidate() {
  const [visible, setvisible] = useState(true);
  const notvisible = () => {
    setvisible(!visible);
  };

  return (
    <div className="p-4">
      <button
        onClick={notvisible}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all"
      >
        {visible ? "Hide" : "Show"}
      </button>
      {visible && (
        <p className="mt-4 text-green-500 font-semibold">
          This text is now visible.
        </p>
      )}
    </div>
  );
}

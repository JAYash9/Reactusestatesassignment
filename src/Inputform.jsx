import { useState } from "react";

export default function Inputform() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  return (
    <>
      <label>
        First Name:
        <input
          type="text"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
      </label>
      {(firstname !== "" || lastname !== "") && (
        <p>
          Your full name is: {firstname} {lastname}
        </p>
      )}
    </>
  );
}

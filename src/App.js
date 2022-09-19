import { useState, useRef, useEffect } from "react";

function Counter() {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    setFullName(firstName + " " + lastName);
  }, [firstName, lastName]);

  /* const fullName = firstName + " " + lastName */

  // No extra state, No extra rerender kur first/lastName change, Its not a SIDE EFFECT but a pure CALCULATION

  return (
    <div>
      <p>Full Name: {fullName}</p>
      <input
        type="text"
        value={firstName}
        placeholder="First Name"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        value={lastName}
        placeholder="Last Name"
        onChange={(e) => setLastName(e.target.value)}
      />
    </div>
  );
}

export default function App() {
  return (
    <>
      <Counter />
    </>
  );
}

import { useState, useRef, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleAlertClick() {
    setTimeout(() => {
      alert("You clicked on: " + count);
    }, 3000);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={handleAlertClick}>Show alert</button>
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

/* The reason this code isn’t correct is that it tries to do something with the DOM node during rendering. 
In React, rendering should be a pure calculation of JSX and should not contain side effects like modifying the DOM.

Moreover, when VideoPlayer is called for the first time, its DOM does not exist yet! 
There isn’t a DOM node yet to call play() or pause() on, because React doesn’t know what DOM to create until after you return the JSX. */

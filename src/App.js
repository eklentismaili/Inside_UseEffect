import { useState, useRef, useEffect } from "react";

function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  if (isPlaying) {
    ref.current.play(); // Calling these while rendering isn't allowed.
  } else {
    ref.current.pause(); // Also, this crashes.
  }

  return <video ref={ref} src={src} loop playsInline />;
}

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </>
  );
}

/* The reason this code isn’t correct is that it tries to do something with the DOM node during rendering. 
In React, rendering should be a pure calculation of JSX and should not contain side effects like modifying the DOM.

Moreover, when VideoPlayer is called for the first time, its DOM does not exist yet! 
There isn’t a DOM node yet to call play() or pause() on, because React doesn’t know what DOM to create until after you return the JSX. */

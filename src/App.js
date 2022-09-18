import axios from "axios";
import React from "react";

function App() {
  const [todos, setTodos] = React.useState([]);

  (function fetchData() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setTodos(response))
      .then((json) => console.log(json));
  })();

  // Running a side effect on the render process such as a network req !!!

  return <div className="App">hi</div>;
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Message from "./message";

function App() {
  const [count, setCount] = useState(0); // data

  return (
    <>
      <section id="center">
        <Message msg="Hello" />
        <Message msg="Hey" />
        <Message msg="Hola" />

        <button
          type="button"
          className="counter"
          onClick={() =>
            setCount(count => {
              return count + 1;
            })
          }
        >
          Count is {count}
        </button>
      </section>
    </>
  );
}

export default App;

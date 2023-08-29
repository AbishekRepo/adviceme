import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(true);

  async function nandhiniAdvice() {
    setLoading(true);
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((prev) => prev + 1);
    setLoading(false);
  }

  useEffect(() => {
    nandhiniAdvice();
  }, []);

  return (
    <>
    <div>
      <header>My Wife Advice</header>
      {loading ? <h1 className="skeleton"></h1> : <h1>{advice}</h1>}
    </div>
    <div className="button-wrapper">
      <button onClick={nandhiniAdvice}>Nandhini Advice me</button>
      <p>this is my {count} advice</p>
    </div>
    </>
  );
}

export default App;

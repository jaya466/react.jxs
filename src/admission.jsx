import { useState } from "react";
function Admission() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);

  return (
    <main>
      <h1>Admission</h1>
      <h2>No. of Admissions: {count}</h2>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </main>
  );
}

export default Admission;

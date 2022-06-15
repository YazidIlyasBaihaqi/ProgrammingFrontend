// Import useState dari React (desctructing).
import { useEffect, useState } from "react";

function Counter() {
  /**
   * useState mengembalikan sepasang value (array) : [0, function()]
   */
  const [angka, setAngka] = useState(0);

  function addAngka() {
    setAngka(angka + 1);
  }

  function updateDOM() {
    console.log("Lifecycle: component dismount")
    document.title = `Result: ${angka}`;
  }

  useEffect(updateDOM, [angka]);

  console.log("Lifecycle: Component dirender")

  return (
    <div>
      <p>Hasil : {angka}</p>
      <button onClick={addAngka}>add</button>
    </div>
  )
}

export default Counter;
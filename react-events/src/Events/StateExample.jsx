import { useState } from "react";

const CounterExample = () => {
  const [count, setCount] = useState(0);

  const [nume, setName] = useState("");

  const increaseCount = () => {
    setCount((prev) => {
      if (prev < 10) {
        return prev + 1;
      }
      return prev;
    });
  };

  const decreaseCount = () => {
    //Actualixzam "count" folosind setCount
    // setCount(count - 1)

    setCount((prev) => {
      if (prev > 0) {
        return prev - 1;
      }
      return prev;
    });
  };

  const changeName = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <p>Contor : {count}</p>
      <button onClick={increaseCount}>Creste</button>
      <button onClick={decreaseCount}>Scade</button>
      <p>Nume: {nume}</p>

      <input type="text" value={nume} onChange={changeName} />
    </div>
  );
};

export default CounterExample;

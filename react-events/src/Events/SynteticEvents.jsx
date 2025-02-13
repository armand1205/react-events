export default function SynteticEvents() {
  const handleClick = (event) => {
    console.log(event.target.textContent);
  };

  return (
    <div>
      <p onClick={handleClick}>Text adaugat</p>
      <button onClick={handleClick}>Apasa-ma</button>
    </div>
  );
}

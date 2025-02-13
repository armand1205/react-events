export default function Events() {
  const handleChange = (event) => {
    console.log("Valoare noua: ", event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Formularul a fost trimis!");
  };

  const handleMouseEnter = () => {
    console.log("Mouse-ul a intrat pe element!");
  };
  return (
    <div>
      <p>Input onChange</p>
      <input type="text" onChange={handleChange} />
      <br />
      <br />
      <form action="#" onSubmit={handleSubmit}>
        <input type="text" placeholder="username" onChange={handleChange} />
        <input type="password" placeholder="password" onChange={handleChange} />
        <button type="submit">Trimite</button>
      </form>
      <br />
      <br />
      <div onMouseEnter={handleMouseEnter}>Pune mouse-ul aici</div>
    </div>
  );
}

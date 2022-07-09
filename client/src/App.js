import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <form>
          <label>Name</label>
          <input type="text" id="name" />
          <label>Email</label>
          <input type="text" id="email" />
        </form>
        <button onClick={GetUsers}>Show Users</button>
      </header>
    </div>
  );
}

// const textBox = document.getElementById("textBox");
// const userName = document.getElementById("name");
// const email = document.getElementById("email");

function GetUsers() {
  fetch("/app/get-users")
    .then((response) => response.json())
    .then((data) => console.log(data));
}

export default App;

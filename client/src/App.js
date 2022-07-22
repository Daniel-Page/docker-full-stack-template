import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Full Stack Web App Example</h1>
      <form>
        <label>
          <b>Username</b>
        </label>
        <input
          type="text"
          placeholder="Enter Username"
          name="uname"
          required
        ></input>
        <label>
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        ></input>
        <button onClick={GetUsers}>Login</button>
      </form>
    </div>
  );
}

// const username = document.getElementsByName("uname");
// const userName = document.getElementById("name");
// const email = document.getElementById("email");

function GetUsers() {
  fetch("/api/get-accounts")
    .then((response) => response.json())
    .then((data) => console.log(data));
}

export default App;

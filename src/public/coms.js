const textBox = document.getElementById("textBox");
const userName = document.getElementById("name");
const email = document.getElementById("email");

const getUsers = async () => {
  const response = await fetch("/get-users");
  const myJson = await response.json();
  for (let i=0;i<myJson.Users.length;i++) {
    textBox.innerText += myJson.Users[i].name;
    textBox.innerText += " ";
    textBox.innerText += myJson.Users[i].email;
    if (i!=myJson.Users.length-1) {
      textBox.innerText += "\n";
    }
  }
};

const addUser = async () => {
  const response = await fetch("/add-user", {
    method: "POST",
    body: JSON.stringify({ name: userName.value, email: email.value }), // string or object
    headers: {
      "Content-Type": "application/json",
    },
  });
  const myJson = await response.json(); //extract JSON from the http response
  console.log(myJson);
};

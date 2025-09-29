const button = document.getElementById("submit");
button.addEventListener("click", check);

function check(event) {
  const userName = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  let arr = JSON.parse(localStorage.getItem("usersArray")) || [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].username === userName && arr[i].password === password) {
      alert("Logged in successfully");
      window.location.href = "./pages/games.html";
      return;
    }
  }
  alert("Incorrect");
  event.preventDefault();
}

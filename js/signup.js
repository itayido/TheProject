const button = document.getElementById("submit");
button.addEventListener("click", addToStorage);

function addToStorage() {
  const userName = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  let usersArray = JSON.parse(localStorage.getItem("usersArray")) || [];
  if (password !== confirmPassword) {
    alert("the passwords aren't the same");
  }
  for (let i = 0; i < usersArray.length; i++) {
    if (usersArray[i].username === userName) {
      alert("This username is already taken");
    }
  }
  const user = {
    username: userName,
    password: password,
  };
  usersArray.push(user);
  localStorage.setItem("usersArray", JSON.stringify(usersArray));
  sessionStorage.setItem("nameShow", " " + user.username);
  alert("User registered successfully!");
  window.location.href = "../pages/games.html";
}

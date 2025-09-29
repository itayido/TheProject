function addToStorage(event) {
  const userName = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  let usersArray = JSON.parse(localStorage.getItem("usersArray")) || [];
  if (password !== confirmPassword) {
    alert("the passwords aren't the same");
    event.preventDefault();
  }
  for (let i = 0; i < usersArray.length; i++) {
    if (usersArray[i].username === userName) {
      alert("This username is already taken");
      event.preventDefault();
    }
  }
  const user = {
    username: userName,
    password: password,
  };
  usersArray.push(user);
  localStorage.setItem("usersArray", JSON.stringify(usersArray));
  alert("User registered successfully!");
}

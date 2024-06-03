document.getElementById("btn-signup").addEventListener("click", function () {
  const username = document.getElementById("signup-username").value;
  const password = document.getElementById("signup-password").value;
  let isValid = true;

  // Periksa apakah username sudah ada di local storage
  const existingUsername = localStorage.getItem("username");

  // Cek apakah username diisi atau sudah ada
  if (!username) {
    document.getElementById("not-fill-username").innerText =
      "Please fill in the username";
    document.getElementById("not-fill-username").classList.remove("invisible");
    isValid = false;
  } else if (username === existingUsername) {
    document.getElementById("not-fill-username").innerText =
      "The username you entered is already in use";
    document.getElementById("not-fill-username").classList.remove("invisible");
    isValid = false;
  } else {
    document.getElementById("not-fill-username").classList.add("invisible");
  }

  // Cek apakah password diisi
  if (!password) {
    document.getElementById("not-fill-password").innerText =
      "Please fill in the password";
    document.getElementById("not-fill-password").classList.remove("invisible");
    isValid = false;
  } else {
    document.getElementById("not-fill-password").classList.add("invisible");
  }

  // Jika valid, simpan data ke local storage dan arahkan ke index.html
  if (isValid) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    localStorage.setItem("isLoggedIn", true);
    window.location.href = "index.html";
  }
});

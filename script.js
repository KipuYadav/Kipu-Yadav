function showPasswordForm() {
  document.getElementById("password-section").style.display = "block";
}

function checkPassword() {
  const entered = document.getElementById("password").value;
  const correctPassword = "FITWITHKIPU";

  if (entered === correctPassword) {
    window.location.href = "pdf/kipu-guide.pdf";
  } else {
    document.getElementById("error").innerText = "Incorrect password. Please try again.";
  }
}

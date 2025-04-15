function girisYap() {
    const password = document.getElementById("password").value;
    if (password === "1234") {
      window.location.href = "index.html";
    } else {
      alert("Şifre yanlış!");
    }
  }
  
document.getElementById("giris-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const kullanici = document.getElementById("kullanici").value;
    const sifre = document.getElementById("sifre").value;

    if (kullanici === "admin" && sifre === "1234") {
        // Giriş başarılıysa panel.html sayfasına yönlendir
        sessionStorage.setItem("girisYapildi", "true");
        window.location.href = "panel.html";
    } else {
        document.getElementById("hata-mesaji").innerText = "Hatalı kullanıcı adı veya şifre!";
    }
});

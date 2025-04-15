// Giriş kontrolü
if (sessionStorage.getItem("girisYapildi") !== "true") {
    window.location.href = "index.html";
}

// Ürünleri JSON'dan çek
fetch("http://localhost:3000/urunler")  // JSON Server'dan veri almak için backend adresi
    .then(res => res.json())
    .then(veri => {
        const alan = document.getElementById("liste-alani");
        for (const id in veri) {
            const urun = veri[id];
            const kart = document.createElement("div");
            kart.innerHTML = `
                <h3>${urun.ad} (${id})</h3>
                <p>${urun.aciklama}</p>
                <button onclick="urunDüzenle('${id}')">Düzenle</button>
                <button onclick="urunSil('${id}')">Sil</button>
                <hr>
            `;
            alan.appendChild(kart);
        }
    });

// Formdan veri al
document.getElementById("ekle-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const id = document.getElementById("urun-id").value.trim();
    const ad = document.getElementById("urun-ad").value.trim();
    const foto = document.getElementById("urun-foto").value.trim();
    const video = document.getElementById("urun-video").value.trim();
    const aciklama = document.getElementById("urun-aciklama").value.trim();
    const marka = document.getElementById("urun-marka").value.trim();
    const ozellikler = document.getElementById("urun-ozellikler").value.split(",").map(o => o.trim());

    const yeniUrun = { ad, foto, video, aciklama, marka, ozellikler };

    // Yeni ürünü backend'e ekleme
    fetch("http://localhost:3000/urunler", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(yeniUrun)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Yeni ürün başarıyla eklendi:", data);
        document.getElementById("ekleme-sonucu").innerText = "Ürün başarıyla eklendi!";
    })
    .catch(error => {
        console.error("Hata oluştu:", error);
        document.getElementById("ekleme-sonucu").innerText = "Ürün eklenirken hata oluştu!";
    });
});

// Ürün düzenleme fonksiyonu
function urunDüzenle(id) {
    console.log("Düzenlenecek ürün ID'si:", id);
    // API üzerinden PUT isteği ile düzenleme yapılabilir
}

// Ürün silme fonksiyonu
function urunSil(id) {
    fetch(`http://localhost:3000/urunler/${id}`, {
        method: "DELETE"
    })
    .then(response => response.json())
    .then(() => {
        console.log("Ürün başarıyla silindi.");
        alert("Ürün başarıyla silindi.");
    })
    .catch(error => console.error("Silme hatası:", error));
}


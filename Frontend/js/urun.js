// URL'den ürün ID’sini al
const params = new URLSearchParams(window.location.search);
const urunId = params.get("id");

// JSON dosyasını oku
fetch("js/urunler.json")
    .then(response => response.json())
    .then(data => {
        const urun = data[urunId];
        if (!urun) {
            document.getElementById("urun-adi").innerText = "Ürün bulunamadı.";
            return;
        }

        // Verileri sayfaya yerleştir
        document.getElementById("urun-adi").innerText = urun.ad;
        document.getElementById("urun-gorsel").src = urun.foto;
        document.getElementById("urun-aciklama").innerText = urun.aciklama;
        document.getElementById("video-frame").src = `https://www.youtube.com/embed/${urun.video}`;
        document.getElementById("marka-logo").src = urun.marka;

        // Özellikleri listele
        const ozellikListesi = document.getElementById("ozellik-listesi");
        urun.ozellikler.forEach(ozellik => {
            const li = document.createElement("li");
            li.textContent = ozellik;
            ozellikListesi.appendChild(li);
        });
    })
    .catch(error => {
        console.error("JSON verisi yüklenemedi", error);
    });

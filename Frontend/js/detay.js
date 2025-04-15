// URL'den ürün ID'sini al
const urlParams = new URLSearchParams(window.location.search);
const urunId = urlParams.get("id");

if (!urunId) {
    document.getElementById("urun-detay").innerHTML = "<p>Ürün bulunamadı.</p>";
} else {
    fetch(`http://localhost:3000/urunler/${urunId}`)
        .then(res => res.json())
        .then(urun => {
            document.getElementById("urun-ad").textContent = urun.ad;
            document.getElementById("urun-foto").src = urun.foto;
            document.getElementById("urun-aciklama").textContent = urun.aciklama;
            document.getElementById("urun-marka").textContent = urun.marka;

            const ozelliklerUl = document.getElementById("urun-ozellikler");
            urun.ozellikler.forEach(ozellik => {
                const li = document.createElement("li");
                li.textContent = ozellik;
                ozelliklerUl.appendChild(li);
            });

            document.getElementById("urun-video").src = urun.video;
        })
        .catch(error => {
            console.error("Ürün alınırken hata oluştu:", error);
            document.getElementById("urun-detay").innerHTML = "<p>Ürün bilgisi yüklenemedi.</p>";
        });
}


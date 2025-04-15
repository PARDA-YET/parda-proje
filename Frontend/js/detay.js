const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("Backend/urunler.json")
  .then(response => response.json())
  .then(data => {
    const urun = data.find(u => u.id == id);
    if (urun) {
      document.getElementById("detay").innerHTML = `
        <h3>${urun.ad}</h3>
        <p>${urun.aciklama}</p>
        <p>Fiyat: ${urun.fiyat} TL</p>
      `;
    } else {
      document.getElementById("detay").innerHTML = "Ürün bulunamadı.";
    }
  });

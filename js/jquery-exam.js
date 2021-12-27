//vki hesaplama
$(function () {
  $("#vki_hesapla").on("click", function () {
    let kilo = Number($("#kilo").val());
    let boy = Number($("#boy").val()) / 100;
    let vki = Math.round(kilo / Math.pow(boy, 2));

    if (vki < 18) {
      $("#sonuc").html("ortalamanız " + vki + " Çok zayıfsınız");
    } else if (18 <= vki && vki < 21) {
      $("#sonuc").html("ortalamanız " + vki + " orta kilo");
    } else if (21 <= vki && vki < 24) {
      $("#sonuc").html("ortalamanız " + vki + "  kilolu");
    } else if (vki >= 24) {
      document.getElementById("sonuc").innerHTML =
        "ortalamanız " + vki + "  çok kilonuz bulunuyor";
    }

    $("#ortalama").html(vki);
    console.log(vki);

  });
});

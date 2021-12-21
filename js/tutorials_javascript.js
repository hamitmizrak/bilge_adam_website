// Ctrl+k+c =yorumlama kapatır
// Ctrl+k+u =yorumu açar

//js comment
/* multiple comment*/
// window.alert("Ekranda göster");
// alert("kısaltılmış hali");
// console.log("console log");
// console.info("console info");
// console.error("console error");

// document.write("document write yazdım")

//*************************************************************************
//type

// var sayi="kelime",sayi2;
// sayi=true;
// //sayi=34.56;
// //sayi=44;

// alert(typeof sayi)
//instanceof
// alert(sayi);

//***********************************************************************
// var sayi2 = "44",
//   result;
// result = sayi2  / "22";
// alert(result);

//*************************************************************************
//global değişkenler için kullaalım
// var deneme1 = "485";
// deneme1 = true;

// //local dğişkenker
// let deneme2 = "5555";
// deneme2 = true;

// //değişken değerinideğiştiremezsiniz
// const deneme3 = "5555";
// deneme3 = "99656";

//*************************************************************************
// var $44_deneme=55;
// alert($44_deneme)

//*************************************************************************
// var sayi = 55;

//js dizi
// var dizi = ["asd", true, 55];
// console.log(dizi);
// alert(dizi[0]);

//js object
// var object = {
//   adi: "Hamit",
//   soyadi: "Mızrak",
//   teknoloji: ["Java", "JSP"],
// };
// console.log(object);
// console.log(object.adi)

//#region
//#endregion

//NaN
// var sayi = 44 / "asd";
// console.log(sayi);

// //undefined
// var sayi2;
// console.log(sayi2);

//*************************************************************************
//JS:
// var sayi1 = "12";
// var sayi2 = 12;
// console.log(sayi1>=sayi2)

// sayi1++;
// sayi2--;

// =
// ==
// ===
// if (sayi1 === sayi2) {
//   console.log("eşit");
// } else {
//   console.log("eşit değil");
// }

// if (sayi1 == sayi2) {
//   console.log("eşit");
// } else {
//   console.log("eşit değil");
// }

//*************************************************************************
//Scanner
//JOptionaPane.show...
//dikkkkkaaaatttttt: prompt gelen veri her zaman String'tir.
// var sayi = prompt("Lütfen sayı giriniz");
// console.log(sayi);

//Math
// console.log(Math.abs(-4));
// console.log(Math.sqrt(25));
// console.log(Math.pow(2, 5));
// console.log(Math.min(-4, 5, 6552, 62, -96));
// console.log(Math.max(-4, 5, 6552, 62, -96));
// console.log(Math.floor(3.4));
// console.log(Math.ceil(3.4));
// console.log(Math.round(3.5));
// console.log(Math.random() * 4 + 1);

//kullanıcıdan aldığımı bir sayının karesini alan  uygulaması?

//prompt
//Number()
//Math.pow()
// var sayi = Number(prompt("Lütfen sayı giriniz"));
// console.log(Math.pow(sayi, 2));
// console.log(sayi**=2));

//escape ccharacter :
// alert("\"")
// console.log(4/"sa") ==> NaN
// var sayi;
// console.log(sayi)==> undefined
// console.log(4/0); //infinity

// try{
// let sayi=5/3;
// }catch (e){
//     alert( e.message());
// } finally{
//     alert("Burası kesin kapatılacak");
// }

//sayı
// var sayi = 44e-5;
// alert(Number("55"));
// sayi = 44e6;
// console.log(sayi);

// //sayı sistemleri
// var sayi2 = 0xff;
// sayi2 = 0b11;
// console.log(sayi2);

//metinsel
// var kelime = " JavaScript jsp jsf J";
// console.log("length: " + kelime.length);
// console.log("küçük harf: " + kelime.toLowerCase());
// console.log("büyük harf: " + kelime.toUpperCase());
// console.log("indexOf : " + kelime.indexOf("J"));
// console.log("lastIndexOf : " + kelime.lastIndexOf("J"));
// console.log("search: " + kelime.search("J"));

// // console.log(kelime.trim().length);
// // console.log(kelime.substring(4));
// // console.log(kelime.substring(0, 4));
// // console.log(kelime.charat(1));
// console.log(kelime.replace(kelime, "yenisi"));
// console.log("**********************************");
// console.log(kelime);
// kelime = kelime.replace(kelime, "yenisi");
// console.log(kelime);

// //****************************************************************************
// //  function

//"use strict"

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
// instanceof
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
// var _44_deneme=55;
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
// //  function: sürekli kodlar , kodlarda iyi yazılması ,

//parametresiz function
// function deneme() {
//   alert("Merhabalar Function");
// }
// deneme();
//////////////////////////////
//parametreli function
// function deneme2(sayi) {
//   alert("Function2: " + Math.pow(sayi, 2));
// }
// deneme2( Number(4.16));

//////////////////////////////
//değişkende kullanabileceğim bir function lazımsa
//Javadaki ==> void olmayan
// function deneme3(sayi) {
//   return Math.pow(sayi, 2);
// }
// var _temp = deneme3(Number(4.16));
// alert(_temp);

/// kullanıcıdan girilen bir sayının negatif olup olmadığını hesaplayan algoritma ?
// if else
//function
// var userPoint = Number(prompt("Lütfen bir sayı giriniz"));
// //1.yol
// if (userPoint < 0) {
//   console.log("Negatif");
// } else {
//   console.log("Pozitif");
// }

////2.YOL
// () ? true:false;
// var deneme4 = (userPoint < 0) ? "Negatif" : "Pozitif ";
// console.log(deneme4);

// function deneme5(number1) {
//   if (number1 < 0) {
//     console.log("Negatif");
//   } else {
//     console.log("Pozitif");
//   }
// }
// deneme5(userPoint);

/////////////////////////////////////////
//anonymous:anonim bilinmeyen : atasözlerimiz
// function name4(params) {
//   alert("deneme");
// }

//name4();

//1-normal değişkene verdiğim fonkisyon
// var deneme5 = function adi() {
//   alert("deneme");
// };
// deneme5();

//2-)anonymous function
// var deneme6 = function () {
//   alert("deneme6");
// };
// deneme6();

//3-)()=>{}
// var deneme7 = () => {
//   alert("deneme7");
// };
//deneme7();

//4-)()=>{},
// var deneme7 = (sayi) => {
//   alert(sayi * sayi);
// };
// deneme7(4);

///////////////////////////////////////////////////////////////////////////////////////////////////////
//6 sayısını hariç  0-1000 dahil olmak üzere çift syıları ekranda yazdırınız ancak 16 varsa program dursun
// for (var i = 0; i <= 1000; i++) {
//   if (i == 16) {
//     break;
//   }

//   if (i === 6) {
//     continue;
//   }

//   if (i % 2 == 0) {
//     console.log(i + " ");
//   }
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////
// var dizi = ["Elazığ", "Malatya", "Nevşehir", "İstanbul", "Ankara", 22,true];
//for in : indis
// for (var temp in dizi) {
//   console.log(temp);
// }

// for (var temp in dizi) {
//   console.log(dizi[temp]);
// }

//for of
// for (var temp of dizi) {
//   console.log(temp);
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////
//global nesne
// var adi = "Hamit";

// function adiSoyadi() {
//   let soyadi = "Mızrak";
//   alert("adi: " + this.adi + " soyadım: " + soyadi);
// }
// //adiSoyadi();

// function adiSoyadi2() {
//   alert("adi: " + adi + " soyadım: " +soyadi);
// }
// adiSoyadi2();
///////////////////////////////////////////////////////////////////////////////////////////////////////
//var: sadece globalde kullşanalı
//let: fonkisyon,for

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }
// console.log("*************************");

// var i2 = 0;
// while (i2 <= 10) {
//   console.log(i2);
//   i2++;
// }

// console.log("*************************");
// var i3 = 0;
// do {
//   console.log(i3);
//   i3++;
// } while (i3 <= 10);

///////////////////////////////////////////////////////////////////////////////////////////////////////
// "use strict";
//public ,private,protected,implements,interface,enum v.s
// a = 5;
//alert(a);

///////////////////////////////////////////////////////////////////////////////////////////////////////
// var tarih = new Date();
//var tarih = new Date("2020 1 1");
//günlerde: 1-31
//aylar:0-11
//saat:0-23
//saniye:0-59

// console.log(tarih);
// console.log(tarih.toUTCString());
// console.log(tarih.getDate());
// console.log(tarih.getMinutes());
// console.log(tarih.getTime());
// console.log("sadasd: " + new Date(tarih.getTime()));

// console.log(tarih.setDate(2));
// console.log(tarih.getDate());
///////////////////////////////////////////////////////////////////////////////////////////////////////
// var object1=new Object();
// var object2={}

// var dizi1=new Array();
// var dizi2=[]

///////////////////////////////////////////////////////////////////////////////////////////////////////

// var x,y,z;
// x=5;
// debugger;
// y=45;
// z=63;
// var m=x+y+z;
// console.log(m);

///////////////////////////////////////////////////////////////////////////////////////////////////////
// var x, y, z;
// x = 5;
// y = 45;
// z = 63;
// var m = x + y + z;
// console.log(m);
// console.log(m);
///////////////////////////////////////////////////////////////////////////////////////////////////////
//dizi
// var dizi = ["çstanbul", "üAnkara", "1Muş", "2Van"];
// dizi.sort();
// console.log(dizi);
// console.log(dizi);
// console.log(dizi[0].concat(" sona44"));

// for (let index = 0; index < dizi.length; index++) {
//   console.log(dizi[index]);
// }

// //eklemek
// //push:sona bir eleman ekle
// dizi.push(" sona ekledim");
// console.log(dizi);

// //unshift:baştan bir eleman ekle
// dizi.unshift(" başa ekledim");
// console.log(dizi);

// //çıkarmak
// //son elemanda bir tanesi çıkar
// //LIFO
// var deneme = dizi.pop();
// console.log(dizi);

// //baştaki elemandan bir tane çıkar
// dizi.shift();
// console.log(dizi);

// delete dizi[0];
// console.log(dizi);

// dizi.sort();
// console.log("baştan sona" + dizi);

// dizi.reverse();
// console.log("sondan başa" + dizi);

// var dizi2=dizi.reverse();
// var join4=dizi2.join("*");

//diziyi String'e çevirmek
// var dizi2 = ["Sercan", "Melih", "Mustafa", "Çağrı"];
// console.log(dizi2[0].toString().concat("9"));
//  console.log(dizi2);
//  console.log(dizi2.join("+"));
////////////////////////////////////////////////////////////////////////////////////////////////////

//DOM: Document OBject Model
// document.getElementById("dom_id").style.color = "blue";
// document.querySelector("#dom_id").style.fontSize ="400px";

// document.getElementsByClassName("dom_class")[0].style.fontSize = "255px";
// document.querySelector(".dom_class").style.fontSize ="400px";

// document.getElementsByName("dom_name")[0].style.backgroundColor = "red";
// document.getElementsByTagName("p")[0].style.color = "yellow";

//selector
document.querySelector("#dom > .deneme2").style.color = "red";

///////////////////////////////////////////////////////////////////////////////////////////////////
//event
function tarihGoster() {
  //alert(new Date());
  document.getElementById("tarih").innerHTML =
    "<b> <i>" + new Date() + "</i></b>";
  document.getElementById("tarih2").innerText =
    "<b> <i>" + new Date() + "</i></b>";
}

///////////////////////////////////////////////////////////////////////////////////////////////////
//listener
var count = 0;
document.getElementById("button_id2").addEventListener("onmouseup", () => {
  count++;
  alert(count + " Tıklandı");
});

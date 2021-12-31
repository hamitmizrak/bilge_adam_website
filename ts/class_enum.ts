class Student {
  //nesne değişkneleri
  public studentName: string;
  public studentSurname: string;
  public studentColor: string;

  //parametreli constructor
  constructor(
    studentName: string,
    studentSurname: string,
    studentColor: string
  ) {
    this.studentName = studentName;
    this.studentSurname = studentSurname;
    this.studentColor = studentColor;
  }

  //metot
  fullName() {
    alert(
      this.studentName + " " + this.studentSurname + " " + this.studentColor
    );
  }
}


//abstract class Student {}
class Ogrenci extends Student {
  ogrenciMethod() {
    alert(
      this.studentName + " " + this.studentSurname + " " + this.studentColor
    );
  }
}

enum color {
  mavi = "mavi",
  yesil = "yesil",
  turuncu = "turuncu",
}

//instance
let studentInstance = new Student("Ali", "Ergül", color.yesil);
studentInstance.fullName();

//instance: extends
let ogrenci = new Ogrenci("Ali2", "Ergül2", color.yesil);
ogrenci.ogrenciMethod();

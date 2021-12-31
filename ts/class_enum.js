var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    //parametreli constructor
    function Student(studentName, studentSurname, studentColor) {
        this.studentName = studentName;
        this.studentSurname = studentSurname;
        this.studentColor = studentColor;
    }
    //metot
    Student.prototype.fullName = function () {
        alert(this.studentName + " " + this.studentSurname + " " + this.studentColor);
    };
    return Student;
}());
var Ogrenci = /** @class */ (function (_super) {
    __extends(Ogrenci, _super);
    function Ogrenci() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ogrenci.prototype.ogrenciMethod = function () {
        alert(this.studentName + " " + this.studentSurname + " " + this.studentColor);
    };
    return Ogrenci;
}(Student));
var color;
(function (color) {
    color["mavi"] = "mavi";
    color["yesil"] = "yesil";
    color["turuncu"] = "turuncu";
})(color || (color = {}));
//instance
var studentInstance = new Student("Ali", "Ergül", color.yesil);
studentInstance.fullName();
//instance: extends
var ogrenci = new Ogrenci("Ali2", "Ergül2", color.yesil);
ogrenci.ogrenciMethod();

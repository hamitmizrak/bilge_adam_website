// oop ts
var computer = /** @class */ (function () {
    //parametreli constructor yazıyoruz
    function computer(computerId, computerName, computerTrade, computerPrice) {
        this.computerId = computerId;
        this.computerName = computerName;
        this.computerTrade = computerTrade;
        this.computerPrice = computerPrice;
    }
    //metot yaz
    computer.prototype.computerMetot = function () {
        alert("".concat(this.computerName) +
            this.computerId +
            this.computerName +
            this.computerTrade +
            this.computerPrice);
    };
    return computer;
}());
var sonuc = new computer(1, "msi-gl", "msi", 1000);
sonuc.computerMetot();

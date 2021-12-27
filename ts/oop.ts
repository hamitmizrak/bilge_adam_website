// oop ts
class computer {
  //access modifier
  //public
  //private
  //protected

  //nesne değişkenleri
  public computerId: number;
  public computerName: string;
  public computerTrade: string;
  public computerPrice: number;

  //parametreli constructor yazıyoruz
  constructor(
    computerId: number,
    computerName: string,
    computerTrade: string,
    computerPrice: number
  ) {
    this.computerId = computerId;
    this.computerName = computerName;
    this.computerTrade = computerTrade;
    this.computerPrice = computerPrice;
  }

  //metot yaz
  computerMetot() {
    alert(
        `${this.computerName}`+
      this.computerId +
        this.computerName +
        this.computerTrade +
        this.computerPrice
    );
  }
}


let sonuc=new computer(1,"msi-gl","msi",1000);
sonuc.computerMetot();
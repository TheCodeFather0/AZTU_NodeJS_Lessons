class BankKarti {
  constructor(cardNumber, pin, balance, currency, date, cvv) {
    this.cardNumber = cardNumber;
    this.pin = pin;
    this.balance = balance;
    this.currency = currency;
    this.date = date;
    this.cvv = cvv;
  }
}
const ramininKarti = new BankKarti(
  "1234123412341234",
  "1234",
  120,
  "AZN",
  "02/26",
  450
);

console.log(ramininKarti);

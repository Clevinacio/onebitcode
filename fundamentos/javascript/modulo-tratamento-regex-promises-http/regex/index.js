function PhoneNumber(number) {
  const fixedString = String(number).replace(/[\sa-zA-Z]/g, "");
  this.countryCode = fixedString.match(/(?<=\+)\d{1,3}/)[0];
  this.ddd = fixedString.match(/(?<=\()\d+(?=\))/)[0];
  this.number = fixedString.match(/(?<=\)).+/)[0].replace(/-/g, "");
}

console.log(new PhoneNumber("+1 (23) 422-567-8900"));
console.log(new PhoneNumber("+44 (20) 7946 asdasdasd -0958"));

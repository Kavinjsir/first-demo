export class Car {
  /**
   *
   * @param {
   *   brand
   *   year
   *   price
   * } obj
   */

  constructor(obj) {
    this.brand = obj.brand;
    this.year = obj.year;
    this.price = obj.price;
  }

  introduce() {
    console.log("My car is");
    console.log(this.brand);
    console.log(this.year);
    console.log(this.price);
  }
}

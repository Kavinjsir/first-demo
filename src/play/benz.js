import { Car } from "./index";

const p = {
  brand: "Benz",
  year: "2010",
  price: "$20000"
};

/**
 * new Car (
 * {
 *   brand: string;
 *   year: string;
 *   price: string;
 * }
 * )
 */
const benz = new Car(p);

benz.introduce();

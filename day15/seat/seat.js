import { theater } from "./data";
import { init } from "./init";

export class Seat {
  #seatColumn;
  #seatNumber;
  #grade;
  #price;
  #isSelected;

  constructor(seatColumn, seatNumber) {
    this.#seatColumn = seatColumn;
    this.#seatNumber = seatNumber;
    this.#grade = this.setGrade(seatColumn, seatNumber);
    this.#price = this.setPrice();
    this.#isSelected = false;
  }

  setGrade(seatColumn, seatNumber) {
    const accessibleColumn = "A";
    const accessibleNumber = [1, 2, 3];

    const widboxColumn = ["B", "D", "F", "H", "J"];
    const widboxNumbers = [5, 15];

    if (widboxColumn.includes(seatColumn) && widboxNumbers.includes(seatNumber))
      return theater.grade[2];

    if (
      accessibleColumn === seatColumn &&
      accessibleNumber.includes(seatNumber)
    )
      return theater.grade[3];

    return theater.grade[0];
  }

  setPrice() {
    const gradeIndex = theater.grade.indexOf(this.#grade);
    return theater.price[gradeIndex];
  }
}

init();

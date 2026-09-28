import { theater } from "./data";
import { Seat } from "./seat";

export const init = () => {
  const theaterArray = Array(theater.column.length)
    .fill()
    .map(() => Array(theater.row.length).fill());

  const newTheater = theaterArray.map((x, i) => {
    return x.map((_, j) => {
      return new Seat(theater.column[i], j + 1);
    });
  });

  return newTheater;
};

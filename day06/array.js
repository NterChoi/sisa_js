// const arr = [2, 4, 6, 8, 10];

// const double = (x) => x * 2;
// arr.map(double);

// const coffee = ["아메리카노", "라뗴", "모카", "프라푸치노"];

// coffee.map((x, i) => `${i}.${x}`);

// // const students = [
// //   { name: "김나단", age: 31 },
// //   { name: "이민욱", age: 26 },
// //   { name: "윤정은", age: 29 },
// // ];

// // students.map((x, i) => {
// //   return {
// //     no: i,
// //     ...x,
// //   };
// // });

// const company = [
//   { name: "씨엘제로", location: "오사카" },
//   { name: "라쿠텐", location: "도쿄" },
//   { name: "메루카리", location: "도쿄" },
// ];

// company.map((x, i) => {
//   x.no = i;
//   return x;
// });

// const japanClass = [
//   {
//     name: "A반",
//     level: "basic",
//     students: ["오찬식", "이민욱", "윤정은"],
//   },
//   {
//     name: "B반",
//     level: "advanced",
//     students: ["김나단", "김지원", "최강현"],
//   },
// ];

// console.log(
//   japanClass.map((x, i) => {
//     return {
//       no: i,
//       ...x,
//       students: students.map((y, j) => {
//         return {
//           no: j,
//           name: y,
//         };
//       }),
//     };
//   }),
// );

const students = [
  {
    name: "윤정은",
    itBooks: ["html & css", "github", "javascript"],
    japaneseBooks: ["회화책", "문법책", "단어장"],
  },
  {
    name: "오찬식",
    itBooks: ["html & css", "github", "javascript"],
    japaneseBooks: ["히라가나", "가타카나", "단어장"],
  },
  {
    name: "이민욱",
    itBooks: ["html & css", "github", "javascript"],
    japaneseBooks: ["한문책", "출석책", "단어장"],
  },
];

console.log(
  students.map((x, i) => {
    return {
      no: i + 1,
      ...x,
      itBooks: x.itBooks.map((bookname, j) => {
        return {
          no: j + 1,
          name: bookname,
          bookslength: bookname.length,
        };
      }),
      japaneseBooks: x.japaneseBooks.map((bookname1, k) => {
        return {
          no: k + 1,
          name: bookname1,
          bookslength: bookname1.length,
        };
      }),
    };
  }),
);

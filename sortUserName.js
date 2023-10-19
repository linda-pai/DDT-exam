let arr = [];
arr = [
  {
    firstName: "xxx",
    lastName: "Pai",
    customerID: 10,
    note: "xxx",
    profession: "student",
  },
  {
    firstName: "xxx",
    lastName: "",
    customerID: 3,
    note: "xxx",
    profession: "student",
  },
];

//Please follow the principle (‘firstName’ + ‘lastName’ + ‘customerID’) to sort this array and print it out.
export function arraySortByFullName(arr) {
  return arr.sort((a, b) => {
    if (
      a.firstName + a.lastName + a.customerID >
      b.firstName + b.lastName + b.customerID
    ) {
      return 1;
    } else {
      return -1;
    }
  });
}
// console.log("arraySortByFullName", arraySortByFullName(arr));

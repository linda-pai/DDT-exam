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
//Please sort by ‘profession’ to follow the principle.
//(‘systemAnalytics’ > ‘engineer’ > ‘productOwner’ > ‘freelancer’ > ‘student’’)

export function arraySortByType(arr) {
  let type = {
    systemAnalytics: 1,
    engineer: 2,
    productOwner: 3,
    freelancer: 4,
    student: 5,
  };

  return arr.sort((a, b) => type[a.profession] - type[b.profession]);
}

// console.log(arraySortByType(arr));

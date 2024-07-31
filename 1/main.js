// 1. 
// Q1:
function sortUserName(users) {
  users.sort((a, b) => {
    let nameA = a.firstName + a.lastName + a.customerID;
    let nameB = b.firstName + b.lastName + b.customerID;
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });
  console.log(users);
}
// Q2:
function sortByType(users) {
  const professionOrder = {
    systemAnalytics: 1,
    engineer: 2,
    productOwner: 3,
    freelancer: 4,
    student: 5,
  };

  users.sort((a, b) => {
    return professionOrder[a.profession] - professionOrder[b.profession];
  });

  console.log(users);
}
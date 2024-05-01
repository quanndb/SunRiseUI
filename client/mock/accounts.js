const ROLE = ["ADMIN", "USER", "EMPLOYEE"];

const accounts = [
  {
    username: "quanna",
    password: "quandeptrai",
    fullname: "Nguyễn Anh Quân",
    gender: "Male",
    role: ROLE[Math.floor(Math.random()) * ROLE.length],
  },
];

export default accounts;

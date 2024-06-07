const ROLE = ["ADMIN", "USER", "EMPLOYEE"];
const ADMINS = [
  {
    id: 0,
    username: "quanna",
    password: "quandeptrai",
    fullName: "Nguyễn Anh Quân",
    about:
      "Có khả năng làm việc được dưới áp lực công việc lớn, chăm chỉ, cần cù, sáng tạo, nỗ lực cống hiến hết mình",
    company: "NTQ Solutions Corporation",
    job: "Administrator",
    country: "Hà Nội",
    address: "Sơn Tây",
    phone: "0974747474",
    email: "quanna@gmail.com",
    avatar: "",
    gender: "Male",
    role: ROLE[0],
  },
  {
    id: 1,
    username: "quanvm",
    password: "quandeptrai",
    fullName: "Vũ Minh Quân",
    about:
      "Có khả năng làm việc được dưới áp lực công việc lớn, chăm chỉ, cần cù, sáng tạo, nỗ lực cống hiến hết mình",
    company: "NTQ Solutions Corporation",
    job: "Administrator",
    country: "Hà Nội",
    address: "Vĩnh Phúc",
    phone: "0974747475",
    email: "quanvm@gmail.com",
    avatar: "",
    gender: "Male",
    role: ROLE[0],
  },
  {
    id: 2,
    username: "kietnt",
    password: "quandeptrai",
    fullName: "Nguyễn Tuấn Kiệt",
    about:
      "Có khả năng làm việc được dưới áp lực công việc lớn, chăm chỉ, cần cù, sáng tạo, nỗ lực cống hiến hết mình",
    company: "NTQ Solutions Corporation",
    job: "Administrator",
    country: "Hà Nội",
    address: "Đống Đa",
    phone: "0974747476",
    email: "kietnt@gmail.com",
    avatar: "",
    gender: "Male",
    role: ROLE[0],
  },
];

if (localStorage.getItem("admins") == null) {
  localStorage.setItem("admins", JSON.stringify(ADMINS));
}

export default ADMINS;

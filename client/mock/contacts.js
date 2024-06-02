const contacts = [
  {
    id: 0,
    accountID: 0,
    name: "Quân Vũ",
    email: "quanna@gmail.com",
    subject: "Vấn đề gặp khi đặt phòng",
    message:
      "Tôi đã điền đủ thông tin và bấm đặt phòng nhưng không thấy thông tin đặt phòng trong ds đơn đặt ",

      isReaded: false,
    },

  {
    id: 1,
    accountID: 0,
    name: "Quân Nguyễn",
    email: "quanna@gmail.com",
    subject: "Vấn đề gặp khi đặt phòng",
    message:
      "Tôi đã điền đủ thông tin và bấm đặt phòng nhưng không thấy thông tin đặt phòng trong ds đơn đặt ",

      isReaded: false,
    },
  {
    id: 2,
    accountID: 1,
    name: "Kiệt ",
    email: "quanna@gmail.com",
    subject: "Vấn đề gặp khi đặt phòng",
    message:
      "Tôi đã điền đủ thông tin và bấm đặt phòng nhưng không thấy thông tin đặt phòng trong ds đơn đặt ",

      isReaded: false,
    },
  {
    id: 4,
    accountID: 1,
    name: "Khôi",
    email: "quanna@gmail.com",
    subject: "Vấn đề gặp khi đặt phòng",
    message:
      "Tôi đã điền đủ thông tin và bấm đặt phòng nhưng không thấy thông tin đặt phòng trong ds đơn đặt ",

      isReaded: false,
    },
];

if (localStorage.getItem("contacts") == null) {
  localStorage.setItem("contacts", JSON.stringify(contacts));
}

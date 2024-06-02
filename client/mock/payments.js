const payments = [
  {
    id: 0,
    accountID: 0,
    bookingID: 0,
    paymentID: "78A643CD4010",
    createdDate: "August 12, 2017",
    roomPrice: 3.0,
    mealPrice: 0.8,
    servicePrice: 1.1,
    incurredPrice: 0.0,
    isComment: false,
    rate: 0,
    comment: "",
  },
  {
    id: 1,
    accountID: 0,
    bookingID: 1,
    paymentID: "78A643CD4009",
    createdDate: "August 12, 2017",
    roomPrice: 3.0,
    mealPrice: 0.8,
    servicePrice: 1.2,
    incurredPrice: 0.1,
    isComment: false,
    rate: 0,
    comment: "",
  },
  {
    id: 2,
    accountID: 1,
    bookingID: 4,
    paymentID: "78A643CD4011",
    createdDate: "August 12, 2017",
    roomPrice: 3.0,
    mealPrice: 0.8,
    servicePrice: 1.1,
    incurredPrice: 0.0,
    isComment: false,
    rate: 0,
    comment: "",
  },
  {
    id: 3,
    accountID: 1,
    bookingID: 5,
    paymentID: "78A643CD4012",
    createdDate: "August 12, 2017",
    roomPrice: 3.0,
    mealPrice: 0.8,
    servicePrice: 1.2,
    incurredPrice: 0.1,
    isComment: false,
    rate: 0,
    comment: "",
  },
];
//set localstorage when first time start website
if (localStorage.getItem("payments") == null) {
  localStorage.setItem("payments", JSON.stringify(payments));
}

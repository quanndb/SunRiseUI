const reviews = [
  {
    id: 1,
    username: "quanndb",
    img: "../client/img/about-1.jpg",
    rate: 5,
    date: "2023-11-16 09:32",
    room: "Phòng vip 1",
    comment:
      "Dịch vụ ok, giá cả hợp lý Dịch vụ ok, giá cả hợp lý Dịch vụ ok, giá cả hợp lý",
    like: 100,
    disLike: 35,
    isLike: false,
    isDislike: false,
    reply: [
      {
        id: 1,
        username: "sunrise",
        img: "../client/img/logo.jpg",
        date: "2023-11-16 11:32",
        comment: "Cảm ơn bạn đã sử dụng dịch vụ.",
      },
      {
        id: 2,
        username: "quanna",
        img: "../client/img/about-2.jpg",
        date: "2023-11-16 14:32",
        comment: "Đúng vậy.",
      },
    ],
  },
  {
    id: 2,
    username: "kiettk",
    img: "../client/img/about-2.jpg",
    rate: 4,
    date: "2023-11-17 09:00",
    room: "Phòng cao cấp 2",
    comment: "Tất cả đều ok, trừ nhà tắm!",
    like: 100,
    disLike: 35,
    isLike: false,
    isDislike: false,
    reply: [
      {
        id: 1,
        username: "sunrise",
        img: "../client/img/logo.jpg",
        date: "2023-11-16 11:32",
        comment: `Xin lỗi bạn vì trải nghiệm không đáng có, nếu có thắc mắc vui lòng liên hệ 
        (+84) 276.3.714.714
        .`,
      },
      {
        id: 2,
        username: "quanna",
        img: "../client/img/about-3.jpg",
        date: "2023-11-16 14:32",
        comment: "Haha.",
      },
    ],
  },
  {
    id: 3,
    username: "abcdeptrai",
    img: "../client/img/about-4.jpg",
    rate: 4,
    date: "2023-11-17 09:00",
    room: "Phòng sang trọng 1",
    comment: "Tất cả đều ok, trừ nhà tắm!",
    like: 100,
    disLike: 35,
    isLike: false,
    isDislike: false,
    reply: [
      {
        id: 1,
        username: "sunrise",
        img: "../client/img/logo.jpg",
        date: "2023-11-16 11:32",
        comment: `Xin lỗi bạn vì trải nghiệm không đáng có, nếu có thắc mắc vui lòng liên hệ 
        (+84) 276.3.714.714
        .`,
      },
      {
        id: 2,
        username: "quanna",
        img: "../client/img/about-1.jpg",
        date: "2023-11-16 14:32",
        comment: "Haha.",
      },
    ],
  },
];
//set localstorage when first time start website
if (localStorage.getItem("reviews") == null) {
  localStorage.setItem("reviews", JSON.stringify(reviews));
}

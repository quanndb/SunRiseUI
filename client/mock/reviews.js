const JOBS = [
  "Teacher",
  "Student",
  "Software Engineer",
  "Doctor",
  "Saler",
  "Worker",
];

const reviews = [
  {
    id: 1,
    username: "quanndb",
    img: "../client/img/team-1.jpg",
    rate: 5,
    date: "2023-11-16 09:32",
    room: "Default",
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
        img: "../client/img/team-2.jpg",
        date: "2023-11-16 14:32",
        comment: "Đúng vậy.",
      },
    ],
  },
  {
    id: 2,
    username: "kiettk",
    img: "../client/img/team-3.jpg",
    rate: 4,
    date: "2023-11-17 09:00",
    room: "Default",
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
        img: "../client/img/team-2.jpg",
        date: "2023-11-16 14:32",
        comment: "Haha.",
      },
    ],
  },
  {
    id: 3,
    username: "abcdeptrai",
    img: "../client/img/team-4.jpg",
    rate: 4,
    date: "2023-11-17 09:00",
    room: "Default",
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
        img: "../client/img/team-2.jpg",
        date: "2023-11-16 14:32",
        comment: "Haha.",
      },
    ],
  },
];
export default reviews;

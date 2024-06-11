const ROOMS = [
  {
    id: "0",
    roomName: "Phòng Vip 1",
    bedType: "Đôi",
    size: 50,
    capacity: 100,
    description: "Phòng này siêu giảm giá luôn không dùng hơi phí",
    isActive: true,
    price: 3,
    rate: 3,
    images: [
      {
        id: "0",
        img: "../client/img/room-0.jpg",
      },
      {
        id: "1",
        img: "../client/img/room-1.jpg",
      },
      {
        id: "2",
        img: "../client/img/room-2.jpg",
      },
    ],
    price: "1.00",
  },
  {
    id: "1",
    roomName: "Phòng Vip 2",
    bedType: "Ba",
    size: 50,
    capacity: 100,
    description: "Phòng này siêu giảm giá luôn không đặt hơi phí",
    isActive: false,
    price: 5,
    rate: 3,
    images: [
      {
        id: "0",
        img: "../client/img/room-1.jpg",
      },
      {
        id: "1",
        img: "../client/img/room-2.jpg",
      },
      {
        id: "2",
        img: "../client/img/room-3.jpg",
      },
    ],
    price: "1.50",
  },
  {
    id: "2",
    roomName: "Phòng Tiêu Chuẩn 1",
    bedType: "Đôi",
    size: 50,
    capacity: 100,
    description: "Phòng này siêu giảm giá luôn không dùng hơi phí",
    isActive: true,
    price: 3,
    rate: 4,
    images: [
      {
        id: "0",
        img: "../client/img/room-2.jpg",
      },
      {
        id: "1",
        img: "../client/img/room-3.jpg",
      },
      {
        id: "2",
        img: "../client/img/room-4.jpg",
      },
    ],
    price: "2.00",
  },
  {
    id: "3",
    roomName: "Phòng Tiêu Chuẩn 2",
    bedType: "Ba",
    size: 50,
    capacity: 100,
    description: "Phòng này siêu giảm giá luôn không đặt hơi phí",
    isActive: false,
    price: 5,
    rate: 4,
    images: [
      {
        id: "0",
        img: "../client/img/room-3.jpg",
      },
      {
        id: "1",
        img: "../client/img/room-4.jpg",
      },
      {
        id: "2",
        img: "../client/img/room-5.jpg",
      },
    ],
    price: "2.50",
  },
  {
    id: "4",
    roomName: "Phòng Sang Trọng 1",
    bedType: "Đôi",
    size: 50,
    capacity: 100,
    description: "Phòng này siêu giảm giá luôn không dùng hơi phí",
    isActive: true,
    price: 3,
    rate: 5,
    images: [
      {
        id: "0",
        img: "../client/img/room-4.jpg",
      },
      {
        id: "1",
        img: "../client/img/room-5.jpg",
      },
      {
        id: "2",
        img: "../client/img/room-6.jpg",
      },
    ],
    price: "3.00",
  },
  {
    id: "5",
    roomName: "Phòng Sang Trọng 2",
    bedType: "Đôi",
    size: 50,
    capacity: 120,
    description: "Phòng này siêu giảm giá luôn không dùng hơi phí",
    isActive: true,
    price: 12,
    rate: 5,
    images: [
      {
        id: "0",
        img: "../client/img/room-5.jpg",
      },
      {
        id: "1",
        img: "../client/img/room-6.jpg",
      },
      {
        id: "2",
        img: "../client/img/room-7.jpg",
      },
    ],
    price: "3.50",
  },
];
if (localStorage.getItem("rooms") == null) {
  localStorage.setItem("rooms", JSON.stringify(ROOMS));
}

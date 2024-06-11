const hotels = [
  {
    id: 1,
    name: "SunRise hotel chi nhánh Hà Nội",
    address: "716 Đ. Bạch Đằng, Bạch Đằng, Hai Bà Trưng, Hà Nội, Việt Nam",
    hotline: "02438627555",
    rate: "4.5",
    postRate: "1020",
    imageURL: "img/hotel1.jpg",
    description: `Khách sạn có không gian thư thái này cách sông Hồng chưa đến 1 km, cách đền Ngọc Sơn với ga Hà Nội 3 km và cách Lăng Chủ tịch Hồ Chí Minh 5 km.
    Phòng ở cao cấp dùng đồ nội thất tông màu đất, có ban công, Wi-Fi miễn phí, TV màn hình phẳng, tủ lạnh nhỏ, cùng dụng cụ pha trà và cà phê. Phòng cao cấp nhìn ra biển và kèm theo quyền sử dụng phòng chờ cao cấp. Phòng suite có thêm phòng khách và căn hộ có thêm bếp. Những căn biệt thự hiện đại có bể bơi riêng và dịch vụ ăn uống tại phòng phục vụ 24/7.
    Các tiện nghi bao gồm bể bơi ngoài trời, sân quần vợt, phòng tập thể dục, spa và khu vui chơi cho trẻ em. Tại đây có 3 nhà hàng sang trọng và thoải mái, một tiệm bánh và một quầy bar/khu vực thư giãn.`,
  },
  {
    id: 2,
    name: "SunRise hotel chi nhánh Tây Ninh",
    address: "81 Hoàng Lê Kha, Phường 3, Tây Ninh, Việt Nam",
    hotline: "02763714714",
    rate: "4.3",
    postRate: "1321",
    imageURL: "img/hotel3.jpg",
    description: `Khách sạn bình dân này nằm gần rạch Tây Ninh, cách trạm xe buýt gần nhất 7 phút đi bộ, Khu du lịch Núi Bà Đen 12 km và lối đi bộ trên Núi Bà Đen 18 km.
    Phòng ở bài trí đơn giản, có Wi-Fi miễn phí, TV màn hình phẳng, dụng cụ pha trà và cà phê. Tất cả phòng đều có tủ lạnh nhỏ và két sắt. Phòng suite có phòng khách riêng. Phòng suite loại 2 phòng ngủ có phòng bếp và hướng ra núi. Khách sạn phục vụ ăn uống tại phòng 24/7.
    Khách sạn có chỗ đậu xe miễn phí. Các tiện nghi khác bao gồm nhà hàng sáng sủa, quán cà phê, quán bar tầng thượng và phòng chơi bi-a. Tại đây còn có phòng tập thể dục, khu spa, sân tennis, bể bơi ngoài trời và khu tổ chức sự kiện với sức chứa lên đến 500 người.`,
  },
  {
    id: 3,
    name: "SunRise hotel chi nhánh Đà Nẵng",
    address:
      "111 Võ Nguyên Giáp, Street, Ngũ Hành Sơn, Đà Nẵng 50218, Việt Nam",
    hotline: "02363981999",
    rate: "4.1",
    postRate: "1007",
    imageURL: "img/hotel4.jpg",
    description: `Khách sạn cao cấp nhìn ra bãi biển Non Nước, cách Bảo tàng Điêu khắc Chăm 8 km và Cầu Rồng 10 km.
    Phòng ở cao cấp dùng đồ nội thất tông màu đất, có ban công, Wi-Fi miễn phí, TV màn hình phẳng, tủ lạnh nhỏ, cùng dụng cụ pha trà và cà phê. Phòng cao cấp nhìn ra biển và kèm theo quyền sử dụng phòng chờ cao cấp. Phòng suite có thêm phòng khách và căn hộ có thêm bếp. Những căn biệt thự hiện đại có bể bơi riêng và dịch vụ ăn uống tại phòng phục vụ 24/7.
    Các tiện nghi bao gồm bể bơi ngoài trời, sân quần vợt, phòng tập thể dục, spa và khu vui chơi cho trẻ em. Tại đây có 3 nhà hàng sang trọng và thoải mái, một tiệm bánh và một quầy bar/khu vực thư giãn, sân tennis,...`,
  },
  {
    id: 4,
    name: "SunRise hotel chi nhánh Phường Phú Nhuận",
    address:
      "57 Trương Quốc Dung, Phường 10, Phú Nhuận, Thành phố Hồ Chí Minh, Việt Nam",
    hotline: "02838443781",
    rate: "4.0",
    postRate: "801",
    imageURL: "img/hotel5.jpg",
    description: `Khách sạn bình dân này nằm trong một dãy nhà có các quán ăn. Nơi đây cách Sân bay Quốc tế Tân Sơn Nhất và Bảo tàng Chứng tích Chiến tranh 3 km, cách Nhà thờ Đức Bà Sài Gòn từ thế kỷ 19 4 km.
    Phòng ở ấm cúng, có Wi-Fi miễn phí, TV truyền hình cáp, tủ lạnh nhỏ và dụng cụ pha trà. Phòng suite có thêm phòng khách riêng. Trẻ em từ 10 tuổi trở xuống được ở miễn phí cùng một người lớn. Phục vụ ăn uống tại phòng 24/7.
    Phòng chờ ấm cúng có chương trình nhạc sống và nhà hàng sushi. Khách sạn có phục vụ bữa sáng. Các tiện nghi khác bao gồm nhà hàng sáng sủa, quán cà phê, quán bar tầng thượng và phòng chơi bi-a...`,
  },
];

if (localStorage.getItem("hotels") === null) {
  localStorage.setItem("hotels", JSON.stringify(hotels));
}

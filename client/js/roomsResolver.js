// import rooms from "../mock/rooms.js";

(function ($) {
  $(document).ready(function () {
    var rooms = JSON.parse(localStorage.getItem("rooms"));
    var container = $(".rooms");
    rooms.forEach(function (room) {
      $("#room").append(`
      <option value="${room.roomName}">${room.roomName}</option>
      `);
      var roomItem = `
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="room-item shadow rounded overflow-hidden">
            <div class="position-relative">
              <img width="400px" height="250px" style="object-fit: cover" src="${
                room.images[0].img
              }" alt="${room.roomName}">
              <small class="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">${
                room.price
              } Triệu vnđ/Đêm</small>
            </div>
            <div class="p-4 mt-2">
              <div class="d-flex justify-content-between mb-3">
                <h5 class="mb-0">${room.roomName}</h5>
                <div class="ps-2">
                  ${Array.from(
                    { length: room.rate },
                    (_, index) =>
                      `<small class="fa fa-star text-primary"></small>`
                  ).join("")}
                </div>
              </div>
              <div class="d-flex mb-3">
                <small class="border-end me-3 pe-3"><i class="fa fa-bed text-primary me-2"></i> Giường ${
                  room.bedType
                } </small>
                <small><i class="fa fa-wifi text-primary me-2"></i>Wifi</small>
              </div>
              <p class="text-body mb-3">${room.description}</p>
              <div class="d-flex justify-content-between">
                <a class="btn btn-sm btn-primary rounded py-2 px-4" href="/client/roomDetail.html?id=${
                  room.id
                }">Xem Chi Tiết</a>
                <a class="btn btn-sm btn-dark rounded py-2 px-4 ${
                  room.isActive ? "" : "disabled"
                }" href="booking.html" id="bookNowBtn" data-room-id="${
        room.id
      }">Đặt ngay</a>

              </div>
            </div>
          </div>
        </div>
      `;

      container.append(roomItem);
    });
  });
})(jQuery);

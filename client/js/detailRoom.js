// import ROOMS from "../mock/rooms.js";
(function ($) {
  $(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const roomId = urlParams.get("id");
    var container = $("#roomDetailContainer");
    container.addClass("justify-content-center");
    const ROOMS = JSON.parse(localStorage.getItem("rooms"));
    console.log(roomId);
    ROOMS.forEach(function (room) {
      if (room.id == roomId) {
        console.log(room);
        const roomDetail = `
          <div class="col-lg-4 col-md-6 wow fadeInUp d-flex flex-md-column flex-lg-row" data-wow-delay="0.1s">
              <div class="position-relative">
                <img
                  class="img-fluid mb-2 img-show-room"
                  style="height: 400px;"
                  src="${room.images[0].img}"  alt="${room.roomName}"
                  alt="${room.roomName}"
                />
                <div class="swiper-img">
                    <div class="d-flex">
                    ${room.images
                      .map(
                        (image) => `
                          <img
                            class="img-fluid img-content me-2"
                            style="height: 100px; width: 100px;"
                            src="${image.img}"
                            alt="${room.roomName}"
                          />
                        `
                      )
                      .join("")}
                  </div>
                </div>
              </div>
          </div>
          <div class="col-lg-6 col-md-4 wow fadeInUp" data-wow-delay="0.1s">
            <div>
              <div class="d-flex justify-content-between mb-3">
                <h5 class="mb-0">${room.roomName}</h5>
              </div>
              <div class="mb-2">
                ${Array.from(
                  { length: room.rate },
                  (_, index) =>
                    `<small class="fa fa-star text-primary"></small>`
                ).join("")}
              </div>
              <div class="d-flex mb-3">
                <small class="border-end me-3 pe-3"><i class="fa fa-bed text-primary me-2"></i>Giường ${
                  room.bedType
                }</small>
                <small class="border-end me-3 pe-3"><i class="fa fa-bath text-primary me-2"></i></small>
                <small><i class="fa fa-wifi text-primary me-2"></i>Wifi</small>
              </div>
              <p class="text-body mb-3">${room.description}</p>
              <small class="translate-middle-y bg-primary text-white rounded py-1 px-3">${
                room.price
              } Triệu vnđ/Đêm</small>
              <div class="row ms-1 mt-3">
                <div class="row"><span class="fw-bold">AMENITIES</span>
                  <p>Area: 32 m2</p>
                </div>
                <div class="col-md-6">
                    <ul>
                        <li>Room key card</li>
                        <li>1 double bed size 1.8m or 2 single beds size 1.4m</li>
                        <li>Fire Alarm Systems</li>
                        <li>32” LCD TV</li>
                        <li>HD Cable TV</li>
                        <li>Work Desk</li>
                        <li>Makeup Table</li>
                    </ul>
                </div>
                <div class="col-md-6">
                    <ul>
                        <li>Room key card</li>
                        <li>1 double bed size 1.8m or 2 single beds size 1.4m</li>
                        <li>Fire Alarm Systems</li>
                        <li>32” LCD TV</li>
                        <li>HD Cable TV</li>
                        <li>Work Desk</li>
                        <li>Makeup Table</li>
                    </ul>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between mt-4 col-lg-12 col-md-12">
                <div class="col-md-6">
                    Room Price from: 
                    <span class="col-md-3 text-primary fw-bold">
                        ${room.price} <sup>Triệu vnđ</sup> / đêm
                    </span>
                </div>
                <a class="btn btn-sm btn-dark rounded py-2 px-4 ${
                  room.isActive ? "" : "disabled"
                }" href="booking.html" id="bookNowBtn" data-room-id="${
          room.id
        }">Đặt ngay</a>
              </div>
            </div>
          </div>`;
        container.append(roomDetail);
      }
    });

    // swiper
    $(".img-content").mousemove(function () {
      $(".img-show-room").attr("src", $(this).attr("src"));
      $(this).css("border", "1px solid red");
    });
    $(".img-content").mouseleave(function () {
      $(this).css("border", "none");
    });
  });
})(jQuery);

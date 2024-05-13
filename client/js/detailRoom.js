import ROOMS from "../../mock/rooms.js";
(function ($) {
  $(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const roomId = urlParams.get("id");
    var container = $("#roomDetailContainer");
    container.addClass("justify-content-center");

    console.log(roomId);
    ROOMS.forEach(function (room) {
      if (room.id == roomId) {
        const roomDetail = `
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div class="position-relative">
                          <img class="img-fluid" src="img/room-${
                            room.id
                          }.jpg" alt="${room.roomName}">
                    </div>
                </div>

              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                      
                      <div class=" ">
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
                              <small class="border-end me-3 pe-3"><i class="fa fa-bath text-primary me-2"></i>
                              
                            
                              </small>
                              <small><i class="fa fa-wifi text-primary me-2"></i>Wifi</small>
                          </div>
                          <p class="text-body mb-3">${room.description}</p>


                          <small class=" translate-middle-y bg-primary text-white rounded py-1 px-3 ">${
                            room.price
                          } Triệu vnđ/Đêm</small>


                          <div class="d-flex justify-content-between mt-4">                
                              <a class="btn btn-sm btn-dark rounded py-2 px-4" href="">Book Now</a>
                          </div>
                      </div>
                  </div>

            
                  
          `;
        const detail = `
          <div class="col-lg-4 col-md-6 wow fadeInUp d-flex flex-md-column flex-lg-row" data-wow-delay="0.1s">
              <div class="position-relative">
                <img
                  class="img-fluid mb-2 img-show-room"
                  style="height: 400px;"
                  src="img/room-1.jpg"
                  alt="${room.roomName}"
                />
                <div class="swiper-img">
                    <div class="d-flex">
                        <img
                      class="img-fluid img-content me-2"
                      style="height: 100px; width: 100px;"
                      src="img/room-1.jpg"
                      alt="${room.roomName}"
                    />
                    <img
                        class="img-fluid img-content me-2"
                        style="height: 100px; width: 100px;"
                        src="img/room-2.jpg"
                        alt="${room.roomName}"
                      />
                    <img
                        class="img-fluid img-content"
                        style="height: 100px; width: 100px;"
                        src="img/room-3.jpg"
                        alt="${room.roomName}"
                      />
                  </div>
                </div>
              </div>
              

            


          </div>
          <div class="col-lg-6 col-md-4 wow fadeInUp " data-wow-delay="0.1s">
            <div class="">
              <div class="d-flex justify-content-between mb-3">
                <h5 class="mb-0">Deluxe</h5>
              </div>
              <div class="mb-2">
                <small class="fa fa-star text-primary"></small>
                <small class="fa fa-star text-primary"></small>
                <small class="fa fa-star text-primary"></small>
                <small class="fa fa-star text-primary"></small>
                <small class="fa fa-star text-primary"></small>
              </div>
              <div class="d-flex mb-3">
                <small class="border-end me-3 pe-3"
                  ><i class="fa fa-bed text-primary me-2"></i>Giường Đôi</small
                >
                <small class="border-end me-3 pe-3"
                  ><i class="fa fa-bath text-primary me-2"></i>
                </small>
                <small
                  ><i class="fa fa-wifi text-primary me-2"></i>Wifi</small
                >
              </div>
              <p class="text-body mb-3">
                Bao gồm 1 giường đôi và bồn tắm, nội thất sang trọng, ấm cúng, không gian tiện nghi của phòng Deluxe sẽ mang đến cho bạn những trải nghiệm tuyệt vời.</p>

              <!-- <small
                class="translate-middle-y bg-primary text-white rounded py-1 px-3"
                >5 Triệu vnđ/Đêm</small
              > -->

              <div class="row ms-1 mt-3">
                <div class="row"><span class="fw-bold">AMENITIES</span>
                    <p> Area: 32 m2</p>
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
              
            </div>
            <div class="d-flex align-items-center justify-content-between mt-4 col-lg-12 col-md-12">
                <div class="col-md-6">
                    Room Price from: 
                    <span class="col-md-3 text-primary fw-bold">
                        1.390.000 <sup>đ</sup> / day
                    </span>
                </div>
                <a class="btn btn-sm btn-dark rounded py-2 px-4 col-md-4 " href="booking.html"
                  >Đặt ngay</a
                >
              </div>
          </div>`;
        container.append(detail);
      }
    });
  });
})(jQuery);
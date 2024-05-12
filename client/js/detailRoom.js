import ROOMS from "../../mock/rooms.js"
(function ($) {
  $(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const roomId = urlParams.get("id");
    var container = $("#roomDetailContainer");

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
        container.append(roomDetail);



      }
    });
  });
})(jQuery);

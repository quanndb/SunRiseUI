import hotels from "../../mock/hotels.js";

(function ($) {
  $(document).ready(function () {
    $("#branch-section").css("background-image");

    hotels.forEach((item, index) => {
      $(".owl-carousel.branch-carousel").append(
        `
        <div class="branch-item bg-white py-4 px-4">
        <div class="row justify-content-center">
          <div class="col-sm-5 px-0 mx-3"><img src="${item.imageURL}" /></div>
          <div class="bg-dark col-sm-5 py-3">
            <p class="fs-4 fw-bold text-primary">
              ${item.name}
            </p>
            <div class="rate">
              <p class="text-white">
                ${item.rate}
                <small class="fa fa-star text-primary"></small> (${item.postRate})
              </p>
            </div>
            <p class="text-white">
              <span class="fw-bold text-primary">Địa chỉ: </span>${item.address}
            </p>
            <p class="text-white">
              <span class="fw-bold text-primary">Hotline: </span
              >${item.hotline}
            </p>
            <p class="text-white fst-italic">
              "${item.description}"
            </p>
          </div>
        </div>
      </div>
        `
      );
    });

    // Branch carousel
    $(".branch-carousel").owlCarousel({
      autoplay: true,
      autoplayTimeout: 5000,
      smartSpeed: 1000,
      margin: 100,
      loop: true,
      dots: true,
      responsive: {
        0: {
          items: 1,
        },
      },
    });
  });
})(jQuery);

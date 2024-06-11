var hotels = JSON.parse(localStorage.getItem("hotels"));
(function ($) {
  $(document).ready(function () {
    hotels.forEach((item, index) => {
      $("#branch").append(`
      <option value="${item.name}">${item.name}</option>
      `);
      if (index == 0) {
        $(".carousel-inner.hotel").append(`<div class="carousel-item active">
        <div class="bg-dark branch-container row p-5 gx-5">
          <div
            class="branch-image col-md-6"
            style="
              background-image: url(${item.imageURL});
              background-size: cover;
              background-position: center;
            "
          ></div>
          <div class="col">
            <p class="text-primary fw-bold fs-3">
              ${item.name}
            </p>
            <p class="text-white">
              ${item.address}
            </p>
            <p class="text-white">
              <span class="text-primary">Hotline: </span>${item.hotline}
            </p>
            <p class="text-white">
              ${item.rate}
              <span
                ><i class="bi bi-star-fill text-primary"></i
              ></span>
            </p>
            <p class="text-white fst-italic">
              "${item.description}"
            </p>
          </div>
        </div>
      </div>`);
      } else {
        $(".carousel-inner.hotel").append(`<div class="carousel-item">
        <div class="bg-dark branch-container row p-5 gx-5">
          <div
            class="branch-image col-md-6"
            style="
              background-image:url(${item.imageURL});
              background-size: cover;
              background-position: center;
            "
          ></div>
          <div class="col">
            <p class="text-primary fw-bold fs-3">
              ${item.name}
            </p>
            <p class="text-white">
              ${item.address}
            </p>
            <p class="text-white">
              <span class="text-primary">Hotline: </span>${item.hotline}
            </p>
            <p class="text-white">
              ${item.rate}
              <span
                ><i class="bi bi-star-fill text-primary"></i
              ></span>
            </p>
            <p class="text-white fst-italic">
              "${item.description}"
            </p>
          </div>
        </div>
      </div>`);
      }
    });
  });
})(jQuery);

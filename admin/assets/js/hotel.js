(function ($) {
  $(document).ready(function () {
    const hotels = JSON.parse(localStorage.getItem("hotels"));
    hotels.forEach((item) =>
      $("#branch").append(`<option value="${item.name}">${item.name}</option>`)
    );
  });
})(jQuery);

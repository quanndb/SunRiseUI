(function () {
  "use strict";
  $(document).ready(function () {
    $(".toggle-sidebar-btn").click(function () {
      $("#main").toggleClass("mleft");
      $("#sidebar").toggleClass("hideSB");
    });
  });
})(jQuery);

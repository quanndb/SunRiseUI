import { header } from "./component/index.js";
import { footer } from "./component/index.js";

(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 3);
  };
  spinner();

  //load component
  var activePage = $(".header").attr("page-index");
  $(".header").append(header);
  $(".page").eq(activePage).addClass("active");
  $(".footer").append(footer);

  // Dropdown on mouse hover
  const $dropdown = $(".dropdown");
  const $dropdownToggle = $(".dropdown-toggle");
  const $dropdownMenu = $(".dropdown-menu");
  const showClass = "show";

  $(window).on("load resize", function () {
    if (this.matchMedia("(min-width: 992px)").matches) {
      $dropdown.hover(
        function () {
          const $this = $(this);
          $this.addClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "true");
          $this.find($dropdownMenu).addClass(showClass);
        },
        function () {
          const $this = $(this);
          $this.removeClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "false");
          $this.find($dropdownMenu).removeClass(showClass);
        }
      );
    } else {
      $dropdown.off("mouseenter mouseleave");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 0, "easeInOutExpo");
    return false;
  });

  // Modal Video
  $(document).ready(function () {
    var $videoSrc;
    $(".btn-play").click(function () {
      $videoSrc = $(this).data("src");
    });

    $("#videoModal").on("shown.bs.modal", function (e) {
      $("#video").attr(
        "src",
        $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
      );
    });

    $("#videoModal").on("hide.bs.modal", function (e) {
      $("#video").attr("src", $videoSrc);

      // Modal Video
      $(document).ready(function () {
        var $videoSrc;
        $(".btn-play").click(function () {
          $videoSrc = $(this).data("src");
        });

        $("#videoModal").on("shown.bs.modal", function (e) {
          $("#video").attr(
            "src",
            $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
          );
        });

        $("#videoModal").on("hide.bs.modal", function (e) {
          $("#video").attr("src", $videoSrc);
        });
      });
    });
  });
})(jQuery);

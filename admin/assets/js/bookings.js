(function ($) {
  "use strict";

  $(document).ready(function () {
    var bookings = JSON.parse(localStorage.getItem("bookings"));
    var filteredBookings = bookings;

    // pagination start
    const bookingsPerPage = 10;
    const maxVisiblePages = 3;
    let currentPage = 1;
    let filter = $("#message-status").val();

    function createPagination(totalPages, bookings) {
      $(".pagination .page-item").not(".prev-page, .next-page").remove(); // Clear existing page items
      for (let i = 1; i <= totalPages; i++) {
        $(".next-page").before(
          `<li class="page-item"><a class="page-link" href="#">${i}</a></li>`
        );
      }
      $(".page-item").eq(1).addClass("active"); // Set the first page as active
      updatePagination(bookings);
    }

    function displayBookings(page, bookings) {
      const start = (page - 1) * bookingsPerPage;
      const end = page * bookingsPerPage;
      const paginatedBookings = bookings.slice(start, end);
      const status = {
        Using: "bg-success",
        Waiting: "bg-warning",
        Cancelled: "bg-danger",
        Delivered: "bg-info",
      };

      $(".order-data").empty();
      paginatedBookings.forEach((item) => {
        $(".order-data").append(`
                  <tr class="${item.isReaded == false ? "unRead" : ""}"}>
                    <th scope="row" >
                      <a href="#" class="text-primary orderbtn"         
                    data-bs-toggle="modal"
                    target=${item.id}
                    data-bs-target="#orderInfoModal">${item.orderID}</a>
                    </th>
                    <td>${item.name}</td>
                    <td>${item.checkIn}</td>
                    <td>${item.checkOut}</td>
                    <td>${item.phone}</td>
                    <td>${item.adult}</td>
                    <td>${item.child}</td>
                    <td>${item.branch}</td>
                    <td>${item.room}</td>
                    <td>${item.total} Tr</td>
                    <td>${item.message}</td>
                    <td>
                      <span class="badge ${status[item.status]}">${
          item.status
        }</span>
                    </td>
                    <td>${item.note}</td>
                  </tr>
          `);
      });

      updatePagination(bookings);
    }

    function updatePagination(bookings) {
      const totalPages = Math.ceil(bookings.length / bookingsPerPage);
      const currentPageItem = $(".page-item.active");
      const currentIndex = $(".page-item").index(currentPageItem);

      $(".page-item").hide(); // Hide all pages
      $(".prev-page, .next-page").show(); // Always show prev and next buttons

      // Determine the range of pages to show
      let start = currentIndex - Math.floor(maxVisiblePages / 2);
      let end = currentIndex + Math.floor(maxVisiblePages / 2);

      // Adjust start and end if they go out of bounds
      if (start < 1) {
        start = 1;
        end = start + maxVisiblePages - 1;
      }
      if (end > totalPages) {
        end = totalPages;
        start = end - maxVisiblePages + 1;
      }

      // Show the appropriate pages
      $(".page-item")
        .slice(start, end + 1)
        .show();
      currentPageItem.show(); // Ensure current page is shown

      // Disable prev/next buttons if at the start or end
      $(".page-item").removeClass("disabled");

      if (currentIndex === 1) {
        $(".prev-page").addClass("disabled");
      }

      if (currentIndex === totalPages) {
        $(".next-page").addClass("disabled");
      }
    }

    $(".prev-page").on("click", function (e) {
      e.preventDefault();
      if ($(this).hasClass("disabled")) return;
      const currentPageItem = $(".page-item.active");
      const prevPageItem = currentPageItem.prev();
      if (!prevPageItem.hasClass("prev-page") && prevPageItem.length) {
        currentPageItem.removeClass("active");
        prevPageItem.addClass("active");
        currentPage--;
        displayBookings(currentPage, filteredBookings);
      }
    });

    $(".next-page").on("click", function (e) {
      e.preventDefault();
      if ($(this).hasClass("disabled")) return;
      const currentPageItem = $(".page-item.active");
      const nextPageItem = currentPageItem.next();
      if (!nextPageItem.hasClass("next-page") && nextPageItem.length) {
        currentPageItem.removeClass("active");
        nextPageItem.addClass("active");
        currentPage++;
        displayBookings(currentPage, filteredBookings);
      }
    });

    $(".pagination").on("click", ".page-link", function (e) {
      e.preventDefault();
      const pageItem = $(this).parent();
      if (!pageItem.hasClass("prev-page") && !pageItem.hasClass("next-page")) {
        $(".page-item").removeClass("active");
        pageItem.addClass("active");
        currentPage = parseInt($(this).text());
        displayBookings(currentPage, filteredBookings);
      }
    });

    // Initialize pagination
    const totalPages = Math.ceil(filteredBookings.length / bookingsPerPage);
    createPagination(totalPages, filteredBookings);
    displayBookings(currentPage, filteredBookings);
    // pagination end

    //format date
    function formatDate(dateString) {
      const [month, day, year] = dateString
        .split("/")
        .map((num) => num.padStart(2, "0"));
      return `${year}-${month}-${day}`;
    }
    function formatDateReverse(dateString) {
      const [year, month, day] = dateString.split("-");
      return `${parseInt(month, 10)}/${parseInt(day, 10)}/${year}`;
    }
    //control

    $("#message-status").on("change", function () {
      filter = $(this).val();
      filteredBookings = bookings;
      if (filter == "All") {
        createPagination(
          Math.ceil(filteredBookings.length / bookingsPerPage),
          filteredBookings
        );
      }
      if (filter == "Waiting") {
        filteredBookings = bookings.filter((item) => item.status == "Waiting");
        createPagination(
          Math.ceil(filteredBookings.length / bookingsPerPage),
          filteredBookings
        );
      }
      if (filter == "Delivered") {
        filteredBookings = bookings.filter(
          (item) => item.status == "Delivered"
        );
        createPagination(
          Math.ceil(filteredBookings.length / bookingsPerPage),
          filteredBookings
        );
      }
      if (filter == "Cancelled") {
        filteredBookings = bookings.filter(
          (item) => item.status == "Cancelled"
        );
        createPagination(
          Math.ceil(filteredBookings.length / bookingsPerPage),
          filteredBookings
        );
      }
      if (filter == "Using") {
        filteredBookings = bookings.filter((item) => item.status == "Using");
        createPagination(
          Math.ceil(filteredBookings.length / bookingsPerPage),
          filteredBookings
        );
      }
      displayBookings(1, filteredBookings);
      currentPage = 1;
    });

    $("#order-filter").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      filteredBookings = bookings.filter(function (item) {
        return (
          item.orderID.toString().toLowerCase().includes(value) ||
          item.name.toLowerCase().includes(value) ||
          item.email.toLowerCase().includes(value) ||
          item.phone.toLowerCase().includes(value) ||
          item.adult.toString().toLowerCase().includes(value) ||
          item.child.toString().toLowerCase().includes(value) ||
          item.branch.toLowerCase().includes(value) ||
          item.room.toLowerCase().includes(value) ||
          item.total.toString().toLowerCase().includes(value) ||
          item.message.toLowerCase().includes(value) ||
          item.status.toLowerCase().includes(value) ||
          item.note.toLowerCase().includes(value)
        );
      });

      createPagination(
        Math.ceil(filteredBookings.length / bookingsPerPage),
        filteredBookings
      );
      displayBookings(1, filteredBookings);
      currentPage = 1;
    });

    $(document).on("click", ".orderbtn", function () {
      var id = $(this).attr("target");
      $("#saveOrder").attr("target", id);
      var currentOrder = bookings.filter((item) => item.id == id)[0];
      if (currentOrder.isReaded === false) {
        currentOrder.isReaded = true;
      }
      $("#orderID").val(currentOrder.orderID);
      $("#name").val(currentOrder.name);
      $("#email").val(currentOrder.email);
      $("#phone").val(currentOrder.phone);
      $("#checkin").val(formatDate(currentOrder.checkIn));
      $("#checkout").val(formatDate(currentOrder.checkOut));
      $("#adult").val(currentOrder.adult);
      $("#child").val(currentOrder.child);
      $("#branch").val(currentOrder.branch);
      $("#room").val(currentOrder.room);
      $("#total").val(currentOrder.total);
      $("#message").val(currentOrder.message);
      $("#note").val(currentOrder.note);
      $("#status").val(currentOrder.status);
    });

    $("#saveOrder").on("click", function () {
      var id = $(this).attr("target");
      var currentOrder = bookings.filter((item) => item.id == id)[0];
      currentOrder.name = $("#name").val();
      currentOrder.email = $("#email").val();
      currentOrder.phone = $("#phone").val();
      currentOrder.checkIn = formatDateReverse($("#checkin").val());
      currentOrder.checkOut = formatDateReverse($("#checkout").val());
      currentOrder.adult = $("#adult").val();
      currentOrder.child = $("#child").val();
      currentOrder.branch = $("#branch").val();
      currentOrder.room = $("#room").val();
      currentOrder.total = $("#total").val();
      currentOrder.message = $("#message").val();
      currentOrder.note = $("#note").val();
      currentOrder.status = $("#status").val();
      displayBookings(currentPage, filteredBookings);

      localStorage.setItem("bookings", JSON.stringify(bookings));
    });
  });
})(jQuery);

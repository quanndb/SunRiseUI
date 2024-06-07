(function ($) {
  "use strict";

  $(document).ready(function () {
    var payments = JSON.parse(localStorage.getItem("payments"));
    var filteredpayments = payments;

    // pagination start
    const paymentsPerPage = 10;
    const maxVisiblePages = 3;
    let currentPage = 1;
    let filter = $("#message-status").val();

    function createPagination(totalPages, payments) {
      $(".pagination .page-item").not(".prev-page, .next-page").remove(); // Clear existing page items
      for (let i = 1; i <= totalPages; i++) {
        $(".next-page").before(
          `<li class="page-item"><a class="page-link" href="#">${i}</a></li>`
        );
      }
      $(".page-item").eq(1).addClass("active"); // Set the first page as active
      updatePagination(payments);
    }

    function displaypayments(page, payments) {
      const start = (page - 1) * paymentsPerPage;
      const end = page * paymentsPerPage;
      const paginatedpayments = payments.slice(start, end);

      $(".order-data").empty();
      paginatedpayments.forEach((item) => {
        $(".order-data").append(`
                  <tr class="${item.isReaded == false ? "unRead" : ""}"}>
                    <th scope="row" >
                      <a href="#" class="text-primary orderbtn"         
                    data-bs-toggle="modal"
                    target=${item.id}
                    data-bs-target="#orderInfoModal">${item.paymentID}</a>
                    </th>
                    <td>${item.name}</td>
                    <td>${item.phone}</td>
                    <td>${item.room}</td>
                    <td>${item.checkIn}</td>
                    <td>${item.checkOut}</td>
                    <td>${item.roomPrice} Tr</td>
                    <td>${item.mealPrice} Tr</td>
                    <td>${item.servicePrice} Tr</td>
                    <td>${item.incurredPrice} Tr</td>
                    <td>${item.total} Tr</td>

                    <td>${item.paired} Tr</td>
                    <td>${(item.total - item.paired).toFixed(1)} Tr</td>
                  </tr>
          `);
      });

      updatePagination(payments);
    }

    function updatePagination(payments) {
      const totalPages = Math.ceil(payments.length / paymentsPerPage);
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
        displaypayments(currentPage, filteredpayments);
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
        displaypayments(currentPage, filteredpayments);
      }
    });

    $(".pagination").on("click", ".page-link", function (e) {
      e.preventDefault();
      const pageItem = $(this).parent();
      if (!pageItem.hasClass("prev-page") && !pageItem.hasClass("next-page")) {
        $(".page-item").removeClass("active");
        pageItem.addClass("active");
        currentPage = parseInt($(this).text());
        displaypayments(currentPage, filteredpayments);
      }
    });

    // Initialize pagination
    const totalPages = Math.ceil(filteredpayments.length / paymentsPerPage);
    createPagination(totalPages, filteredpayments);
    displaypayments(currentPage, filteredpayments);
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

    $("#order-filter").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      filteredpayments = payments.filter(function (item) {
        return (
          item.paymentID.toString().toLowerCase().includes(value) ||
          item.name.toLowerCase().includes(value) ||
          item.phone.toLowerCase().includes(value) ||
          item.room.toLowerCase().includes(value) ||
          item.checkIn.toLowerCase().includes(value) ||
          item.checkOut.toLowerCase().includes(value) ||
          item.roomPrice.toString().toLowerCase().includes(value) ||
          item.mealPrice.toString().toLowerCase().includes(value) ||
          item.servicePrice.toString().toLowerCase().includes(value) ||
          item.incurredPrice.toString().toLowerCase().includes(value) ||
          item.total.toString().toLowerCase().includes(value) ||
          item.paired.toString().toLowerCase().includes(value)
        );
      });

      createPagination(
        Math.ceil(filteredpayments.length / paymentsPerPage),
        filteredpayments
      );
      displaypayments(1, filteredpayments);
      currentPage = 1;
    });

    $(document).on("click", ".orderbtn", function () {
      var id = $(this).attr("target");
      $("#saveOrder").attr("target", id);
      var currentOrder = payments.filter((item) => item.id == id)[0];

      $("#orderID").val(currentOrder.paymentID);
      $("#name").val(currentOrder.name);
      $("#email").val(currentOrder.email);
      $("#phone").val(currentOrder.phone);
      $("#checkIn").val(formatDate(currentOrder.checkIn));
      $("#checkOut").val(formatDate(currentOrder.checkOut));
      $("#roomPrice").val(currentOrder.roomPrice);
      $("#mealPrice").val(currentOrder.mealPrice);
      $("#servicePrice").val(currentOrder.servicePrice);
      $("#incurredPrice").val(currentOrder.incurredPrice);
      $("#total").val(currentOrder.total);
      $("#paired").val(currentOrder.paired);
      $("#remain").val((currentOrder.total - currentOrder.paired).toFixed(1));
    });

    $("#saveOrder").on("click", function () {
      var id = $(this).attr("target");
      var currentOrder = payments.filter((item) => item.id == id)[0];
      currentOrder.roomPrice = $("#roomPrice").val();
      currentOrder.mealPrice = $("#mealPrice").val();
      currentOrder.servicePrice = $("#servicePrice").val();
      currentOrder.incurredPrice = $("#incurredPrice").val();
      currentOrder.total = $("#total").val();
      currentOrder.paired = $("#paired").val();
      displaypayments(currentPage, filteredpayments);

      localStorage.setItem("payments", JSON.stringify(payments));
    });

    function changeTotal() {
      var roomPrice = Number($("#roomPrice").val());
      var mealPrice = Number($("#mealPrice").val());
      var servicePrice = Number($("#servicePrice").val());
      var incurredPrice = Number($("#incurredPrice").val());
      var total = roomPrice + mealPrice + servicePrice + incurredPrice;
      $("#total").val(total.toFixed(1));
      var paired = Number($("#paired").val());
      var remain = Number($("#total").val()) - paired;
      $("#remain").val(remain.toFixed(1));
    }

    $(document).on("keyup", "#roomPrice", function () {
      changeTotal();
    });
    $(document).on("keyup", "#mealPrice", function () {
      changeTotal();
    });
    $(document).on("keyup", "#servicePrice", function () {
      changeTotal();
    });
    $(document).on("keyup", "#incurredPrice", function () {
      changeTotal();
    });
    $(document).on("keyup", "#paired", function () {
      changeTotal();
    });
  });
})(jQuery);

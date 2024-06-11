(function ($) {
  var bookings = JSON.parse(localStorage.getItem("bookings"));

  var bookingStatus = {
    Canceled: "danger",
    Using: "info",
    Delivered: "success",
    Waiting: "warning",
  };

  function renderBookings(bookings, filter) {
    var userID = JSON.parse(localStorage.getItem("user")).id;
    $(".bookingData").empty();

    bookings.forEach((item) => {
      if (
        item.accountID === userID &&
        (filter === "All" || item.status === filter)
      ) {
        console.log(item.message);
        $(".bookingData").append(`
                    <tr>
                        <td>
                            <a class="navi-link" href="#order-details" data-toggle="modal">${
                              item.orderID
                            }</a>
                        </td>
                        <td>${item.checkIn}</td>
                        <td>${item.checkOut}</td>
                        <td>${item.adult}</td>
                        <td>${item.child}</td>
                        <td>${item.branch}</td>
                        <td><span>${item.room}</span></td>
                        <td><span class="text-primary">${
                          item.total
                        } Tr</span></td>
                        <td>${item.message}</td>
                        <td><span class="bg-${
                          bookingStatus[item.status]
                        } m-0 p-1 text-white rounded-2 text-center">${
          item.status
        }</span></td>
                        <td><span>${item.note}</span></td>
                    </tr>
                `);
      }
    });
  }

  $(document).ready(function () {
    var userID = JSON.parse(localStorage.getItem("user")).id;

    $(".bookingTable").append(
      `
            <div class="d-flex justify-content-end pb-3">
              <div class="form-inline">
                <label class="text-muted mr-3" for="order-sort">Sort Orders</label>
                <select class="form-control" id="order-sort">
                  <option value="All">All</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Using">Using</option>
                  <option value="Waiting">Waiting</option>
                  <option value="Canceled">Canceled</option>
                </select>
              </div>
            </div>
            <div class="table-responsive">
              <table class="table table-hover mb-0">
                <thead>
                  <tr>
                    <th>Order #</th>
                    <th>CheckIn</th>
                    <th>CheckOut</th>
                    <th>Adult</th>
                    <th>Child</th>
                    <th>Branch</th>
                    <th>Room</th>
                    <th>Total</th>
                    <th>Message</th>
                    <th>Status</th>
                    <th>Note</th>
                  </tr>
                </thead>
                <tbody class="bookingData"></tbody>
              </table>
            </div>
          `
    );

    renderBookings(bookings, "All");

    $("#order-sort").on("change", function () {
      var filter = $(this).val();
      renderBookings(bookings, filter);
    });
  });
})(jQuery);

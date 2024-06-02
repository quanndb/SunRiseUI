import paymentsData from "../mock/payments.js";

(function ($) {
  var user = JSON.parse(localStorage.getItem("user")) || {};
  var users = Array.isArray(user) ? user : [user]; // Ensure users is an array
  var userID = user.id;
  $(".paymentData").empty();

  // Ensure localStorage data is initialized
  var storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
  console.log(storedBookings);
  $(document).ready(function () {
    $(".paymentsHistory").append(`
      <div class="table-responsive">
        <table class="table table-hover mb-0">
          <thead>
            <tr>
              <th>Payment #</th>
              <th>Full name</th>
              <th>Phone</th>
              <th>Room</th>
              <th>Created Date</th>
              <th>Room Price</th>
              <th>Meal Price</th>
              <th>Service Price</th>
              <th>Incurred Price</th>

              <th>Total</th>
            </tr>
          </thead>
          <tbody class="paymentData"></tbody>
        </table>
      </div>
    `);

    paymentsData.forEach((item) => {
      if (item.accountID === userID) {
        $(".paymentData").append(`
          <tr>
            <td>
              <a class="navi-link" href="#order-details" data-toggle="modal">${
                item.paymentID
              }</a>
            </td>
            <td>${
              // users.find((subItem) => subItem.id === item.accountID)
              //   ?.fullname || ""
              storedBookings.find((subItem) => subItem.id === item.bookingID)
                ?.name || ""
            }</td>
            <td>${
              storedBookings.find((subItem) => subItem.id === item.bookingID)
                ?.phone || ""
            }</td>
            <td><span>${
              storedBookings.find((subItem) => subItem.id === item.bookingID)
                ?.room || ""
            }</span></td>
            <td>${item.createdDate}</td>
            <td>${item.roomPrice} Triệu</td>
            <td>${item.mealPrice} Triệu</td>
            <td>${item.servicePrice} Triệu</td>
            <td>${item.incurredPrice} Triệu</td>


            
            <td><span class="text-primary">${
              item.total ||
              item.roomPrice +
                item.mealPrice +
                item.servicePrice +
                item.incurredPrice
            } Triệu</span></td>
                      </tr>
        `);
      }
    });
  });
})(jQuery);

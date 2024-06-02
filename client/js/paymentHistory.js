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

    // Render payments
    function openModal(id) {
      console.log(id);
    }

    paymentsData.forEach((item) => {
      if (item.accountID === userID) {
        $(".paymentData").append(`
        <tr>
        <td>
            <a class="navi-link" href="#" data-bs-toggle="modal" data-bs-target="#commentModal">${
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
        $(".comment-modal").append(`
        <div
        class="modal fade"
        id="commentModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalCenterTitle">
                Rate and Message
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
            <p class="text-primary">${item.paymentID}</p>
              <form>
                <div class="form-group">
                  <label for="rate">Rate</label><br />
                  <span id="stars">
                    <i class="bi bi-star-fill star text-primary" data-value="1"></i>
                    <i class="bi bi-star star " data-value="2"></i>
                    <i class="bi bi-star star " data-value="3"></i>
                    <i class="bi bi-star star " data-value="4"></i>
                    <i class="bi bi-star star " data-value="5"></i>
                  </span>
                  <input type="hidden" id="rate" name="rate" value="0" required />
                </div>
                <div class="form-group">
                  <label for="message">Message</label>
                  <textarea
                    class="form-control"
                    id="message"
                    rows="3"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
        `);
      }
    });

    $(".star").on("click", function () {
      $(".star").removeClass("text-primary");
      $(".star").removeClass("bi-star-fill");
      $(this).addClass("text-primary");
      $(this).removeClass("bi-star");
      $(this).addClass("bi-star-fill");
      $(".star").forEach((item) => {
        if (item.getAttribute("data-value") > $(this).attr("data-value")) {
          item.classList.remove("text-primary");
          item.classList.add("bi-star");
          item.classList.remove("bi-star-fill");
        }
      });
    });
  });
})(jQuery);

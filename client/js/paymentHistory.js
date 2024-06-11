(function ($) {
  var user = JSON.parse(localStorage.getItem("user")) || {};
  var userID = user.id;
  $(".paymentData").empty();

  var paymentsData = JSON.parse(localStorage.getItem("payments")) || [];
  // Ensure localStorage data is initialized
  var storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];

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

    paymentsData.forEach((item) => {
      if (item.accountID === userID && item.paired != "0") {
        console.log(item);
        $(".paymentData").append(`
        <tr>
        <td>
            <a class="navi-link" href="#" data-bs-toggle="modal" data-bs-target="#${
              item.paymentID
            }">${item.paymentID}</a>
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


          
          <td><span class="text-primary">${(
            Number(item.roomPrice) +
            Number(item.mealPrice) +
            Number(item.servicePrice) +
            Number(item.incurredPrice)
          ).toFixed(1)} Triệu</span></td>
          </tr>
        `);
        $(".comment-modal").append(`
        <div
        class="modal fade"
        id="${item.paymentID}"
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
                    ${[1, 2, 3, 4, 5]
                      .map(
                        (subitem) =>
                          `<i class="bi ${
                            subitem <= item.rate ? "bi-star-fill" : "bi-star"
                          } ${
                            subitem <= item.rate ? "text-primary" : ""
                          } star ${item.paymentID}" data=${
                            item.paymentID
                          } data-value="${subitem}"></i>`
                      )
                      .join("")}
                  </span>
                  <input type="hidden" id="rate${
                    item.paymentID
                  }" name="rate" value="${item.rate || "0"}" required />
                </div>
                <div class="form-group">
                  <label for="message">Message</label>
                  <textarea
                    class="form-control"
                    id="message${item.paymentID}"
                    rows="3"
                    placeholder="Enter your message"
                    ${item.isComment ? "disabled" : ""}
                  >${item.comment || ""}</textarea>
                </div>
              </form>
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary submit-comment ${
                item.isComment ? "disabled" : ""
              }"
              data-bs-dismiss="modal" data-submit="${
                item.paymentID
              }">Submit</button>
            </div>
          </div>
        </div>
      </div>
        `);
      }
    });

    $(".star").on("click", function () {
      const paymentID = $(this).attr("data");
      const isComment = paymentsData.find(
        (item) => item.paymentID === paymentID
      ).isComment;
      if (!isComment) {
        $(`.star.${paymentID}`).removeClass("text-primary");
        $(`.star.${paymentID}`).removeClass("bi-star-fill");
        $(`.star.${paymentID}`).addClass("bi-star");
        $(this).addClass("text-primary");
        $(this).removeClass("bi-star");
        $(this).addClass("bi-star-fill");
        const currentValue = $(this).attr("data-value");
        $(`.star.${paymentID}`).each(function () {
          if ($(this).attr("data-value") <= currentValue) {
            $(this).addClass("text-primary");
            $(this).removeClass("bi-star");
            $(this).addClass("bi-star-fill");
          }
        });
        $(`#rate${paymentID}`).val(currentValue);
      }
    });

    $(".submit-comment").on("click", function () {
      const paymentID = $(this).attr("data-submit");
      const rate = $(`#rate${paymentID}`).val();
      const message = $(`#message${paymentID}`).val();
      $(`#rate${paymentID}`).val("0");
      $(`#message${paymentID}`).attr("disabled", true);
      paymentsData.find(
        (item) => item.paymentID === paymentID
      ).isComment = true;
      paymentsData.find((item) => item.paymentID === paymentID).rate = rate;
      paymentsData.find((item) => item.paymentID === paymentID).comment =
        message;

      const currentBookingID = paymentsData.find(
        (item) => item.paymentID === paymentID
      ).bookingID;
      const currentRoom = JSON.parse(localStorage.getItem("bookings")).find(
        (item) => {
          return item.id === currentBookingID;
        }
      ).room;
      console.log(currentRoom);
      const username = JSON.parse(localStorage.getItem("user")).username;
      const reviews = JSON.parse(localStorage.getItem("reviews"));
      reviews.push({
        id: reviews.length + 1,
        username: username,
        img: username.avarta ? username.avarta : "./img/initimageprofile.jpg",
        comment: message,
        // take current date and format it like: 2023-11-16 09:32
        date:
          new Date().getFullYear() +
          "-" +
          String(new Date().getMonth() + 1).padStart(2, "0") +
          "-" +
          String(new Date().getDate()).padStart(2, "0") +
          " " +
          String(new Date().getHours()).padStart(2, "0") +
          ":" +
          String(new Date().getMinutes()).padStart(2, "0"),
        like: 0,
        disLike: 0,
        reply: [],
        isLike: false,
        isDislike: false,
        rate: rate,
        room: currentRoom,
      });
      localStorage.setItem("reviews", JSON.stringify(reviews));
      localStorage.setItem("payments", JSON.stringify(paymentsData));
      $(".comment-modal").modal("hide");
      window.location.reload();
    });
  });
})(jQuery);

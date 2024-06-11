// import rooms from "../mock/rooms.js";

(function ($) {
  const bookings = JSON.parse(localStorage.getItem("bookings"));
  const rooms = JSON.parse(localStorage.getItem("rooms"));
  var userID = JSON.parse(localStorage.getItem("user")).id;
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
  $(document).ready(function () {
    if (JSON.parse(localStorage.getItem("user"))) {
      $("#booking").html(`
                        <form>
                  <div class="row g-3">
                    <div class="col-md-6">
                      <div class="form-floating">
                        <input
                          type="text"
                          class="form-control"
                          id="name"
                          placeholder="Your Name"
                        />
                        <label for="name">Your Name</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-floating">
                        <input
                          type="text"
                          class="form-control"
                          id="phone"
                          placeholder="Your Phone"
                        />
                        <label for="phone">Your Phone</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-floating">
                        <input
                          type="text"
                          class="form-control"
                          id="email"
                          placeholder="Your Email"
                        />
                        <label for="email">Your Email</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div
                        class="form-floating date"
                        id="date3"
                        data-target-input="nearest"
                      >
                        <input
                          type="date"
                          class="form-control datetimepicker-input"
                          id="checkin"
                          placeholder="Check In"
                          data-target="#date3"
                          data-toggle="datetimepicker"
                        />
                        <label for="checkin">Check In</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div
                        class="form-floating date"
                        id="date4"
                        data-target-input="nearest"
                      >
                        <input
                          type="date"
                          class="form-control datetimepicker-input"
                          id="checkout"
                          placeholder="Check Out"
                          data-target="#date4"
                          data-toggle="datetimepicker"
                        />
                        <label for="checkout">Check Out</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-floating">
                        <select class="form-select" id="adult">
                          <option value="1">Adult 1</option>
                          <option value="2">Adult 2</option>
                          <option value="3">Adult 3</option>
                        </select>
                        <label for="adult">Select Adult</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-floating">
                        <select class="form-select" id="child">
                          <option value="1">Child 1</option>
                          <option value="2">Child 2</option>
                          <option value="3">Child 3</option>
                        </select>
                        <label for="child">Select Child</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-floating">
                        <select class="form-select" id="branch"></select>
                        <label for="branch">Select A Branch</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-floating">
                        <select class="form-select" id="room"></select>
                        <label for="room">Select A Room</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-floating">
                        <textarea
                          class="form-control"
                          placeholder="Special Request"
                          id="message"
                          style="height: 100px"
                        ></textarea>
                        <label for="message">Special Request</label>
                      </div>
                    </div>
                    <div class="col-12 error-message text-danger"></div>
                    <div class="col-12">
                      <button
                        class="btn btn-primary w-100 py-3"
                        type="submit"
                        id="submit-booking"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </form>
        `);
    }
    $("#submit-booking").on("click", function (event) {
      event.preventDefault();
      var name = $("#name").val();
      var email = $("#email").val();
      var phone = $("#phone").val();
      var checkin = $("#checkin").val();
      var checkout = $("#checkout").val();
      var adult = $("#adult").val();
      var child = $("#child").val();
      var branch = $("#branch").val();
      var room = $("#room").val();
      var message = $("#message").val();
      if (
        name == "" ||
        email == "" ||
        phone == "" ||
        checkin == "" ||
        checkout == "" ||
        adult == "" ||
        child == "" ||
        branch == "" ||
        room == ""
      ) {
        $(".error-message").text("Please fill in all fields");
      } else if (
        //validate checkin and checkout by current date
        new Date(checkin) < new Date() ||
        new Date(checkout) < new Date() ||
        new Date(checkin) >= new Date(checkout)
      ) {
        $(".error-message").text("Check in date must be before check out date");
        console.log(checkin, checkout);
      } else {
        $(".error-message").text("Successful");
        var bookings = JSON.parse(localStorage.getItem("bookings"));
        var payments = JSON.parse(localStorage.getItem("payments"));
        var user = JSON.parse(localStorage.getItem("user"));
        var newBooking = {
          id: bookings.length + 1,
          accountID: userID,
          orderID: "78A643CD40" + Math.floor(Math.random() * 1000),
          checkIn: formatDateReverse(checkin),
          checkOut: formatDateReverse(checkout),
          adult: Number(adult),
          child: Number(child),
          branch: branch,
          room: room,
          total: Number(rooms.filter((item) => item.roomName == room)[0].price),
          roomId: Number(rooms.filter((item) => item.roomName == room)[0].price)
            .id,
          message: message,
          note: "",
          status: "Waiting",
          name: name,
          email: email,
          phone: phone,
          isReaded: false,
        };
        bookings.push(newBooking);
        var currentBooking = bookings.filter(
          (item) => item.id == newBooking.id
        )[0];
        var newPayment = {
          id: payments.length + 1,
          accountID: user.id,
          bookingID: currentBooking.id,
          checkIn: currentBooking.checkIn,
          checkOut: currentBooking.checkOut,
          createdDate: currentBooking.checkIn,
          name: currentBooking.name,
          phone: currentBooking.phone,
          paymentID: currentBooking.orderID,
          roomPrice: Number(
            rooms.filter((item) => item.roomName == room)[0].price
          ),
          room: currentBooking.room,
          mealPrice: 0,
          servicePrice: 0,
          incurredPrice: 0,
          paired: 0,
          total: Number(rooms.filter((item) => item.roomName == room)[0].price),
          isComment: false,
          rate: 0,
        };
        payments.push(newPayment);
        localStorage.setItem("bookings", JSON.stringify(bookings));
        localStorage.setItem("payments", JSON.stringify(payments));
        window.location.href = "bookingHistory.html";
      }
    });
  });
})(jQuery);

// import rooms from "../mock/rooms.js";

(function ($) {
  const bookings = JSON.parse(localStorage.getItem("bookings"));
  const rooms = JSON.parse(localStorage.getItem("rooms"));
  var userID = JSON.parse(localStorage.getItem("user")).id;
  $(document).ready(function () {
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
        var newBooking = {
          accountID: userID,
          orderID: "78A643CD40" + Math.floor(Math.random() * 1000),
          checkIn: checkin,
          checkOut: checkout,
          adult: adult,
          child: child,
          branch: branch,
          room: room,
          total: rooms.filter((item) => item.roomName == room)[0].price,
          message: message,
          note: "",
          status: "Waiting",
          name: name,
          email: email,
          phone: phone,
          isReaded: false,
        };
        console.log(bookings);
        bookings.push(newBooking);
        localStorage.setItem("bookings", JSON.stringify(bookings));
        window.location.href = "bookingHistory.html";
      }
    });
  });
})(jQuery);

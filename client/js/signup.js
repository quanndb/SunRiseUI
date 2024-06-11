import ACCOUNTS from "../mock/accounts.js";

(function ($) {
  $(document).on("click", "#signup-btn", function () {
    var username = $("#username").val();
    var password = $("#password").val();
    var cfpassword = $("#cfpassword").val();
    var fullname = $("#fullname").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    console.log(username);
    $("#error-message").text("");
    if (
      username == "" ||
      password == "" ||
      cfpassword == "" ||
      fullname == "" ||
      email == "" ||
      phone == ""
    ) {
      $("#error-message").text("Please fill in all fields");
    } else if (password != cfpassword) {
      $("#error-message").text("Confirm password not match");
    } else {
      $("#error-message").text("Successful");
      localStorage.setItem(
        "user",
        JSON.stringify({
          address: "",
          avatar: "",
          email: email,
          fullname: fullname,
          gender: "",
          id: Math.floor(Math.random() * 1000) + 1,
          national: "",
          password: password,
          phone: phone,
          role: "USER",
          username: username,
        })
      );
      window.location.href = "index.html";
    }
  });
})(jQuery);

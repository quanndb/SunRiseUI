import ACCOUNTS from "../mock/accounts.js";

(function ($) {
  $(document).ready(function () {
    $("#login-btn").click(function (event) {
      event.preventDefault();

      var username = $("#username").val();
      var password = $("#password").val();
      var errorMessage = $("#error-message");

      if (!username || !password) {
        errorMessage.text("Please fill in all fields");
        return;
      } else {
        errorMessage.text("");
      }

      let foundAccount = ACCOUNTS.filter((item) => {
        return item.username === username;
      });
      if (foundAccount.length > 0 && foundAccount[0].password === password) {
        errorMessage.text("");
        localStorage.setItem("user", JSON.stringify(foundAccount[0]));

        console.log("Dnhap thanh cong");
        window.location.href = "index.html";
      } else {
        errorMessage.text("Tài khoản hoặc mật khẩu chưa chính xác");
      }
    });
  });
})(jQuery);

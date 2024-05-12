

(function ($) {
  $(document).ready(function () {
    var savedUsername = JSON.parse(localStorage.getItem("user"));
    var authGroup = $(".auth-group");

    if (savedUsername) {
      var logoutButton = $("<button></button>", {
        class: "btn btn-danger mx-1",
        text: "Logout",
      });

      logoutButton.on("click", function () {
        localStorage.removeItem("user");
        window.location.href = "index.html";
      });

      var usernameElement = $("<span></span>", {
        class: "mx-4 text-center text-primary fw-bold fs-5 mt-1",
        text: savedUsername.fullname,
      });

      var authInfo = $("<div></div>", {
        class: "d-flex justify-content-end",
      });

      authInfo.append(usernameElement);
      authInfo.append(logoutButton);

      authGroup.empty();
      authGroup.append(authInfo);
    } else {
      var loginButton = $("<a></a>", {
        href: "login.html",
        html: '<button class="btn btn-primary mx-1">Login</button>',
      });

      var signupButton = $("<a></a>", {
        href: "signup.html",
        html: '<button class="btn btn-secondary mx-1">Signup</button>',
      });

      authGroup.empty();
      authGroup.append(loginButton);
      authGroup.append(signupButton);
    }
  });
})(jQuery);

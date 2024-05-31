(function ($) {
  $(document).ready(function () {
    var savedUsername = JSON.parse(localStorage.getItem("user"));
    var authGroup = $(".auth-group");

    if (savedUsername) {
      var logoutButton = $("<button></button>", {
        class: "btn btn-danger",
        text: "Logout",
      });

      logoutButton.on("click", function () {
        localStorage.removeItem("user");
        window.location.href = "index.html";
      });

      var usernameElement = $("<a></a>", {
        class: "me-2 mb-0 text-center text-primary fw-bold fs-5",

        text: savedUsername.fullname,
        href: "userProfile.html",
      });

      var authInfo = $("<div></div>", {
        class: "d-flex justify-content-end align-items-center",
      });

      authInfo.append(usernameElement);
      authInfo.append(logoutButton);

      authGroup.empty();
      authGroup.append(authInfo);
    } else {
      var loginButton = $("<a></a>", {
        href: "login.html",
        html: '<button class="btn btn-primary me-2">Login</button>',
      });

      var signupButton = $("<a></a>", {
        href: "signup.html",
        html: '<button class="btn btn-secondary">Signup</button>',
      });

      authGroup.empty();
      authGroup.append(loginButton);
      authGroup.append(signupButton);
    }
  });
})(jQuery);

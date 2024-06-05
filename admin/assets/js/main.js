(function ($) {
  $(document).ready(function () {
    if (localStorage.getItem("admins")) {
      var item = JSON.parse(localStorage.getItem("admins"));

      $(".profilee").append(`
    <a
              class="nav-link nav-profile d-flex align-items-center pe-0"
              href="#"
              data-bs-toggle="dropdown"
            >
              <img
                src="${
                  item.avatar ? item.avatar : "assets/img/initimageprofile.jpg"
                }"
                alt="Profile"
                class="rounded-circle"
              />
              <span class="d-none d-md-block dropdown-toggle ps-2"
                >${item.fullName}</span
              > </a
            ><!-- End Profile Iamge Icon -->

            <ul
              class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile"
            >
              <li class="dropdown-header">
                <h6>${item.fullName}</h6>
                <span>${item.job}</span>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>

              <li>
                <a
                  class="dropdown-item d-flex align-items-center"
                  href="users-profile.html"
                >
                  <i class="bi bi-person"></i>
                  <span>My Profile</span>
                </a>
              </li>

              <li>
                <hr class="dropdown-divider" />
              </li>

              <li>
                <button type="button" class="dropdown-item d-flex align-items-center signOut">
                  <i class="bi bi-box-arrow-right"></i>
                  <span>Sign Out</span>
                </button>
              </li>
            </ul>
    `);

      $(".signOut").click(function () {
        localStorage.removeItem("admins");
        window.location.href = "/admin/pages-login.html";
      });
    } else {
      window.location.href = "/admin/pages-login.html";
    }
  });
})(jQuery);

const header = `
    <!-- ======= Header ======= -->
    <header id="header" class="header fixed-top d-flex align-items-center">
      <div class="d-flex">
        <a href="index.html" class="logo d-flex align-items-center">
          <span class="d-block">SunRise</span>
        </a>
        <i class="bi bi-list toggle-sidebar-btn"></i>
      </div>
      <!-- End Logo -->

      <nav class="header-nav ms-auto">
        <ul class="d-flex align-items-center">
          <li class="nav-item dropdown">
            <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
              <i class="bi bi-bell"></i>
              <span class="badge bg-primary badge-number num-orders"></span> </a
            ><!-- End Notification Icon -->

            <ul
              class="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications"
            >
              <li class="dropdown-header">
                You have <span class="num-orders fw-bold text-primary"></span> new
                notifications
              </li>

              <div class="notifications-container"></div>

              <li class="dropdown-footer">
                <a href="order.html" class="text-primary"
                  >Show all notifications</a
                >
              </li>
            </ul>
            <!-- End Notification Dropdown Items -->
          </li>
          <!-- End Notification Nav -->

          <li class="nav-item dropdown">
            <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
              <i class="bi bi-chat-left-text"></i>
              <span class="badge bg-primary badge-number num-message"
                >3</span
              > </a
            ><!-- End Messages Icon -->

            <ul
              class="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages"
            >
              <li class="dropdown-header">
                You have
                <span class="num-message text-primary fw-bold">3</span> new
                messages
                <a href="#"></a>
              </li>
              <hr />
              <!-- message start -->
              <div class="message-container"></div>
              <!-- message end -->
              <li class="text-center">
                <a href="contact.html" class="text-decoration-underline"
                  >View All</a
                >
              </li>
            </ul>
            <!-- End Messages Dropdown Items -->
          </li>
          <!-- End Messages Nav -->

          <li class="nav-item dropdown pe-3 profilee">
           
          </li>
          <!-- End Profile Nav -->
        </ul>
      </nav>
      <!-- End Icons Navigation -->
    </header>
    <!-- End Header -->
`;
const sidebar = `
    <!-- ======= Sidebar ======= -->
    <aside id="sidebar" class="sidebar">
      <ul class="sidebar-nav" id="sidebar-nav">
        <li class="nav-item">
          <a class="nav-link" href="index.html">
            <i class="bi bi-grid"></i>
            <span>Dashboard</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="contact.html">
            <i class="bi bi-chat-dots"></i>
            <span>Contact</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="rooms.html">
            <i class="bi bi-houses"></i>
            <span>Rooms</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="order.html">
            <i class="bi bi-newspaper"></i>
            <span>Orders</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="accountsManager.html">
            <i class="bi bi-people"></i>
            <span>Accounts</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="payment.html">
            <i class="bi bi-cash-coin"></i>
            <span>Profit report</span>
          </a>
        </li>
        <!-- End Dashboard Nav -->

        <li class="nav-item">
          <a class="nav-link" href="users-profile.html">
            <i class="bi bi-person"></i>
            <span>Profile</span>
          </a>
        </li>
        <!-- End Profile Page Nav -->
      </ul>
    </aside>
<!-- End Sidebar-->

`;

(function ($) {
  $(document).ready(function () {
    $("#header-container").append(header);
    $("#sidebar-container").append(sidebar);
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

    $(document).on("click", ".toggle-sidebar-btn", function () {
      $("#main").toggleClass("mleft");
      $("#sidebar").toggleClass("hideSB");
    });
  });
})(jQuery);

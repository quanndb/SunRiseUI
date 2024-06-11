if (localStorage.getItem("admins") == null) {
  window.location.href = "/admin/pages-login.html";
}
const role = JSON.parse(localStorage.getItem("admins")).role;
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
          <a class="nav-link" href="contact.html">
            <i class="bi bi-chat-dots"></i>
            <span>Contact</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="order.html">
            <i class="bi bi-newspaper"></i>
            <span>Orders</span>
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
        ${
          role === "ADMIN"
            ? `        
          <!-- End Profile Page Nav -->
        <li class="nav-item">
          <a class="nav-link" href="accountsManager.html">
            <i class="bi bi-people"></i>
            <span>Accounts</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="rooms.html">
            <i class="bi bi-houses"></i>
            <span>Rooms</span>
          </a>
        </li>`
            : ""
        }
      </ul>
    </aside>
<!-- End Sidebar-->

`;

(function ($) {
  $(document).ready(function () {
    $("#header-container").append(header);
    $("#sidebar-container").append(sidebar);
    var item = JSON.parse(localStorage.getItem("admins"));

    $(document).on("click", ".signOut", function () {
      localStorage.removeItem("admins");
      window.location.href = "/admin/pages-login.html";
    });

    $(document).on("click", ".toggle-sidebar-btn", function () {
      $("#main").toggleClass("mleft");
      $("#sidebar").toggleClass("hideSB");
    });

    var rooms = JSON.parse(localStorage.getItem("rooms"));
    var payments = JSON.parse(localStorage.getItem("payments"));
    var hotels = JSON.parse(localStorage.getItem("hotels"));
    var reviews = JSON.parse(localStorage.getItem("reviews"));
    var contacts = JSON.parse(localStorage.getItem("contacts"));
    var bookings = JSON.parse(localStorage.getItem("bookings"));

    function getCurrentDate() {
      const today = new Date();
      const day = today.getDate();
      return day;
    }
    // Hàm lấy tuần hiện tại
    function getCurrentWeek() {
      const today = new Date();
      const firstDayOfWeek = new Date(
        today.setDate(today.getDate() - today.getDay())
      );
      const lastDayOfWeek = new Date(
        today.setDate(today.getDate() - today.getDay() + 6)
      );
      return { start: firstDayOfWeek.getDate(), end: lastDayOfWeek.getDate() };
    }
    // Hàm lấy tháng hiện tại
    function getCurrentMonth() {
      const today = new Date();
      const firstDayOfMonth = new Date(
        today.getFullYear(),
        today.getMonth(),
        1
      );
      const lastDayOfMonth = new Date(
        today.getFullYear(),
        today.getMonth() + 1,
        0
      );
      return {
        start: firstDayOfMonth.getDate(),
        end: lastDayOfMonth.getDate(),
      };
    }

    var item = JSON.parse(localStorage.getItem("admins"));

    $(".profilee").append(`
      <a
                class="nav-link nav-profile d-flex align-items-center pe-0"
                href="#"
                data-bs-toggle="dropdown"
              >
                <img
                  src="${
                    item.avatar
                      ? item.avatar
                      : "assets/img/initimageprofile.jpg"
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

    $(".counter").append(`      
      <div class="row">
        <!-- Sales Card -->
        <div class="col-xxl-4 col-md-6">
          <div class="card info-card sales-card">
            <div class="filter">
              <a class="icon" href="#" data-bs-toggle="dropdown"
                ><i class="bi bi-three-dots"></i
              ></a>
              <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li class="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>
                <li><a class="dropdown-item all" href="#">All</a></li>
                <li>
                <li><a class="dropdown-item today" href="#">Today</a></li>
                <li><a class="dropdown-item week" href="#">This Week</a></li>
                <li><a class="dropdown-item month" href="#">This Month</a></li>
              </ul>
            </div>

            <div class="card-body">
              <h5 class="card-title">Bookings <span id="bookingFilter">| All</span></h5>
              <div class="d-flex align-items-center">
                <div
                  class="card-icon rounded-circle d-flex align-items-center justify-content-center"
                >
                  <i class="bi bi-journal-text"></i>
                </div>
                <div class="ps-3">
                  <h6 id="bookingCount">${bookings.length} Đơn</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End Sales Card -->




        <!-- Revenue Card -->
          <div class="col-xxl-4 col-md-6">
            <div class="card info-card revenue-card">
              <div class="filter">
                <a class="icon" href="#" data-bs-toggle="dropdown"
                  ><i class="bi bi-three-dots"></i
                ></a>
                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li class="dropdown-header text-start" >
                    <h6>Filter</h6>
                  </li>

                  <li><a class="dropdown-item today1" href="#">Today</a></li>
                  <li><a class="dropdown-item week1" href="#">This Week</a></li>
                  <li><a class="dropdown-item month1" href="#">This Month</a></li>
                </ul>
              </div>

              <div class="card-body">
                <h5 class="card-title">Profit <span id="paymentFilter">| Today</span></h5>

                <div class="d-flex align-items-center">
                  <div
                    class="card-icon rounded-circle d-flex align-items-center justify-content-center"
                  >
                    <i class="bi bi-cash-coin"></i>
                  </div>
                  <div class="ps-3">
                    <h6 id="paymentCount">38.5 Triệu</h6>
                    
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End Revenue Card -->








          <!-- Customers Card -->
          <div class="col-xxl-4 col-xl-12">
            <div class="card info-card customers-card">
              <div class="filter">
                <a class="icon" href="#" data-bs-toggle="dropdown"
                  ><i class="bi bi-three-dots"></i
                ></a>
                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li class="dropdown-header text-start">
                    <h6>Filter</h6>
                  </li>
<li><a class="dropdown-item allContact" href="#">All</a></li>
                  <li><a class="dropdown-item processed" href="#">Processed</a></li>
                  <li><a class="dropdown-item unprocessed" href="#">Unprocessed</a></li>
                </ul>
              </div>

              <div class="card-body">
                <h5 class="card-title">Contacts <span id="contactFilter">| All</span></h5>

                <div class="d-flex align-items-center">
                  <div
                    class="card-icon rounded-circle d-flex align-items-center justify-content-center"
                  >
                    <i class="bi bi-people"></i>
                  </div>
                  <div class="ps-3">
                    <h6 id="contactCount"> ${contacts.length} Tin nhắn</h6>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End Customers Card -->
          
      </div>
    `);
    $(".all").click(function (e) {
      e.preventDefault();

      $("#bookingCount").text(bookings.length + " Đơn");
      $("#bookingFilter").text("| All");
    });
    $(".today").click(function (e) {
      e.preventDefault();
      const currentDay = getCurrentDate();
      const bookingsThisDay = bookings.filter((booking) => {
        const bookingDay = new Date(booking.checkIn).getDate();
        return bookingDay == currentDay;
      });
      $("#bookingCount").text(bookingsThisDay.length + " Đơn");
      $("#bookingFilter").text("| Today");
    });
    $(".week").click(function (e) {
      e.preventDefault();
      const currentWeek = getCurrentWeek();
      const bookingsThisWeek = bookings.filter((booking) => {
        const bookingDay = new Date(booking.checkIn).getDate();
        return bookingDay >= currentWeek.start && bookingDay <= currentWeek.end;
      });
      $("#bookingCount").text(bookingsThisWeek.length + " Đơn");
      $("#bookingFilter").text("| Week");
    });
    $(".month").click(function (e) {
      e.preventDefault();
      const currentMonth = getCurrentMonth();
      const bookingsThisMonth = bookings.filter((booking) => {
        const bookingDay = new Date(booking.checkIn).getDate();
        return (
          bookingDay >= currentMonth.start && bookingDay <= currentMonth.end
        );
      });
      $("#bookingCount").text(bookingsThisMonth.length + " Đơn");
      $("#bookingFilter").text("| Month");
    });
    // Profit action
    function calculateTotalProfit(payments) {
      return payments
        .reduce((total, payment) => total + Number(payment.total), 0)
        .toFixed(2);
    }

    $(".today1").click(function (e) {
      e.preventDefault();
      const currentDay = getCurrentDate();
      const paymentsThisDay = payments.filter((payment) => {
        const paymentDay = new Date(payment.createdDate).getDate();
        return paymentDay == currentDay;
      });
      const totalProfit = calculateTotalProfit(paymentsThisDay);
      $("#paymentCount").text(totalProfit + "Triệu");
      $("#paymentFilter").text("| Today");
    });
    $(".week1").click(function (e) {
      e.preventDefault();
      const currentWeek = getCurrentWeek();
      const paymentsThisWeek = payments.filter((payment) => {
        const paymentDay = new Date(payment.createdDate).getDate();
        return paymentDay >= currentWeek.start && paymentDay <= currentWeek.end;
      });
      const totalProfit = calculateTotalProfit(paymentsThisWeek);
      $("#paymentCount").text(totalProfit + " Triệu");
      $("#paymentFilter").text("| Week");
      console.log(totalProfit);
    });
    $(".month1").click(function (e) {
      e.preventDefault();
      const currentMonth = getCurrentMonth();
      const paymentsThisMonth = payments.filter((payment) => {
        const paymentDay = new Date(payment.createdDate).getDate();
        return (
          paymentDay >= currentMonth.start && paymentDay <= currentMonth.end
        );
      });
      const totalProfit = calculateTotalProfit(paymentsThisMonth);
      $("#paymentCount").text(totalProfit + " Triệu");
      $("#paymentFilter").text("| Month");
    });
    // contact
    $(".processed").click(function (e) {
      e.preventDefault();
      let count = 0;
      contacts.map((item) => {
        if (item.isReaded) count++;
        return count;
      });

      $("#contactCount").text(count + " Tin Nhắn");
      $("#contactFilter").text("| Processed");
    });
    $(".unprocessed").click(function (e) {
      e.preventDefault();
      let count = 0;
      contacts.map((item) => {
        if (item.isReaded === false) count++;
        return count;
      });

      $("#contactCount").text(count + " Tin Nhắn");
      $("#contactFilter").text("| UnProcessed");
    });
    $(".allContact").click(function (e) {
      e.preventDefault();

      $("#contactCount").text(bookings.length + " Tin Nhắn");
      $("#contactFilter").text("| All");
    });
  });
})(jQuery);

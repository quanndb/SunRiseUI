export const header = `
    <!-- Header Start -->
    <div class="container-fluid bg-dark px-0">
      <div class="row gx-0">
        <div class="col-lg-3 bg-dark d-none d-lg-block">
          <a
            href="index.html"
            class="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center"
          >
            <h1 class="m-0 text-primary text-uppercase">SunRise</h1>
          </a>
        </div>
        <div class="col-lg-9">
          <nav
            class="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0 d-flex align-items-center"
          >
            <a href="index.html" class="navbar-brand d-block d-lg-none">
              <h1 class="m-0 text-primary text-uppercase">SunRise</h1>
            </a>
    
            <button
              type="button"
              class="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
    
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <div
                class="navbar-nav mr-auto py-0 w-100 d-flex justify-content-between"
              >
                <div class="d-lg-flex">
                  <a href="index.html" class="nav-item nav-link page">Home</a>
                  <a href="hotel.html" class="nav-item nav-link page">Branches</a>
                  <a href="room.html" class="nav-item nav-link page">Rooms</a>
                  <div class="nav-item dropdown">
                    <a
                      href="#"
                      class="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                      >Pages</a
                    >
                    <div class="dropdown-menu rounded-0 m-0">
                      <a href="booking.html" class="dropdown-item page">Booking</a>
                      <a href="testimonial.html" class="dropdown-item page"
                        >Testimonial</a
                      >
                    </div>
                  </div>
                  <a href="contact.html" class="nav-item nav-link page">Contact</a>
                </div>
    
                <div
                  class="d-flex justify-content-end auth-group align-items-center me-2"
                >
                  <a href="login.html">
                    <button class="btn btn-primary me-2">Login</button>
                  </a>
                  <a href="signup.html">
                    <button class="btn btn-secondary">Signup</button>
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
    <!-- Header End -->
    `;
export const footer = `
<!-- Footer Start -->
<div
  class="container-fluid bg-dark text-light footer  mt-5"
>
  <div class="container pb-5">
    <div class="row g-5">
      <div class="col-md-6 col-lg-4">
        <div class="bg-primary rounded p-4">
          <a href="index.html"
            ><h1 class="text-white text-uppercase mb-3">SunRise Hotel</h1></a
          >
        </div>
      </div>
      <div class="col-md-6 col-lg-4">
        <h6 class="section-title text-start text-primary text-uppercase mb-4">
          Contact
        </h6>
        <p class="mb-2">
          <i class="fa fa-map-marker-alt me-3"></i>81 Hoang Le Kha Street,
          Ward 3, Tay Ninh City, Tay Ninh Province, Vietnam.
        </p>
        <p class="mb-2">
          <i class="fa fa-phone-alt me-3"></i>(+84) 276.3.714.714 – (+84)
          276.3.741.741 (24/24)
        </p>
        <p class="mb-2">
          <i class="fa fa-envelope me-3"></i>reservation@sunrisehotel.com.vn –
          customerservice@sunrisehotel.com.vn
        </p>
        <div class="d-flex pt-2">
          <a class="btn btn-outline-light btn-social" href=""
            ><i class="fab fa-twitter"></i
          ></a>
          <a class="btn btn-outline-light btn-social" href=""
            ><i class="fab fa-facebook-f"></i
          ></a>
          <a class="btn btn-outline-light btn-social" href=""
            ><i class="fab fa-youtube"></i
          ></a>
          <a class="btn btn-outline-light btn-social" href=""
            ><i class="fab fa-linkedin-in"></i
          ></a>
        </div>
      </div>
      <div class="col-lg-4 col-md-12">
        <div class="row gy-5 g-4">
          <div class="col-md-6">
            <h6
              class="section-title text-start text-primary text-uppercase mb-4"
            >
              Company
            </h6>
            <a class="btn btn-link" href="">About Us</a>
            <a class="btn btn-link" href="">Contact Us</a>
            <a class="btn btn-link" href="">Support</a>
          </div>
          <div class="col-md-6">
            <h6
              class="section-title text-start text-primary text-uppercase mb-4"
            >
              Services
            </h6>
            <a class="btn btn-link" href="">Food & Restaurant</a>
            <a class="btn btn-link" href="">Spa & Fitness</a>
            <a class="btn btn-link" href="">Sports & Gaming</a>
            <a class="btn btn-link" href="">Event & Party</a>
            <a class="btn btn-link" href="">GYM & Yoga</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="copyright">
      <div class="row">
        <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
          &copy; <a class="border-bottom" href="#">sunrisehotel.com</a>, All
          Right Reserved. Designed By
          <a class="border-bottom" href="#">Group 2</a>
          <br />Distributed By:
          <a class="border-bottom" href="#">TS. Nguyen Trung Phu</a>
        </div>
        <div class="col-md-6 text-center text-md-end">
          <div class="footer-menu">
            <a href="">Home</a>
            <a href="">Help</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- Footer End -->

<!-- Back to Top -->
<a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"
  ><i class="bi bi-arrow-up"></i></a>
`;

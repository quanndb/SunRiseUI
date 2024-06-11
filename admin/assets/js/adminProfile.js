(function ($) {
  $(document).ready(function () {
    var item = JSON.parse(localStorage.getItem("admins"));

    $(".adminProfile").append(`
    <div class="pagetitle">
        <h1>Profile</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item active">Profile</li>
          </ol>
        </nav>
      </div>
      <!-- End Page Title -->

      <section class="section profile ">
        <div class="row">
          <div class="col-xl-4">
            <div class="card">
              <div
                class="card-body profile-card pt-4 d-flex flex-column align-items-center"
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
                <h2>${item.fullName}</h2>
                <h3>${item.job}</h3>

              </div>
            </div>
          </div>
        
          <div class="col-xl-8">
            <div class="card">
              <div class="card-body pt-3">
                <!-- Bordered Tabs -->
                <ul class="nav nav-tabs nav-tabs-bordered">
                  
                  <li class="nav-item ">
                    <button
                      class="nav-link active"
                      data-bs-toggle="tab"
                      data-bs-target="#profile-edit"
                    >
                      Edit Profile
                    </button>
                  </li>
        
              
        
                  <li class="nav-item">
                    <button
                      class="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#profile-change-password"
                    >
                      Change Password
                    </button>
                  </li>
                </ul>
                <div class="tab-content pt-2">
        
                  <div
                    class="tab-pane fade profile-edit show active pt-3"
                    id="profile-edit"
                  >
                    <!-- Profile Edit Form -->
                    <form>
                      <div class="row mb-3">
                        <label
                          for="profileImage"
                          class="col-md-4 col-lg-3 col-form-label"
                          >Profile Image</label
                        >
                        <div class="col-md-8 col-lg-9">
                          <img class="imageProfile" src="
                          ${
                            item.avatar
                              ? item.avatar
                              : "assets/img/initimageprofile.jpg"
                          }
                          " alt="Profile" />
                          <div class="pt-2">
                          <input type="file" id="fileInput" style="display: none;" />

                            <a
                              class="btn btn-primary btn-sm changeImage"
                              title="Upload new profile image"
                              ><i class="bi bi-upload"></i
                            ></a>
                            <a
                              href="#"
                              class="btn btn-danger btn-sm"
                              title="Remove my profile image"
                              ><i class="bi bi-trash"></i
                            ></a>
                          </div>
                        </div>
                      </div>
        
                      <div class="row mb-3">
                        <label
                          for="fullName"
                          class="col-md-4 col-lg-3 col-form-label"
                          >Full Name</label
                        >
                        <div class="col-md-8 col-lg-9">
                          <input
                            name="fullName"
                            type="text"
                            class="form-control"
                            id="fullName"
                            value="${item.fullName}"
                          />
                        </div>
                      </div>
        
                      <div class="row mb-3">
                        <label
                          for="about"
                          class="col-md-4 col-lg-3 col-form-label"
                          >About</label
                        >
                        <div class="col-md-8 col-lg-9">
                          <textarea
                            name="about"
                            class="form-control"
                            id="about"
                            style="height: 100px"
                          >${item.about}</textarea
                          >
                        </div>
                      </div>
        
                      <div class="row mb-3">
                        <label
                          for="company"
                          class="col-md-4 col-lg-3 col-form-label"
                          >Company</label
                        >
                        <div class="col-md-8 col-lg-9">
                          <input
                            name="company"
                            type="text"
                            class="form-control"
                            id="company"
                            value="${item.company}"
                          />
                        </div>
                      </div>
        
                      <div class="row mb-3">
                        <label
                          for="Job"
                          class="col-md-4 col-lg-3 col-form-label"
                          >Job</label
                        >
                        <div class="col-md-8 col-lg-9">
                          <input
                            name="job"
                            type="text"
                            class="form-control"
                            id="Job"
                            value="${item.job}"
                          />
                        </div>
                      </div>
        
                      <div class="row mb-3">
                        <label
                          for="Country"
                          class="col-md-4 col-lg-3 col-form-label"
                          >Country</label
                        >
                        <div class="col-md-8 col-lg-9">
                          <input
                            name="country"
                            type="text"
                            class="form-control"
                            id="Country"
                            value="${item.country}"
                          />
                        </div>
                      </div>
        
                      <div class="row mb-3">
                        <label
                          for="Address"
                          class="col-md-4 col-lg-3 col-form-label"
                          >Address</label
                        >
                        <div class="col-md-8 col-lg-9">
                          <input
                            name="address"
                            type="text"
                            class="form-control"
                            id="Address"
                            value="${item.address}"
                          />
                        </div>
                      </div>
        
                      <div class="row mb-3">
                        <label
                          for="Phone"
                          class="col-md-4 col-lg-3 col-form-label"
                          >Phone</label
                        >
                        <div class="col-md-8 col-lg-9">
                          <input
                            name="phone"
                            type="text"
                            class="form-control"
                            id="Phone"
                            value="${item.phone}"
                          />
                        </div>
                      </div>
        
                      <div class="row mb-3">
                        <label
                          for="Email"
                          class="col-md-4 col-lg-3 col-form-label"
                          >Email</label
                        >
                        <div class="col-md-8 col-lg-9">
                          <input
                            name="email"
                            type="email"
                            class="form-control"
                            id="Email"
                            value="${item.email}"
                          />
                        </div>
                      </div>
        
                      <div class="text-center">
                        <button type="button" class="btn btn-primary saveChangeBtn">
                          Save Changes
                        </button>
                      </div>
                    </form>
                    <!-- End Profile Edit Form -->
                  </div>
                  <div class="tab-pane fade pt-3" id="profile-change-password">
                    <!-- Change Password Form -->
                    <form>
                      <div class="row mb-3">
                        <label for="currentPassword" class="col-md-4 col-lg-3 col-form-label">Current Password</label>
                        <div class="col-md-8 col-lg-9">
                          <input name="password" type="password" class="form-control" id="currentPassword" />
                        </div>
                      </div>
                      <div class="row mb-3">
                        <label for="newPassword" class="col-md-4 col-lg-3 col-form-label">New Password</label>
                        <div class="col-md-8 col-lg-9">
                          <input name="newpassword" type="password" class="form-control" id="newPassword" />
                        </div>
                      </div>
                      <div class="row mb-3">
                        <label for="renewPassword" class="col-md-4 col-lg-3 col-form-label">Re-enter New Password</label>
                        <div class="col-md-8 col-lg-9">
                          <input name="renewpassword" type="password" class="form-control" id="renewPassword" />
                        </div>
                      </div>
                      <div class="text-center">
                        <button type="button" class="btn btn-primary changePasswordBtn">Change Password</button>
                      </div>
                    </form>
                    <!-- End Change Password Form -->
                  </div>
                </div>
                <!-- End Bordered Tabs -->
              </div>
            </div>
          </div>
        </div>
      </section>
        `);

    // Sự kiện khi nhấp vào
    $(".changeImage").on("click", function () {
      $("#fileInput").click();
    });

    // Event when the user selects a new file

    $("#fileInput").on("change", function (event) {
      var file = event.target.files[0];
      if (file) {
        file.src = URL.createObjectURL(file);
        $(".imageProfile").attr("src", file.src);
      }
    });

    // event when user save profile
    $(".saveChangeBtn").on("click", function () {
      var newAdminProfile = {
        id: item.id,
        username: item.username,
        password: item.password,

        fullName: $("#fullName").val(),
        about: $("#about").val(),
        company: $("#company").val(),
        job: $("#Job").val(),
        country: $("#Country").val(),
        address: $("#Address").val(),
        role: item.role,

        phone: $("#Phone").val(),
        email: $("#Email").val(),

        avatar: $(".imageProfile").attr("src"),
      };

      // Update the image on the page
      // $(".imageProfile").attr("src", newAdminProfile.avatar);
      localStorage.setItem("admins", JSON.stringify(newAdminProfile));
      window.location.href = "/admin/users-profile.html";
    });

    //changePass
    $(".changePasswordBtn").on("click", function () {
      var currentPassword = $("#currentPassword").val();
      var newPassword = $("#newPassword").val();
      var renewPassword = $("#renewPassword").val();

      if (currentPassword !== item.password) {
        alert("Current password is incorrect.");
        return;
      }

      if (newPassword !== renewPassword) {
        alert("New passwords do not match.");
        return;
      }

      if (newPassword.length < 6) {
        alert("New password must be at least 6 characters long.");
        return;
      }

      item.password = newPassword;
      localStorage.setItem("admins", JSON.stringify(item));
      alert("Password changed successfully.");
    });
  });
})(jQuery);

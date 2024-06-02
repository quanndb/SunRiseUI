import ACCOUNTS from "../mock/accounts.js";

(function ($) {
  $(document).ready(function () {
    var item = JSON.parse(localStorage.getItem("user"));

    $(".userProfile").append(`
        <div class="col-md-6 border-right">
          <div
            class="d-flex flex-column align-items-center text-center p-3 py-5"
          >
            <img
              class="rounded-circle mt-5"
              width="200px"
              height="200px"
              src="${item.avatar ? item.avatar : "img/initimageprofile.jpg"}"
              id="imgprofile"
            />
            <input type="file" id="fileInput" class="d-none " accept="image/*">
            <span class="font-weight-bold">${item.username}</span
            ><span class="text-black-50">${item.email}</span
            ><span> </span>
          </div>
        </div>
        
        <div class="col-md-6 border-right p-3 py-5">
                <div
                  class="d-flex justify-content-between align-items-center mb-3"
                >
                  <h4 class="text-right">Profile Settings</h4>
                </div>
                <div class="row mt-2">
                  <div class="col-md-12">
                    <label class="labels">Name</label
                    ><input
                      type="text"
                      class="form-control"
                      placeholder=""
                      id="fullname"
                      value="${item.fullname}"
                    />
                  </div>
                  
                </div>
                <div class="row mt-3">
                  <div class="col-md-12">
                    <label class="labels">Mobile Number</label
                    ><input
                      type="text"
                      class="form-control mb-3"
                      placeholder=""
                      id="phone"
                      value="${item.phone}"
                    />
                  </div>
                  
                  <div class="col-md-12">
                    <label class="labels">Gender</label>
                    <select class="form-select mb-3" id="gender" >
                      <option value="">Choose Gender</option>
                      <option value="Male" selected>Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div class="col-md-12">
                    <label class="labels">Email</label
                    ><input
                      type="text"
                      class="form-control"
                      placeholder="enter email"
                      id="email"
                      value="${item.email}"
                    />
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-md-6">
                    <label class="labels">Address</label
                    ><input
                      type="text"
                      class="form-control"
                      placeholder="Address"
                      id="address"
                      value="${item.address}"
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="labels">National</label
                    ><input
                      type="text"
                      class="form-control"
                      placeholder="National"
                      id="national"
                      value="${item.national}"
                    />
                  </div>
                </div>
                <div class="mt-5 text-center">
                  <button class="btn btn-primary profile-button" type="button">
                    Save Profile
                  </button>
                </div>       
      </div>
        `);
    $("#gender").val(item.gender);

    // Sự kiện khi nhấp vào ảnh hồ sơ
    $("#imgprofile").on("click", function () {
      $("#fileInput").click();

      // Sự kiện khi người dùng chọn tệp mới
      $("#fileInput").on("change", function (event) {
        var file = event.target.files[0];
        if (file) {
          file.src = URL.createObjectURL(file);
          $("#imgprofile").attr("src", file.src);
        }
      });
    });

    // event when user save profile
    $(".profile-button").on("click", function () {
      var newUserProfile = {
        address: $("#address").val(),
        avatar: $("#imgprofile").attr("src"),
        email: $("#email").val(),
        fullname: $("#fullname").val(),
        gender: $("#gender").val(),
        id: item.id,
        national: $("#national").val(),
        password: item.password,
        phone: $("#phone").val(),
        role: "USER",
        username: item.username,
      };
      console.log(newUserProfile.email);
      localStorage.setItem("user", JSON.stringify(newUserProfile));
      window.location.href = "userProfile.html";
    });
  });
})(jQuery);
